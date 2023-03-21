# EducAção Solidária
<img src="logo.svg">

## :memo: Descrição do Projeto

Esse projeto foi desenvolvido durante o Programa de Formação 2021 do Grupo FCamara. O objetivo do projeto era criar uma aplicação, onde os pais irão cadastrar seus filhos que estudam em escolas estaduais e municipais, e também, a lista de material escolar que precisam e não tem condições de comprar. Usuários avulsos e anônimos podem acessar, buscar a escola com base em algum critério de busca, visualizar a necessidade dps alunos carentes e fazer a doação dos itens que um determinado aluno esteja precisando.

Para o hackathon, focamos em desenvolver a jornada que o doador faria ao utilizar nossa plataforma. 


## :wrench: Ferramentas utilizadas na construção do projeto:

* HTML
* CSS
* Bootstrap 4
* Javascript
* Node.js
* MySQL
* Insomnia 
* Git 
* Github
* NPM

## :rocket: Como executar o projeto

#### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: Git, Node.js e MySQL.

### Rodando a aplicação web 

- Crie no SGBD MySQL o schema 'hackFCamara'

> CREATE SCHEMA `hackFCamara`;

- Clone este repositório

> git clone https://github.com/Squad31-FCamara/AppDoacao

- Acesse a pasta do projeto no seu terminal/cmd

> cd /backend

- Instale as dependências

> npm install

- Configure o arquivo de conexão com o banco de dados

> cd /infraestrutura

Abra o arquivo conexao.js e insira as seguintes informações:

   > host: ,
    port: ,
    user: ,
    password: ,
    database: 'hackFCamara'

- Execute a aplicação em modo de desenvolvimento

> npm start

- Inserções nas tabelas do banco de dados

> Após executar o comando anterior, serão criadas as tabelas utilizadas no projeto. O próximo passo será realizar inserts de alguns dados. Para isso, execute os comandos listados no arquivo 'inserts.sql'.

- Rodar o arquivo index.html

> O arquivo pode ser executado usando o Live Server do VSCode. No arquivo index.html, com botão direito do mouse clique na opção: abrir com Live Server.

>Ou pode ser feita a instalação do browser-sync (npm install -g browser-sync). E após a instalação executar o seguinte comando: 
"browser-sync -s -f . - -directory". 
Abrirá no seu browser a pasta raiz desse projeto. Clique em:
frontend -> v2 -> html -> index.html

## :computer: Contribuidores

[Luan Oliveira da Silva](https://github.com/luan5454)
*Responsável pelo HTML e CSS do Frontend*

[Nathalia Dantas](https://github.com/nathaliadv)
*Responsável pelo JavaScript do Frontend e o NodeJs no Backend*




