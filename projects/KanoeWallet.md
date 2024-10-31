---
tags:
- #Blockchain
- #Fintech
- #dApp
- #Desktop
- #Mobile
Год: 2024
Релиз: true
Описание: Платформа для защиты и управления наследованием цифровых активов
Ссылка: https://www.figma.com/design/larczXzN5oQlcRHiUXW2LZ/Kanoe-SRS?node-id=0-1&t=ZzOPfjwijHCqvjCK-1
---

# Kanoe Wallet dApp
Релиз: https://kanoewallet.com/


## Описание
 
**Kanoe Wallet** — это платформа для управления и наследования цифровых активов, созданная нашей аутсорс командой в **Эмбер**. Приложение предоставляет пользователям возможность защищать свои цифровые активы, планировать их наследование и управлять ими в одной экосистеме. Главная цель продукта — запустить на рынок интуитивно понятный и безопасный инструмент для управления токенами криптовалют и NFT.


![image](https://github.com/user-attachments/assets/51f6b37a-e8e5-42f8-9f3e-f7313e27eae4) 

---

![image](https://github.com/user-attachments/assets/5656c921-4755-4408-853c-8eb2b4496df3)

## Задачи

1. **Анализ & Проектирование UX:**
   - Исследование конкурентов и аналогичных приложений.
   - Выявление потребностей и интересов целевой аудитории.

2. **Прототипирование:**
   - Формулировка основной идеи и функционала приложения.
   - Создание wireframes и прототипов интерфейса.

3. **Проектирование UI:**
   - Разработка уникального стиля и визуального оформления.
   - Интеграция брендинга и фирменных цветов заказчика.

4. **Тестирование:**
   - А/B тестирование различных вариантов интерфейса.
   - Оптимизация пользовательского опыта на основе обратной связи.

5. **Запуск & Сопровождение:**
   - Публикация приложения в магазинах приложений.
   - Регулярное обновление и улучшение приложения на основе пользовательской активности.

## UX

| Поле                     | Описание                                                       |
|--------------------------|----------------------------------------------------------------|
| **Имя**                  | Алексей Иванов                                                |
| **Возраст**              | 32 года                                                       |
| **Пол**                  | Мужской                                                       |
| **Профессия**           | Финансовый аналитик                                          |
| **Образование**          | Высшее (Финансовый университет)                             |
| **Технологическая грамотность** | Высокая (опыт работы с блокчейном и криптовалютами)       |
| **Цели использования Kanoe Wallet** | - Упрощение управления подписками<br>- Автоматизация платежей<br>- Увеличение безопасности транзакций |
| **Болевые точки**       | - Сложности с управлением множеством подписок<br>- Небезопасные методы оплаты<br>- Потребность в прозрачности транзакций |
| **Привычки**            | - Часто использует мобильные приложения для управления финансами<br>- Следит за новыми технологиями в финтехе<br>- Участвует в обсуждениях о криптовалюте на форумах |
| **Потребности**         | - Простота и удобство в использовании приложения<br>- Интуитивный интерфейс<br>- Безопасные методы оплаты и хранения данных |
| **Предпочтения**        | - Использует мобильное приложение для управления подписками<br>- Предпочитает гибкие тарифные планы и возможность автоматической оплаты |
| **Ценности**            | - Безопасность финансовых операций<br>- Прозрачность и доступность информации<br>- Эффективность и скорость обслуживания |

## UI

```mermaid
flowchart TD
    User[User Access]
    Dashboard[Dashboard Access]
    HeirSelection[Select Heirs]
    AddHeir[Add New Heir]
    DefinePercentage[Define Asset Percentage]
    ConfirmSelection[Confirm Selection]
    Confirmation[Receive Confirmation]
    ViewHeirs[View Heirs List]
    
    User --> Dashboard --> HeirSelection
    HeirSelection --> AddHeir
    AddHeir --> |Set Percentage| DefinePercentage
    DefinePercentage --> ConfirmSelection
    ConfirmSelection --> |Save to Blockchain| Confirmation
    Confirmation --> |Back to Dashboard| ViewHeirs
    ViewHeirs --> Dashboard
```
![image](https://github.com/user-attachments/assets/a2e09fee-9f11-4289-b497-69aa2966dd53)

```mermaid
flowchart TD
    User[User Access]
    Dashboard[Dashboard Access]
    NFTAssets[View NFT Assets]
    SelectNFT[Select NFT for Heir Designation]
    HeirSelection[Select Heir]
    DefinePercentage[Define Asset Percentage]
    ConfirmSelection[Confirm Heir Assignment]
    Confirmation[Receive Confirmation]
    ViewHeirs[View Heirs List]
    
    User --> Dashboard --> NFTAssets
    NFTAssets --> SelectNFT
    SelectNFT --> HeirSelection
    HeirSelection --> DefinePercentage
    DefinePercentage --> ConfirmSelection
    ConfirmSelection --> |Save to Blockchain| Confirmation
    Confirmation --> |Back to Dashboard| ViewHeirs
    ViewHeirs --> Dashboard
```
![image](https://github.com/user-attachments/assets/9ecddbea-edd8-4d00-b9ab-4fc79bfddd6c)

```mermaid
flowchart TD
    User[User Access]
    Register[Register Assets]
    SetHeirs[Select Heirs]
    DefinePercentage[Define Asset Percentages]
    SetConditions[Set Activation Conditions]
    Timer[Scheduled Timer]
    AbsenceCheck[User Absence Check]
    InheritanceTriggered[Trigger Inheritance Process]
    NotifyHeirs[Notify Heirs]
    TransferAssets[Transfer Assets to Heirs]
    Confirmation[Receive Confirmation]
    
    User --> Register --> SetHeirs
    SetHeirs --> DefinePercentage
    DefinePercentage --> SetConditions
    SetConditions --> Timer
    SetConditions --> AbsenceCheck
    
    Timer --> InheritanceTriggered
    AbsenceCheck --> InheritanceTriggered
    InheritanceTriggered --> NotifyHeirs
    NotifyHeirs --> TransferAssets
    TransferAssets --> Confirmation
```

![image](https://github.com/user-attachments/assets/5cb5083d-e97b-44e1-87ac-67f7e493963d)

```mermaid
flowchart TD
    User[User Access]
    Dashboard[Access Dashboard]
    Register[Register Assets]
    SetHeirs[Select Heirs]
    DefinePercentage[Define Asset Percentages]
    SetConditions[Set Activation Conditions]
    Timer[Scheduled Timer]
    AbsenceCheck[User Absence Check]
    InheritanceTriggered[Trigger Inheritance Process]
    NotifyHeirs[Notify Heirs]
    TransferAssets[Transfer Assets to Heirs]
    Confirmation[Receive Confirmation]
    
    ModifySettings[Modify Inheritance Settings]
    ViewHeirs[View Assigned Heirs]
    LegalCompliance[Ensure Legal Compliance]
    ReviewConditions[Review Activation Conditions]

    User --> Dashboard --> Register
    Register --> SetHeirs
    SetHeirs --> DefinePercentage
    DefinePercentage --> SetConditions
    SetConditions --> Timer
    SetConditions --> AbsenceCheck

    Timer --> InheritanceTriggered
    AbsenceCheck --> InheritanceTriggered
    InheritanceTriggered --> NotifyHeirs
    NotifyHeirs --> TransferAssets
    TransferAssets --> Confirmation
    
    Dashboard --> ViewHeirs
    ViewHeirs --> ModifySettings
    ModifySettings --> DefinePercentage
    ModifySettings --> ReviewConditions
    ModifySettings --> LegalCompliance
```

![image](https://github.com/user-attachments/assets/b09c4f5c-0f2f-4583-a2ca-beae45e1884d)
![image](https://github.com/user-attachments/assets/d3ecb590-b033-4b3e-b54a-cc0d97c7c875)
![image](https://github.com/user-attachments/assets/74f38645-e073-4ff5-a3e6-76a5e727a685)

![image](https://github.com/user-attachments/assets/536e0ad8-c160-4ec2-99eb-e1640f25d66f)
![image](https://github.com/user-attachments/assets/644ddff9-b67d-4a4f-8391-546f4b57f783)


## Релиз

- **Запуск и активные пользователей:** За первый месяц после запуска количество ежедневных активных пользователей увеличилось на 25%.
- **Положительная обратная связь:** Стейкхолдеры отметили удобство интерфейса и интересный контент.
- **Положительный рейтинг:** Приложение получило высокие оценки и положительные отзывы.


## Инструменты

- **Figma**
- **Miro**
- **Webflow** (HTML / CSS / JS)

---
