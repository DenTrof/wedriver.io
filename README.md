# E2E тесты для Art Index

## Установка зависимостей

```bash
# установка зависимостей
$ yarn install
```

## Урлы

Для обращения к сайту

```yaml
APP_URL=http://localhost:3000/ - для локальной разработки
APP_URL=https://art.test.self.team/ - дев контур
```

## Yarn скрипты

```bash
# запуск автоисправления eslint
$ yarn lint

# запуск автоисправления prettier
$ yarn format

# запуск тестов на дев контуре
$ yarn test

# запуск тестов локально
$ yarn test:local

# запуск одного теста , например login.spec.js
$ TEST_SPEC=login yarn test

# отчет allure генерируется автоматически (дождаться сообщения -- Report successfully generated to allure-report)
# запуск графического интерфейса allure
allure open

```

## Ссылки

-   [webdriver.io](https://webdriver.io/docs/gettingstarted) - фреймворк для тестирования
