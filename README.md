# 7 Days of Code - *Angular*

7 Dias, para cada dia uma meta a ser cumprida e ao fim um projeto pronto.
**Objetivo do Projeto:** Construir uma aplicação em Angular que consuma os dados da [API do Star Wars](https://swapi.dev/).

## Dia 1

### Objetivos do dia

- Construir o projeto base.
  - Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.0.3.
- Adicionar o Material Design.
  - Instalado com o comando ```ng add @angular/material```
- Criar os componentes das páginas de Home, Filmes e Nave.
  - No diretório `app`, criar um subdiretório `componentes` para criar os componentes do projeto.
  - Componentes criados com o comando ```ng g c [nome-componente]```
- Aplicar o esquema de rotas para redirecionar para cada um desses componentes.
  - No arquivo `app.routes.ts` configurar as rotas para os componentes.
  - Criar um menu para acessar as rotas utilizando o componente Toolbar do Material Design.

## Dia 2

### Objetivo do dia

- Trabalhar na construção de uma lista para exibir os filmes da franquia Star Wars de forma estática, sem usar a API.
  - Usar o arquivo `films.json`.
  - Os dados são exibidos utilizando o componente de Tabela do Material Design.

## Dia 3

### Objetivo do dia

- Buscar os filmes na API, substituindo a busca no arquivo JSON por uma requisição na API (*https://swapi.dev/api/*).
  - Para resolver esse desafio usar `Serviços`.
  - Criar uma interface para definir as propriedades da API.
  - Usar tipo `genérico` `<T>`

-------------
*Projeto com o objetivo de por em prática o conteúdo estudado na Alura na [Formação Angular: crie aplicações web ágeis](https://cursos.alura.com.br/formacao-angular-crie-aplicacoes-web-ageis)*


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
