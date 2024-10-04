<a name="readme-top"></a>

![LinkedIn](https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555)
<br />
![TimeSpent](https://wakatime.com/badge/user/b235aad2-892a-4e83-b8c3-a6cc36bc4cf4/project/615a4038-d31a-4c36-a310-7eb745f14bfa.svg)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=coverage)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=HomeLabHQ_loyalist&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=HomeLabHQ_loyalist)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)

# [Loyalist](https://img.shields.io/https://loyalist.dufran.org)

## Project description

Main goal of the project to manage and share loyalty card for various shops.

## Project status

Currently project roadmap can be found here: [Roadmap](https://github.com/HomeLabHQ/loyalist/projects/1)

## Documentation

To access technical documentation and API documentation use

```sh
root
Test12345
```

<a href="https://loyalist-docs.dufran.org/"><img src="https://img.shields.io/badge/doc-mkdocs-02a6f2?style=flat-square&logo=read-the-docs" alt="Documentation">

<a href="https://loyalist.dufran.org/api/swagger-ui/"><img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white" alt="API Docs"></a>

## Main technologies

![python](https://img.shields.io/badge/Python-14354C?style=flat&logo=python&logoColor=white)
![django](https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white)
![celery](https://img.shields.io/badge/Celery-37814A?style=flat&logo=celery&logoColor=white)
![typescript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![react-router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=61DAFB)
![redux](https://img.shields.io/badge/Redux-593D88?style=flat&logo=redux&logoColor=white)
![vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![mantine](https://img.shields.io/badge/Mantine-47B881?style=flat&logo=mantine&logoColor=white)

## Prerequisites

For local development you will need:

- Python 3.12.1
- Node 20.11.1
  - Yarn 4.5.0

Also strongly recommend using tools like nvm and pyenv for running specific versions of Python and Node for this project

> NOTE: Additionally install poetry self add poetry-dotenv-plugin to auto load env variables in shell and run command

## Current production environment

I'm using compose.slim.yml to run the project on bare metal homelab server, with couple of key things:

- Each pet project have a separate port that is provided by `SERVICE_PORT` env variable
- Caddy don't manage SSL certificates, i'm using cloudflare tunnel to manage DNS A records and host service behind strict NAT environment

For anyone who wants a try in on separate vm instance please use regular compose.yml
