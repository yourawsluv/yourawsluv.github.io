---
tags:
  - Telegram
  - Game
  - Crypto
  - Desktop
  - Mobile
Год: 2024
Релиз: true
Описание: TWA Mobile Game on TON
Подробнее: https://www.figma.com/design/mZq6FqGmvr4eLyLuvayZQ5/TON-Tigers?node-id=18-24946&t=IY18WkJRgIhIybLf-1
---

# Claimy
Release; https://tontiger.io/

## Краткое описание
"Claimy" — это игра, разработанная для платформы Telegram, созданная командой TON Tigers. Игра сочетает элементы стратегии и коллекционирования, позволяя пользователям зарабатывать токены и взаимодействовать с другими игроками в реальном времени.

## Цели проекта
- Разработать увлекательный и интуитивно понятный интерфейс для пользователей разных возрастов и уровней подготовки.
- Создать механики вовлечения, способствующие активному взаимодействию между игроками.
- Поддерживать и развивать сообщество пользователей в контексте блокчейн-технологий.

## Задачи
1. **Исследование пользователей**: Провел исследования целевой аудитории, выявив основные потребности и предпочтения игроков.
2. **Создание прототипов**: Проектировал низко- и высокофидельные прототипы, основываясь на собранных данных. Включал основные игровые механики и пользовательские сценарии.
3. **Тестирование интерфейсов**: Организовал/организовала тестирование прототипов с пользователями, анализируя их поведенческие данные и вводя изменения для улучшения юзабилити.
4. **Редизайн UI**: Разработал/разработала элементы интерфейса, включая навигацию, кнопки и графику, обеспечивая единый стиль и удобство использования.


## Релиз
- Улучшение пользовательского опыта, что привело к увеличению вовлеченности пользователей и положительным отзывам о дизайне.
- Участие в создании новых фич игры, способствующие долгосрочному удержанию пользователей.

## UX

### Claimy Flow

```mermaid
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
```

### Core Actions

```mermaid
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
```

## UI

### Wireframes

![image](https://github.com/user-attachments/assets/b2230559-e940-4bc4-b044-608257c9ca56)

### UI

1. **Login/Connect Wallet** – Users authenticate and connect their TON wallet.
2. **Browse & Claim NFTs** – Users browse available Tigers and initiate the claim.
3. **View Claimed Assets** – Claimed Tigers display in the asset view.
4. **Transaction History** – Users access past transactions to track claims.

```mermaid
flowchart TD
    A[Login/Connect Wallet] --> B[Browse Available Tigers]
    B --> C[Claim Selected Tiger]
    C --> D[View Claimed Assets]
    D --> E[Access Transaction History]
```

![image](https://github.com/user-attachments/assets/187f4f12-f4f9-4a8b-982b-08c4c498c7d7)

### Project page

![image](https://github.com/user-attachments/assets/043c873c-4e58-4e1b-99b6-f08e23061469)



