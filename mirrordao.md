---
layout: mermaid
tags:
- CFA
- DAO
- dApp
- Software
- Blockchain
- Desktop
- Mobile
Год: 2024
Релиз: true
Описание: Платформа создания и управление DAO
Ссылка: https://www.figma.com/design/R9ceAELlyO5wcHKliHjsJi/MirrorDAO?node-id=0-1&t=04iPDPk98aHil4FF-1
---

[back](./)

<img width="600" loading="eager" fetchpriority="high" decoding="async" alt="Обложка MirrorDAO: платформа создания и управления DAO" src="https://github.com/user-attachments/assets/e323c394-3d30-440f-8d5d-65aa814c8d8d" />

# MirrorDAO

[Product Page](https://mirrordao.com) · [dApp](https://mirrordao.com)

**Продукт:** платформа создания и управления DAO (dApp)
**Платформа:** Web (desktop + mobile), блокчейн Ethereum
**Год:** 2024

## О продукте

**MirrorDAO** это платформа для создания и управления децентрализованными автономными организациями (DAO) на блокчейне Ethereum. Участники сети предлагают инициативы, голосуют за них и совместно управляют проектами и активами. В основе прозрачность и вовлечение сообщества: именно процесс управления задаёт направление организации.

## Питч продукта

![mirror-pitch-01](https://github.com/user-attachments/assets/7b86eac4-78c8-44f1-a2f0-0414a3bfbb29)
![mirror-pitch-02](https://github.com/user-attachments/assets/b9942eea-2292-4f1f-bc82-5769cbb50b40)
![mirror-pitch-03](https://github.com/user-attachments/assets/d545c3d2-9087-462a-b10e-7f9b23618d21)
![mirror-pitch-04](https://github.com/user-attachments/assets/26cf7c63-1d53-4dbd-a667-06b66ddc80c0)
![mirror-pitch-05](https://github.com/user-attachments/assets/ae505d0e-61de-4cec-bdc2-30e630704d50)
![mirror-pitch-06](https://github.com/user-attachments/assets/4bce1dfc-b32e-48f8-9f75-fa2cbe57a596)
![mirror-pitch-07](https://github.com/user-attachments/assets/eac4260c-b371-4e23-a163-105ff0b1f4b8)
![mirror-pitch-08](https://github.com/user-attachments/assets/f7b5f17f-7170-4f4d-9b1c-956c158c8938)
![mirror-pitch-09](https://github.com/user-attachments/assets/97003d3e-4ebe-4e56-88c0-2f72e054fec0)
![mirror-pitch-10](https://github.com/user-attachments/assets/c96c0e7a-0298-4dde-bb83-2b62ac85a94b)
![mirror-pitch-11](https://github.com/user-attachments/assets/4575e762-2c62-4c77-9f25-b6b6abac4545)

## Процесс

```mermaid
graph TD;
    A[Исследование и Анализ] --> B[UserStories]
    B --> C[Создание Прототипа]
    C --> D[Тестирование Прототипа]
    D --> E[Получение Обратной Связи]
    E --> F[Итерация проектирования]
    F --> G[Разработка Финальной Версии]
    G --> H[Запуск]
    H --> I[Онбординг]
    I --> J[Поддержка и Обновление]

    style A fill:#f9f,stroke:#333,stroke-width:2px;
    style H fill:#bbf,stroke:#333,stroke-width:2px;
    style J fill:#bbf,stroke:#333,stroke-width:2px;
```

Дизайн-процесс строился итеративно, с вовлечением пользователей на каждом этапе:

1. **Исследование и анализ** рынка и потребностей пользователей.
2. **Цели и задачи**, которые DAO должна решать.
3. **Прототип** интерфейса и функционала для проверки идей.
4. **Тестирование прототипа** на реальных сценариях.
5. **Обратная связь** от пользователей: где спотыкаются, чего не хватает.
6. **Итерации дизайна** по результатам тестов.
7. **Финальная версия** с настройкой и интеграцией всех функций.
8. **Запуск** платформы.
9. **Онбординг и обучение** пользователей.
10. **Поддержка и обновления** по новым потребностям.

## UX

### User Persona

```mermaid
graph TD;
    A[User Persona: Анна Петрова] --> B[Возраст: 32 года]
    A --> C[Пол: Женский]
    A --> D[Образование: Высшее в области управления]
    A --> E[Профессия: Маркетолог]
    A --> F[Местоположение: Санкт-Петербург, Россия]
    
    G[Технический уровень: Средний] --> A
    H[Интересы: Блокчейн, технологии, децентрализованные финансы] --> A
    I[Цели: Участвовать в принятии решений, управлять активами, сотрудничать с единомышленниками] --> A
    J[Боли: Сложность в понимании DAO, недостаток информации о процессах голосования] --> A
    K[Мотивация: Желание быть частью инновационных проектов, улучшение финансового благосостояния] --> A
    L[Игровой опыт: Участие в нескольких DAO, активное использование DeFi-приложений] --> A
    M[Потребности: Интуитивно понятный интерфейс, наличие обучающих материалов, поддержка сообщества] --> A
```

### Key Features Flow

```mermaid
graph TD;
    A[User Enters MirrorDAO] --> B[Create a Proposal];
    B --> C{Proposal Type};
    C -->|Funding| D[Fill Funding Details];
    C -->|Governance| E[Fill Governance Details];
    D --> F[Submit Proposal];
    E --> F;
    F --> G[Proposal Created Successfully];

    A --> H[View Proposals];
    H --> I[Select a Proposal];
    I --> J{Vote};
    J -->|Approve| K[Cast Vote: Approve];
    J -->|Reject| L[Cast Vote: Reject];
    K --> M[Vote Counted];
    L --> M;

    A --> N[Manage Assets];
    N --> O{Asset Type};
    O -->|Tokens| P[View Token Balances];
    O -->|NFTs| Q[View NFT Collections];
    O -->|Governance Tokens| R[Manage Governance Tokens];

    style A fill:#f9f,stroke:#333,stroke-width:2px;
    style G fill:#bbf,stroke:#333,stroke-width:2px;
    style M fill:#bbf,stroke:#333,stroke-width:2px;
```

## UserMap

```mermaid
graph LR;
    A[Registration] --> B[Login]
    B --> C[Menu]
    C --> D[Budgeting]
    C --> E[Delegation of Authority]
    C --> F[Managing Contracts]
    C --> G[Reporting & Monitoring]
    C --> H[Voting]
    C --> I[Community]
    C --> J[Security]
    C --> K[API & Integrations]
    C --> L[Analytics & Metrics]
    C --> M[Support & Documentation]
    D --> X[Create new account]
    D --> Y[View balance and transactions]
    D --> Z[History of operations and reports]
    E --> AA[Assign delegates]
    E --> BB[Set delegation periods]
    F --> CC[List active contracts]
    F --> DD[Create new contract]
    F --> EE[Edit existing contract]
    G --> FF[Generate reports]
    G --> GG[Configure alerts]
    H --> DD[Participate in voting]
    I --> JJ[Forums and chats]
    J --> EE[Security settings]
    K --> FF[Access to various APIs]
    L --> GG[Performance metrics]
    M --> HH[FAQ section]
```

## Mind Map

```mermaid
graph TB
    A("MirrorDAO") --> B(BUDGETING)
    B --> C(CREATE BUDGET)
    C --> D(Create and approve budgets)
    C --> E(PLAN BUDGET)
    E --> F(Add articles of expense)
    C --> G(APPROVE BUDGET)
    G --> H(Vote on budget proposal)
    C --> I(FOLLOW UP)
    I --> J(Track execution of approved budget)

    A --> K(GOVERNANCE)
    K --> L(GOVERNANCE SYSTEM)
    L --> M(Manage decision making process)
    L --> N(TOKEN STRUCTURE)
    N --> O(Define multiple levels of tokens with specific roles and permissions)
    L --> P(VOTING MECHANISMS)
    P --> Q(Implement voting mechanisms based on token ownership)

    A --> R(INTELLECTUAL PROPERTY)
    R --> S(REGISTRY)
    S --> T(Register and store proof of intellectual property ownership)
    S --> U(DOCUMENTATION)
    U --> V(Store documents, codes, artworks, etc.)
    S --> W(ARTIFACTS)
    W --> X(Record digital artifacts linked to IP)

    A --> Y(CONTRACTS)
    Y --> Z(SMART CONTRACTS)
    Z --> AA(Set up and manage smart contracts)
    Z --> AB(CONFIGURATION)
    AB --> AC(Configure parameters and conditions for contract execution)
    Z --> AD(INTEGRATION)
    AD --> AE(Integrate with various blockchains and decentralized applications)

    A --> AF(PAYMENTS)
    AF --> AG(GENERATE INVOICE)
    AG --> AH(Create invoices for payments)
    AG --> AI(MAKE PAYMENTS)
    AI --> AJ(Process incoming and outgoing payments)
    AG --> AK(MASS PAYMENTS)
    AK --> AL(Handle bulk payments efficiently)
    AG --> AM(WEB 3 ACQUIRING)
    AM --> AN(Facilitate web 3 payments and integrations)

    A --> AO(FINANCIAL RAILS)
    AO --> AP(BRIDGES)
    AP --> AQ(Enable cross-chain asset transfers)
    AP --> AR(SWAPS)
    AR --> AS(Allow conversion between different types of currencies)
    AP --> AT(SWIFT/SEPA)
    AT --> AU(Integrate with traditional financial networks)

    A --> AV(CRYPTO ACCOUNTING)
    AV --> AW(TRANSACTION HISTORY)
    AW --> AX(Track all transactions across connected wallets)
    AW --> AY(EXCHANGE INTEGRATION)
    AY --> AZ(Sync with major cryptocurrency exchanges)
    AW --> BA(WEB 2 INTEGRATION)
    BA --> BB(Convert and track fiat currency transactions)
    AW --> BC(ERP INTEGRATION)
    BC --> BD(Connect with Enterprise Resource Planning systems)
    AW --> BE(DEFI INTEGRATION)
    BE --> BF(Interface with Decentralized Finance platforms)

    A --> BG(TAXATION)
    BG --> BH(TAX SCENARIOS)
    BH --> BI(Manage tax obligations related to cryptocurrency operations)
    BH --> BJ(COMPLIANCE)
    BJ --> BK(Ensure regulatory compliance across jurisdictions)

    A --> BL(HR ADMINISTRATION)
    BL --> BM(HIRE EMPLOYEES)
    BM --> BN(Recruit and manage team members)
    BM --> BO(PROFILE MANAGEMENT)
    BO --> BP(Create and maintain employee profiles)
    BM --> BQ(TIME TRACKING)
    BQ --> BR(Monitor work hours and productivity)
    BM --> BS(PAYROLL)
    BS --> BT(Calculate and process salaries and bonuses)
    BM --> BU(IDENTITY MANAGEMENT)
    BU --> BV(Establish and verify digital identities)

    A --> BW(OTHER)
    BW --> BX(UNLISTED FUNCTIONALITIES)
    BX --> BY(Miscellaneous features not explicitly categorized above)
```

[back](./)
