---
layout: mermaid
---

[Figma project](https://www.figma.com/design/mZq6FqGmvr4eLyLuvayZQ5/Claimy?node-id=18-24946&t=75b7YgB2Eyd8o9Mn-1)

![IMG_20241031_121728_500.jpg](https://github.com/user-attachments/assets/3a42ef28-49b9-4af1-9b23-fa03b47d3552)

# Claimy

[Страница проекта](https://tontiger.io) |
[Сообщество](https://t.me/tontiger_tg) |
[Приложение](https://t.me/Claimybot)

## контекст
Claimy — это P2E проект на платформе Telegram. Игра сочетает элементы стратегии и коллекционирования, позволяя пользователям майнить токены $Tigers.

## мои задачи
- Разработать интерфейс пользователя для приложения TMA
- Совместно с геймдизайнером и продактом создать механики вовлечения
- Сайт проекта
- Создавать контент для сообщества игроков в контексте блокчейн-технологий

## процесс
1. **Исследование и Планирование**
- Анализ рынка
- Исследование пользователей
- Определение концепции P2E и функций
2. **Разработка Концепции**
- Мозговой штурм механики игры и визуала
- Сюжетное наполнение и персонажи
3. **Прототипирование**
- Создание каркасов UI и графики
- Разработка прототипа
- Сессии обратной связи от оунеров для уточнения идей
4. **Проектирование**
- Финализация UI на основе отзывов
- Создание графических ресурсов (NFT, фоны, элементы)
- UX-копирайтинг
5. **Разработка**
- Интеграция в TON
- Бэк/фронт приложения
- Смарт-контракты
6. **Тестирование**
- Альфа-тестирование
- Бета-тестирование с выбранными пользователями
- Фикс на основе отзывов
7. **Запуск**
- Официальный релиз игры на платформе Telegram
- Маркетинговая кампания для привлечения игроков и коллекционеров NFT
- Взаимодействие с сообществом и поддержка в ТГ канале
8. **Сопровождение и Итерация**
- Мониторинг производительности и отзывов пользователей
- Реализы обновлений на основе запросов сообщества и роадмапу
- Добавление новых NFT и тем

## дизайн продукта

### Wireframes
![image](https://github.com/user-attachments/assets/b2230559-e940-4bc4-b044-608257c9ca56)

### Screens
![image](https://github.com/user-attachments/assets/187f4f12-f4f9-4a8b-982b-08c4c498c7d7)

### Project page

![image](https://github.com/user-attachments/assets/043c873c-4e58-4e1b-99b6-f08e23061469)

## механики

<div class="mermaid">
flowchart TD
    subgraph Ecosystem
        Users[Users]
        $TIGER[Token $TIGER]
        NFTs[NFT Collection - Tigers]
    end
    Users --> |Earn Rewards| $TIGER
    Users --> |Claim NFTs| NFTs
    $TIGER --> |Stake Tokens| Staking
    NFTs --> |Gamification| Rewards
    Staking --> |Yield Rewards| $TIGER
    $TIGER --> |Governance Voting| Platform
    subgraph Community Engagement
        Events[Partnership Events]
        Contests[Contests and Airdrops]
        Rewards[Community Rewards]
    end
    Events --> Rewards
    Contests --> Rewards
    Rewards --> Users
</div>

### Core Actions

<div class="mermaid">
flowchart TD
    Start[Start: Access Claimy Tigers]
    Register[Register Account]
    Wallet[Connect Wallet]
    ClaimNFT[Claim or Purchase NFT]
    Stake[Stake $TIGER Tokens]
    Participate[Participate in Events and Contests]
    EarnRewards[Earn Rewards]
    Governance[Vote on Platform Governance]
    Start --> Register --> Wallet
    Wallet --> ClaimNFT --> Stake
    Stake --> EarnRewards
    Participate --> EarnRewards
    EarnRewards --> Governance
    Governance --> Stake
</div>

### UserStory

<div class="mermaid">
flowchart TD
    A[Login/Connect Wallet] --> B[Browse Available Tigers]
    B --> C[Claim Selected Tiger]
    C --> D[View Claimed Assets]
    D --> E[Access Transaction History]
</div>

1. **Login/Connect Wallet** – Users authenticate and connect their TON wallet.
2. **Browse & Claim NFTs** – Users browse available Tigers and initiate the claim.
3. **View Claimed Assets** – Claimed Tigers display in the asset view.
4. **Transaction History** – Users access past transactions to track claims.
