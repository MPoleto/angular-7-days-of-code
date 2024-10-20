# 7 Days of Code - *Angular*

7 Dias, a cada dia um desafio a ser cumprido e ao fim um projeto pronto.  

**Objetivo do Projeto:** Construir uma aplicação em Angular que consuma os dados da [API do Star Wars](https://swapi.dev/).

## Desenvolvimento

> *Status:*   
> - [x] Desafios  
> - [ ] Estilização a página  

### Dia 1

#### Objetivos do dia

- Construir o projeto base.
  - Projeto gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.0.3.
- Adicionar o Material Design.
  - Instalado com o comando ```ng add @angular/material```
- Criar os componentes das páginas de *Home*, *Filmes* e *Nave*.
  - No diretório `app`, criar um subdiretório `componentes` para criar os componentes do projeto.
  - Componentes criados com o comando ```ng g c [nome-componente]```
- Aplicar o esquema de rotas para redirecionar para cada um desses componentes.
  - No arquivo `app.routes.ts` configurar as rotas para os componentes.
  - Criar um menu para acessar as rotas utilizando o componente *Toolbar* do Material Design.

### Dia 2

#### Objetivo do dia

- Trabalhar na construção de uma lista para exibir os filmes da franquia Star Wars de forma estática, sem usar a API.
  - Usar o arquivo `films.json`.
  - Os dados são exibidos utilizando o componente *Table* do Material Design.

### Dia 3

#### Objetivo do dia

- Buscar os filmes na API, substituindo a busca no arquivo JSON por uma requisição na API (*https://swapi.dev/api/*).
  - Para resolver esse desafio usar `Serviços`.
  - Criar uma interface para definir as propriedades da API.
  - Usar tipo `genérico` `<T>`

### Dia 4

#### Objetivos do dia

- Criar um formulário onde realizará a busca pelo título do filme.
  - Usar o recurso de busca da API, que filtra o conjunto de informações. Para isso, a URL recebe o parâmetro `search` .
- Às vezes a API demora para mostrar as informações, por isso, aplicar um *Spinner* para proporcionar uma melhor experiência ao usuário.

### Dia 5

#### Objetivos do dia

- Construir uma tabela para exibir as naves estelares.
- Aplicar uma notificação de carregamento (*Spinner*) na página das naves.

### Dia 6

#### Objetivos do dia

- Criar uma propriedade `totalDeNaves` no componente Naves e atribuir o valor da propriedade `count`, uma das propriedades presentes na resposta da requisição.
  - Verificar o valor dessa propriedade e o valor de quantas naves aparecem em tela.
- Realizar uma alteração na requisição para adicionar um parâmetro `page`, com o número da página desejada.
  - A requisição deve receber a página de forma dinâmica, ou seja, por meio de um evento no template. Para isso, utilizar o *Paginator* do Material Design.  

### Dia 7

#### Objetivo do dia

- Selecionar algumas informações sobre cada nave para exibir na linha da tabela.   
  - Adicionar um evento de clique na linha da tabela para que exiba mais dados sobre a nave selecionada.  
  - Pode utilizar a [tabela com a linha expansível](https://material.angular.io/components/table/examples#table-expandable-rows), um exemplo de tabela que abre uma linha logo abaixo do item selecionado.  
  
<br/>

--------------------------

*Projeto com o objetivo de por em prática o conteúdo estudado na Alura na [Formação Angular: crie aplicações web ágeis](https://cursos.alura.com.br/formacao-angular-crie-aplicacoes-web-ageis)*

[Star wars icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/star-wars)


