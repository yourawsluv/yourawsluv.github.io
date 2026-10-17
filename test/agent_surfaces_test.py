#!/usr/bin/env python3
"""Checks the built _site/ for the agent-facing surfaces this repo can
actually serve on static GitHub Pages.

Run after `bundle exec jekyll build`.
"""

from __future__ import annotations

import json
import re
import unittest
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "_site"
SITEMAP_NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
UNLISTED = ("duck", "tigers", "noirroulette", "varbusters")
FEATURED = (
    "simple.html",
    "ddx.html",
    "flora.html",
    "kanoe.html",
    "mirrordao.html",
    "hadassah.html",
)
PUBLIC_EMAIL = "yaroslawkorotkih@yandex.ru"
PROFILES = (
    "https://t.me/yourawsluv",
    "https://linkedin.com/in/yaroslavkorotkikh",
    "https://github.com/yourawsluv",
    "https://x.com/yourawsluv",
)


class HeadingParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.headings = []
        self._capture = None
        self._buf = []
        self.skip_depth = 0
        self.text_parts = []

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self.skip_depth += 1
        if self.skip_depth:
            return
        match = re.fullmatch(r"h([1-6])", tag)
        if match:
            self._capture = int(match.group(1))
            self._buf = []

    def handle_endtag(self, tag):
        if tag in ("script", "style") and self.skip_depth:
            self.skip_depth -= 1
            return
        if self._capture and tag == f"h{self._capture}":
            text = re.sub(r"\s+", " ", "".join(self._buf)).strip()
            self.headings.append((self._capture, text))
            self._capture = None
            self._buf = []

    def handle_data(self, data):
        if self.skip_depth:
            return
        if self._capture:
            self._buf.append(data)
        self.text_parts.append(data)


def read_html(path):
    parser = HeadingParser()
    parser.feed(path.read_text(encoding="utf-8"))
    text = re.sub(r"\s+", " ", "".join(parser.text_parts)).strip()
    return parser.headings, text


def section_text(path):
    html = path.read_text(encoding="utf-8")
    match = re.search(r"<section>(.*)</section>", html, re.S)
    if not match:
        return ""
    chunk = re.sub(r"<script\b.*?</script>", " ", match.group(1), flags=re.S)
    chunk = re.sub(r"<style\b.*?</style>", " ", chunk, flags=re.S)
    chunk = re.sub(r"<[^>]+>", " ", chunk)
    return re.sub(r"\s+", " ", chunk).strip()


def json_ld_nodes(path):
    html = path.read_text(encoding="utf-8")
    nodes = []
    for raw in re.findall(
        r'<script type="application/ld\+json">(.*?)</script>', html, re.S
    ):
        data = json.loads(raw)
        if isinstance(data, dict) and isinstance(data.get("@graph"), list):
            nodes.extend(data["@graph"])
        elif isinstance(data, list):
            nodes.extend(data)
        else:
            nodes.append(data)
    return nodes


def walk(node, type_name):
    found = []
    if isinstance(node, dict):
        types = node.get("@type")
        if types == type_name or (isinstance(types, list) and type_name in types):
            found.append(node)
        for value in node.values():
            found.extend(walk(value, type_name))
    elif isinstance(node, list):
        for item in node:
            found.extend(walk(item, type_name))
    return found


class AgentSurfacesTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        if not (SITE / "index.html").is_file():
            raise unittest.SkipTest("build _site first: bundle exec jekyll build")

    def test_homepage_heading_order_and_content(self):
        headings, text = read_html(SITE / "index.html")
        levels = [level for level, _ in headings]
        self.assertGreaterEqual(len(text), 500)
        self.assertTrue(levels, "homepage has no headings")
        self.assertEqual(levels[0], 1)
        self.assertIn("Ярослав Коротких", headings[0][1])
        self.assertIn("портфолио продуктового дизайнера", headings[0][1])
        for prev, curr in zip(levels, levels[1:]):
            self.assertLessEqual(
                curr, prev + 1, f"heading level jumps {prev} to {curr}: {levels}"
            )
        self.assertNotIn(3, levels)
        self.assertIn(2, levels)

    def test_homepage_title_names_the_portfolio(self):
        html = (SITE / "index.html").read_text(encoding="utf-8")
        title = re.search(r"<title>(.*?)</title>", html, re.S).group(1)
        self.assertIn("Ярослав Коротких", title)
        self.assertIn("Портфолио продуктового дизайнера", title)
        self.assertNotIn("github", title.lower())
        case = (SITE / "simple.html").read_text(encoding="utf-8")
        case_title = re.search(r"<title>(.*?)</title>", case, re.S).group(1)
        self.assertIn("Увеличиваю ценность продукта через исследования", case_title)
        self.assertNotIn("Портфолио продуктового дизайнера", case_title)

    def test_sitemap_lists_indexable_urls_only(self):
        path = SITE / "sitemap.xml"
        raw = path.read_text(encoding="utf-8")
        self.assertLess(path.stat().st_size, 50 * 1024 * 1024)
        self.assertTrue(raw.lstrip().startswith("<?xml"))
        root = ET.fromstring(raw)
        locs = []
        for url in root.findall("sm:url", SITEMAP_NS):
            loc = url.find("sm:loc", SITEMAP_NS)
            lastmod = url.find("sm:lastmod", SITEMAP_NS)
            self.assertIsNotNone(loc)
            self.assertIsNotNone(lastmod)
            self.assertRegex(lastmod.text, r"^\d{4}-\d{2}-\d{2}")
            locs.append(loc.text)
        joined = "\n".join(locs)
        for slug in UNLISTED:
            self.assertNotIn(slug, joined)
        self.assertNotIn("404", joined)
        for slug in FEATURED:
            self.assertTrue(any(slug in loc for loc in locs), slug)
        for needle in ("/about/", "/contact/", "/privacy/"):
            self.assertTrue(any(loc.rstrip("/").endswith(needle.strip("/")) for loc in locs), needle)
        self.assertTrue(any(loc.rstrip("/").endswith("yourawsluv.github.io") for loc in locs))

    def test_llms_txt_when_to_use(self):
        text = (SITE / "llms.txt").read_text(encoding="utf-8")
        self.assertTrue(text.startswith("# "))
        self.assertIn("\n> ", text)
        self.assertRegex(text, r"(?im)^##\s+when to use\b")
        self.assertIn("Ярослав Коротких", text)
        for name in ("SimpleAI", "DDX", "Flora", "Kanoe", "MirrorDAO", "Hadassah"):
            self.assertIn(name, text)
        self.assertIn(PUBLIC_EMAIL, text)
        self.assertIn("https://t.me/yourawsluv", text)
        for slug in UNLISTED:
            self.assertNotIn(slug, text.lower())
        self.assertLess(len(text), 30000)

    def test_404_explains_and_links(self):
        path = SITE / "404.html"
        self.assertTrue(path.is_file())
        html = path.read_text(encoding="utf-8")
        _, text = read_html(path)
        self.assertGreaterEqual(len(text), 20)
        self.assertIn("нет", text.lower())
        self.assertIn('href="/llms.txt"', html)
        self.assertIn('href="/sitemap.xml"', html)
        self.assertIn('content="noindex, nofollow"', html)
        for slug in UNLISTED:
            self.assertNotIn(slug, html.lower())

    def test_trust_pages_are_long_enough_and_public_only(self):
        for name in ("about/index.html", "contact/index.html", "privacy/index.html"):
            path = SITE / name
            self.assertTrue(path.is_file(), name)
            text = section_text(path)
            self.assertGreaterEqual(len(text), 500, f"{name} has {len(text)} chars")
            lowered = text.lower()
            for slug in UNLISTED:
                self.assertNotIn(slug, lowered, name)
        contact_html = (SITE / "contact/index.html").read_text(encoding="utf-8")
        contact = section_text(SITE / "contact/index.html")
        self.assertIn(PUBLIC_EMAIL, contact)
        self.assertIn('href="https://t.me/yourawsluv"', contact_html)
        privacy = section_text(SITE / "privacy/index.html")
        self.assertIn("GitHub Pages", privacy)
        self.assertIn("fonts.googleapis.com", privacy)
        self.assertIn(PUBLIC_EMAIL, privacy)

    def test_json_ld_person_and_organization(self):
        nodes = json_ld_nodes(SITE / "index.html")
        people = walk(nodes, "Person")
        orgs = walk(nodes, "Organization")
        self.assertEqual(len(people), 1, people)
        self.assertEqual(len(orgs), 1, orgs)
        person = people[0]
        self.assertEqual(person["name"], "Ярослав Коротких")
        self.assertTrue(person.get("description"))
        self.assertTrue(str(person.get("url", "")).startswith("https://yourawsluv.github.io"))
        self.assertTrue(person.get("sameAs") or person.get("jobTitle") or person.get("worksFor"))
        self.assertEqual(person.get("jobTitle"), "продуктовый дизайнер")
        self.assertEqual(person.get("email"), PUBLIC_EMAIL)
        for profile in PROFILES:
            self.assertIn(profile, person["sameAs"])
        org = orgs[0]
        point = org.get("contactPoint")
        self.assertIsInstance(point, dict)
        self.assertEqual(point.get("@type"), "ContactPoint")
        self.assertEqual(point.get("email"), PUBLIC_EMAIL)
        self.assertTrue(point.get("contactType"))
        self.assertNotIn("address", org)
        self.assertNotIn("telephone", point)
        blob = json.dumps(nodes, ensure_ascii=False)
        self.assertNotIn("PostalAddress", blob)

    def test_no_fake_content_negotiation_or_mcp(self):
        self.assertFalse((SITE / ".well-known" / "mcp").exists())
        self.assertFalse((ROOT / "_headers").exists())
        self.assertFalse((ROOT / "vercel.json").exists())
        index = (SITE / "index.html").read_text(encoding="utf-8")
        self.assertIn("<html", index.lower())
        self.assertNotIn('rel="alternate" type="text/markdown"', index)


if __name__ == "__main__":
    unittest.main()
