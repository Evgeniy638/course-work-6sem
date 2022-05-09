# Деплой

## CI/CD (не работает)

В данном приложение процесс CI/CD организован с помощью circle ci и heroku

## CLI
Запустить docker демона

Заменить `HEROKU_APP_NAME` на имя имя проекта в хероку (`course-work-6sem`)

`npm run build:client`

`heroku container:login`

`heroku container:push -a HEROKU_APP_NAME web`

`heroku container:release -a HEROKU_APP_NAME web`

## Полезные ссылки
https://github.com/CircleCI-Public/circleci-demo-javascript-react-app/blob/master/.circleci/config.yml
