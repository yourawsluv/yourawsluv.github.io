---
layout: mermaid
noindex: true
---

<img width="600" loading="eager" fetchpriority="high" decoding="async" alt="VarBusters: обложка P2E-игры для Vara Network" src="https://github.com/user-attachments/assets/ce2406eb-e4c1-4cea-97ff-6e1c8d47d254" />

## VarBusters: запуск P2E-игры для Vara Network

[Figma](https://www.figma.com/design/l2E5DBMhhp6L2z6ksEqjp2/Varbusters?node-id=0-1&t=gcldfpLBiesBeHiT-1) · [Telegram Mini-Apps](https://top.co/) · [Vara Network](https://vara.network/)

**Роль:** единственный продуктовый дизайнер команды запуска.
**Команда:** Ambersoft, аутсорс продуктовой разработки.
**Мой этап:** запуск, первые ~3 месяца.
**Платформа:** Telegram Mini Apps (экосистема Vara Network).

VarBusters это P2E-аркада в Telegram Mini Apps для экосистемы Vara Network. Ядро геймплея это управление тапом: игрок проходит препятствия и собирает токены $GHOSTY. Поверх аркады живёт экономика с лутбоксами, магазином и рефералкой.

## Геймплей

Основной цикл я держал предельно простым: один понятный тап-контроль, растущая сложность и мгновенно считываемый прогресс. Для формата TMA важно, чтобы игрок входил в сессию за секунды.

<img width="600" loading="lazy" decoding="async" alt="Основной игровой экран VarBusters" src="https://github.com/user-attachments/assets/286600b5-a93f-4b8d-81a4-d466446f9d9b" />

<div class="mermaid">
journey
    title Gameplay VarBusters
    section Gameplay
      Управление тапом: 5: Игрок
      Прохождение препятствий: 4: Игрок
      Сбор $GHOSTY: 4: Игрок
</div>

### Онбординг
<img width="600" loading="lazy" decoding="async" alt="Онбординг новых игроков VarBusters" src="https://github.com/user-attachments/assets/3dd5da56-8074-41af-8616-9c779a385bf9" />

## Механики и сложность

Баланс строил вокруг шкалы здоровья и риска: статические и динамические препятствия, рост сложности уровня. Игрок должен чувствовать напряжение, но не выгорать на первых минутах.

<div class="mermaid">
journey
    title Game Mechanics VarBusters
    section Health and Strategy
      Шкала здоровья уменьшается: 3: Игрок
      Риск неудачи: 2: Игрок
    section Obstacles
      Статические препятствия: 2: Игрок
      Динамические препятствия: 3: Игрок
      Увеличение сложности уровня: 3: Игрок
</div>

### Лутбоксы
<img width="600" loading="lazy" decoding="async" alt="Экран лутбоксов VarBusters" src="https://github.com/user-attachments/assets/0f26a23a-149b-4427-9d91-c6061c9d514b" />

### Клейм
<img width="600" loading="lazy" decoding="async" alt="Экран клейма наград VarBusters" src="https://github.com/user-attachments/assets/24ba4dd6-936f-4458-9de0-0d83a6b72a9f" />

### Магазин
<img width="600" loading="lazy" decoding="async" alt="Магазин VarBusters" src="https://github.com/user-attachments/assets/6e73d2eb-75ca-41af-a888-bf1559350db7" />

## Экономика: Earn

Заработок завязал на понятный игроку цикл: играешь, получаешь лутбоксы, зарабатываешь и тратишь $GHOSTY.

<img width="600" loading="lazy" decoding="async" alt="Экран заработка $GHOSTY во VarBusters" src="https://github.com/user-attachments/assets/505fdc3d-909a-4971-8a17-1dbce8b90699" />

<div class="mermaid">
journey
    title Earn VarBusters
    section Rewards
      Получение лутбоксов: 5: Игрок
      Заработок токенов GHOSTY: 4: Игрок
      Использование валюты GHOSTY: 4: Игрок
</div>

## Рефералка и рост

Реферальная механика и социальные интеграции работали на органический рост: игра с друзьями, соревнование в достижениях, награды за приглашения.

<img width="600" loading="lazy" decoding="async" alt="Реферальный экран VarBusters" src="https://github.com/user-attachments/assets/e7fcb3ce-41df-4278-b755-22e3068c34fe" />

<div class="mermaid">
journey
    title Referral and Monetization VarBusters
    section Social Integration
      Игра с друзьями: 5: Игрок
      Соревнование в достижениях: 4: Игрок
    section Monetization
      Возможность получения наград через рекламу: 3: Игрок
      Интеграция с блокчейном: 4: Игрок
</div>

## Что осталось после меня

Я закрывал запуск: онбординг, основной геймплей-экран, экономику (лутбоксы, клейм, магазин, earn) и реферальную программу. Дальше проект развивала команда фаундеров.
