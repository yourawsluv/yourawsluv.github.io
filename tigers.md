---
layout: mermaid
noindex: true
---

<img width="600" loading="eager" fetchpriority="high" decoding="async" alt="Claimy (TON Tigers): обложка P2E-кликера на TON" src="https://github.com/user-attachments/assets/3a42ef28-49b9-4af1-9b23-fa03b47d3552" />

## Claimy (TON Tigers): запуск P2E-кликера на TON

[Проект](https://tontiger.io) · [Сообщество](https://t.me/tontiger_tg) · [Бот](https://t.me/Claimybot) · [Figma](https://www.figma.com/design/mZq6FqGmvr4eLyLuvayZQ5/Claimy?node-id=18-24946&t=75b7YgB2Eyd8o9Mn-1)

**Роль:** единственный продуктовый дизайнер команды запуска.
**Команда:** Ambersoft, аутсорс продуктовой разработки: доводили игру до MVP и релиза.
**Мой этап:** запуск, первые ~3 месяца.
**Платформа:** Telegram Mini Apps (TON).

Claimy (в комьюнити известна как TON Tigers) это P2E-кликер на TON, где основной ресурс это мем-токен $TIGER. Игрок ставит своего тигра, майнит внутриигровую валюту notTIGER, выполняет задания, зовёт рефералов и обменивает notTIGER на реальный $TIGER.

## Что я делал

Проектировал интерфейс под ограничения Telegram Mini App: маленький вьюпорт, веб-вью, короткие сессии и высокая частота возвратов. Ключевые экраны и механики:

- онбординг и первая постановка тигра;
- экран майнинга и клейма notTIGER;
- задания и ачивки за действия (поставить тигра, майнить, позвать реферала);
- сезонный лидерборд по $TIGER;
- реферальная программа;
- магазин бустов: «рыба» сокращает время майнинга, «мясо» увеличивает клейм notTIGER.

### Wireframes
<img width="600" loading="lazy" decoding="async" alt="Wireframes ключевых экранов Claimy" src="https://github.com/user-attachments/assets/b2230559-e940-4bc4-b044-608257c9ca56" />

### Экраны
<img width="600" loading="lazy" decoding="async" alt="Финальные экраны интерфейса Claimy" src="https://github.com/user-attachments/assets/187f4f12-f4f9-4a8b-982b-08c4c498c7d7" />

### Лендинг проекта
<img width="600" loading="lazy" decoding="async" alt="Страница проекта Claimy" src="https://github.com/user-attachments/assets/043c873c-4e58-4e1b-99b6-f08e23061469" />

## Экономика и флоу

Токеномику и вывод завязал на понятный игроку цикл: намайнил notTIGER, выполнил задание, обменял на $TIGER. Ниже как это устроено на уровне экосистемы и основных действий игрока.

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

### Основные действия

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

### Пользовательская история

<div class="mermaid">
flowchart TD
    A[Login/Connect Wallet] --> B[Browse Available Tigers]
    B --> C[Claim Selected Tiger]
    C --> D[View Claimed Assets]
    D --> E[Access Transaction History]
</div>

## Результат

К концу моего этапа игра вышла в закрытый бета-тест, её показали инвесторам (китам и активному ядру комьюнити), собрали живой фидбек и отработали баги. Дальше проект продолжил расти уже без меня.

По публичным данным проект вырос до **500k+ участников комьюнити** и собрал **более $700k на Token Fairlaunch**.
