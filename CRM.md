---
layout: default
---

[back](./)

# **Трансформация опыта сотрудников контакт-центра и внедрение AI в бизнес-процессы CRM**
Продукт представляет собой насыщенную информацией и функциями CRM-систему - event-driven, очереди задач, SLA система. Через нее операторы обрабатывают тысячи взаимодействий с клиентами и решают ключевые задачи бизнеса.

<img width="600" height="auto" alt="Снимок экрана 2026-02-24 в 23 18 32" src="https://github.com/user-attachments/assets/a7ddbc25-3ebb-4f3d-a298-be88330f9ce3" />

Когда клиент или тренер фитнес-клуба обращается в поддержку, операторы решают их вопросы с помощью CRM - смотрят информацию в карточке задачи, карточке клиента, карточке клуба.

### Функционал

1. CRM - лиды, телефония, расписание
2. ERP - учет, администрирование, СКУД
3. FinTech - рекуррентные и единоразовые платежи, фискализация

### **Воронки выполняющие операционку**
- [**Продажи (Figma link)**](https://www.figma.com/design/mPmRLoOHm15smFCwSIVbpX/CRM-%D0%9A%D0%A6-%D0%9F%D1%80%D0%BE%D0%B4%D0%B0%D0%B6%D0%B8?node-id=0-1&t=c7cIeS2AoqkCv3kh-1) - получение новых лидов и входящих продаж
- [**Пролонгация (Figma link)**](https://www.figma.com/design/ebrj9YxbgcLZjzFtsY5Cz2/CRM-%D0%9A%D0%A6-%D0%9F%D1%80%D0%BE%D0%BB%D0%BE%D0%BD%D0%B3%D0%B0%D1%86%D0%B8%D1%8F?node-id=20-69060&t=oLoVebAQgxLIi00x-1) - удержание и продление подписки клиента
- [**Сервисная служба (Figma link)**](https://www.figma.com/design/RseesDUeoBL7gllE5iImDN/CRM-%D0%9A%D0%A6-%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F-%D1%81%D0%BB%D1%83%D0%B6%D0%B1%D0%B0?node-id=27-142486&t=E4znCuhjwnbQAKL6-1) - обслуживание и решение проблем клиента


## **Дерево метрик бизнес+UX**
Каждое дизайн-решение привязано к росту операционной эффективности

- Конверсия звонков в продажу
- Среднее время обработки задачи
- Процент продления подписок
- Скорость ответа на сервисные обращения
- NPS клиентов
- Производительность операторов

<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/8adf34af-d7d5-49db-a862-6807bc5d59b1" />

![DDX CRM Team - Метрики](https://github.com/user-attachments/assets/6f9c3e2d-5096-4977-bf88-50a43980894b)

**Проблема**

Ключевая цель продукта - развитие внутренней платформы коммуникаций, которая обеспечивает стабильную и эффективную работу контактных центров. Продукт развивался функционально, но UX не масштабировался - росла сложность интерфейса, увеличивалось время обработки задач и количество ошибок.

**Моя гипотеза**
Мы проектируем не под реальные задачи пользователей, а под абстрактные «сущности» CRM (контакты, этапы, статусы).
Чтобы изменить ситуацию, необходимо перейти к проектированию от задач (Jobs To Be Done).

---

## **Стратегия и исследования**
[CRM Journey Mapping](https://www.figma.com/board/cY218lyIESBQobpPePJLFJ/CRM-Journey-Mapping?node-id=0-1&t=XfCMt60ihjJN0Lu6-1)

- Провел 9 глубинных интервью с операторами, менеджерами и руководителями
- Организовал гембу в контакт-центре в Ярославле
- Проанализировал 1000+ задач в Bitrix для выявления паттернов использования
- Создал CJM для каждой роли пользователя
- Разработал стратегию автоматизации операций

<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/8e9f6acf-6576-40c7-92c5-ef3affc351bc" />


## **Проектирование и доставка в код**
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/2bf92755-69f7-4d50-a0f8-d2a4c3f1b615" />

- **Спроектировал универсальные карточки клиента и задачи:** 2 роли пользователей (оператор, руководитель), 3 воронки (продажи, пролонгация, сервис), 2 типа данных клиента (клиенты с подписками, контакты без подписки)
- **Разработал удобную систему фильтров:** сохранение состояния фильтрации, множественный выбор, контекстная логика отображения
- **TargetAI** результат коммуникации с клиентом, рекомендаций по коммуникации, прогнозирование оттока
- **Чат-платформа**
- **Дашборд**
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/a269eb49-a822-428e-864d-425679128977" />
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/e58bbd39-ac53-4d62-a3d5-29dcb5bb6007" />
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/2c98814c-2d3e-4af4-81c0-10caa1de4d1c" />

### **Ключевые интеграции**
Основные функциональные блоки успешно раскатаннные на все воронки контакт-центра. Качественный value для бизнеса - сокращение операционных костов на стремительно растущую нагрузку дирекций. затронутые UX метрики - рост делегирования и ротации в депортаментах; время обучения новых операторов; прозрачность процессов для руководителей; количество ручных ошибок; удовлетворенность сотрудников.

**Rule-based сквозная логика**
- **роль пользователя** - оператор видит тактические данные, руководитель — стратегические
- **дирекция** - продажи/пролонгация/[сервис (Figma link)](https://www.figma.com/board/cY218lyIESBQobpPePJLFJ/CRM-Journey-Mapping?node-id=80-4044&t=C7BvMpqAQOmAoTdQ-1)
- **этап воронки** - определяет доступные действия и приоритеты


**Чат-платформа**
Чат-платформа для коммуникации поддержки клиентов из мобильного приложения и мессенджеров
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/d6fd423c-a59f-4f5c-aa9d-aebc3f2adbad" />


**Автоматизация AI**
Интеграция с TargetAI для сбора и интерпретации ответа клиента 
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/6374e26e-d373-4b40-9f9a-44dd271ffbb5" />
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/c84a1af2-51d6-4278-ac37-ca466392398c" />


**Дата-виз дашборд**
Интеграция собственного решения предполагала сбор и визуализацию ключевых метрик для каждой роли и каждой воронки

<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/17d595fa-48ec-42a6-9bbe-2bad058c3a0b" />
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/8a760a21-8d42-46b3-80c2-a2333f4dedca" />
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/3a9c460c-51ca-40d5-8cd4-5327423e97ae" />
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/7ee3aa6c-31b5-42c9-938b-7ed4a501c96d" />

---


### Рефакторинг дизайн-системы 250+ компонентов и документация
[**Figma link**](https://www.figma.com/design/ajvwElSoxddr5qaB1HYFKr/CRM-Design-System?node-id=1599-4168&t=jlpyCt72uzvs8aqo-1)

Дизайн-система CRM основана на GravityUI и ThemeUI, имеет атомарную структуру, построена на переменных. Организмы описаны методологией DDD (Domain Driven Design) - в иерархию и структуру вшиты термины бизнес-логики.
В течение двух месяцев провел рефакторинг ДС и смерджил с 4 рабочими проектами, попутно решая проблемы синхронизации и актуализации макетов.

<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/91024172-bb57-4ebc-88d9-14a269a3dfd5" />
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/5e75c983-e342-4b54-8604-e3a3f94ef200" />
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/cd4ed4d6-8a36-4031-b59a-20760a5ba831" />
<img width="600" height="auto" alt="image" src="https://github.com/user-attachments/assets/4d2ad6cf-9ed7-49fe-acbb-a3df5015e258" />

---
