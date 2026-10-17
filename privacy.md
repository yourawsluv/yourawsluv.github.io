---
layout: default
title: Данные и сторонние сервисы
description: Что загружает портфолио Ярослава Коротких. GitHub Pages, шрифты Google, картинки с GitHub, Mermaid, RuTube. Форм и аналитики в коде нет.
permalink: /privacy/
---

## Данные и сторонние сервисы

Это личное портфолио Ярослава Коротких, @yourawsluv. Страницы статические. Их отдаёт GitHub Pages из репозитория yourawsluv/yourawsluv.github.io. Своей базы посетителей, регистрации и формы, которая отправляла бы данные автору, на сайте нет.

Что страница запрашивает сама, видно по коду:

- Шрифты Geist, Golos Text и Roboto Mono. Ссылки ведут на fonts.googleapis.com и fonts.gstatic.com. Браузер обращается к Google Fonts, когда скачивает шрифт.
- Скриншоты кейсов лежат на github.com, во вложениях user-attachments. В голове страницы заранее открывается соединение ещё и с user-images.githubusercontent.com и private-user-images.githubusercontent.com.
- На страницах с диаграммами подключается Mermaid с cdn.jsdelivr.net. На главной этого скрипта нет.
- В кейсе DDX встроено видео с rutube.ru. Плеер загружается вместе со страницей этого кейса.
- Для старого Internet Explorer в разметке есть условный скрипт html5shiv с cdnjs.cloudflare.com. Современный браузер этот адрес не запрашивает.

Светлая или тёмная тема запоминается в localStorage браузера, ключ theme. Это значение остаётся на устройстве и на сервер автора не отправляется.

Отдельной аналитики, рекламных пикселей и баннера cookie в коде сайта нет. Журналы запросов может вести сам GitHub Pages: это инфраструктура хостинга, не скрипт портфолио.

Вопросы по сайту: [yaroslawkorotkih@yandex.ru](mailto:yaroslawkorotkih@yandex.ru). Телефон и почтовый адрес не опубликованы, поэтому здесь их нет.
