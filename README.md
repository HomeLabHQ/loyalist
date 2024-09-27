<a name="readme-top"></a>

[![LinkedIn][linkedin-shield]][linkedin-url]
<br />
[![TimeSpent][Wakatime-shield]][Wakatime-shield]
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=coverage)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)

# Loyalist

## Project description

To access technical documentation and API documentation use

```sh
root
Test12345
```

<a href="https://docs.loyalist.dufran.org/"><img src="https://img.shields.io/badge/doc-mkdocs-02a6f2?style=flat-square&logo=read-the-docs" alt="Documentation">

<a href="https://loyalist.dufran.org/api/swagger-ui/"><img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt="API Docs"></a>

Main goal of the project to manage and share loyalty card for various shops.

## Built With

[![Django][Django]][Django-url]
[![React][React.js]][React-url]
[![Redux][Redux]][Redux-url]
[![Vite][Vite]][Vite-url]

## Prerequisites

For local development you will need:

- Python 3.12.0
- Node 20.11.1
  - Yarn 4.5.0

Also strongly recommend using tools like nvm and pyenv for running specific versions of Python and Node for this project

> NOTE: Additionally install poetry self add poetry-dotenv-plugin to auto load env variables in shell and run command

## Current production environment

I'm using compose.slim.yml to run the project on bare metal homelab server, with couple of key things:

- Each pet project have a separate port that is provided by `SERVICE_PORT` env variable
- Caddy don't manage SSL certificates, i'm using cloudflare tunnel to manage DNS A records and host service behind strict NAT environment

For anyone who wants a try in on separate vm instance please use regular compose.yml

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/oleksandr-korol/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[redux]: https://img.shields.io/badge/Redux%20toolkit-20232A?style=for-the-badge&logo=redux&logoColor=61DAFB
[redux-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite&logoColor=61DAFB
[Vite-url]: https://vitejs.dev/
[Django]: https://img.shields.io/badge/Django-20232A?style=for-the-badge&logo=django&logoColor=61DAFB
[Django-url]: https://www.djangoproject.com/
[Wakatime-shield]: https://wakatime.com/badge/user/b235aad2-892a-4e83-b8c3-a6cc36bc4cf4/project/615a4038-d31a-4c36-a310-7eb745f14bfa.svg
