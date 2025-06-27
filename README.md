# 🚀 Node.js Backend Projects: Gestão de Usuários & Consumo de API

Bem-vindo ao repositório dos meus projetos backend desenvolvidos com Node.js! Este espaço demonstra minhas habilidades na criação de APIs robustas e na interação com bancos de dados relacionais.

---

## 📝 Descrição

Este repositório abriga dois projetos distintos de backend em Node.js, focados em:

* **Gestão de Usuários com Front-End:** Um sistema completo de registro e autenticação de usuários, com uma interface front-end básica para interação.
* **Consumo de API com Node.js e MySQL:** Um exemplo prático de como consumir APIs externas e persistir/gerenciar os dados em um banco de dados MySQL.

Ambos os projetos visam exemplificar conceitos fundamentais de desenvolvimento backend, incluindo criação de APIs RESTful, interação com bancos de dados e integração de serviços.

---

## ✨ Funcionalidades

### Para "Cadastro de Usuário com Front-End"

* **Registro de Novos Usuários** ➕
* **Login e Autenticação de Usuários** 🔑
* **Armazenamento Seguro de Senhas** (hashing) 🔒
* **Interface Front-End Simples** para interação inicial 🌐

### Para "Consumindo API com Node.js e MySQL"

* **Requisições HTTP** para APIs externas 📡
* **Processamento de Dados** recebidos da API 🔄
* **Persistência de Dados** em um banco de dados MySQL 💾
* **Exposição de Dados** consumidos via endpoints de API próprios (opcional, mas comum) 📤

---

## 🏗️ Arquitetura

Os projetos seguem uma arquitetura modular e em camadas, facilitando a manutenção e escalabilidade:

* **Camada de Servidor (Server Layer):** Construída com Node.js e o framework Express.js, responsável por receber requisições HTTP, definir rotas e direcioná-las aos controladores apropriados.
* **Camada de Lógica de Negócio (Service/Business Logic Layer):** Contém a lógica principal da aplicação, orquestrando as operações entre os controladores e a camada de acesso a dados.
* **Camada de Acesso a Dados (Data Access Layer - DAL):** Gerencia todas as operações com o banco de dados (CRUD - Create, Read, Update, Delete) utilizando drivers MySQL ou ORMs.
* **Banco de Dados:** MySQL é utilizado para persistência dos dados, garantindo a integridade e disponibilidade das informações.

---

## 📊 Entidades

### Para "Cadastro de Usuário com Front-End"

* **Usuário (`User`)**
    * `id`: Identificador único (Chave Primária) 🆔
    * `username`: Nome de usuário (String, Único) 👤
    * `email`: Endereço de e-mail (String, Único) 📧
    * `password`: Senha (String, armazenada com hash) 🔐
    * `createdAt`: Carimbo de data/hora de criação 🕰️
    * `updatedAt`: Carimbo de data/hora da última atualização 🗓️

### Para "Consumindo API com Node.js e MySQL"

As entidades aqui dependerão dos dados que estão sendo consumidos da API externa. Por exemplo, se for uma API de produtos, teríamos uma entidade `Produto` com seus atributos correspondentes.

---

## 🛠️ Tecnologias Utilizadas

* **Backend:**
    * [Node.js](https://nodejs.org/) - Ambiente de tempo de execução JavaScript
    * [Express.js](https://expressjs.com/) - Framework web para Node.js
* **Banco de Dados:**
    * [MySQL](https://www.mysql.com/) - Sistema de gerenciamento de banco de dados relacional
* **Dependências Comuns (inferidas):**
    * `mysql2` ou similar (para conexão com MySQL)
    * `dotenv` (para gerenciamento de variáveis de ambiente)
    * `bcrypt` (para hashing de senhas, no projeto de cadastro)
    * `cors` (para Cross-Origin Resource Sharing)
    * `body-parser` (para parsing de corpos de requisição)

---

## ⚙️ Como Configurar e Executar o Projeto

Siga estes passos para configurar e rodar os projetos em sua máquina local:

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

* [Node.js](https://nodejs.org/en/download/) (versão 14 ou superior recomendada)
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (Node Package Manager, geralmente vem com o Node.js)
* [MySQL Server](https://dev.mysql.com/downloads/mysql/)

### Configuração Geral

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```
    (Substitua `seu-usuario` e `seu-repositorio` pelos seus dados reais)

2.  **Instale as dependências:**
    Você precisará instalar as dependências para cada sub-projeto. Navegue até o diretório de cada projeto e execute o comando de instalação:

    ```bash
    cd Cadastro\ de\ Usuário\ com\ Front-End
    npm install
    cd ../Consumindo\ API\ com\ node.js\ e\ MySQL
    npm install
    ```

### Configuração do Banco de Dados

1.  **Crie os Bancos de Dados MySQL:**
    Crie um banco de dados MySQL para cada projeto. Por exemplo:
    * Para o projeto "Cadastro de Usuário": `CREATE DATABASE user_db;`
    * Para o projeto "Consumindo API": `CREATE DATABASE api_data_db;`

2.  **Variáveis de Ambiente:**
    Em cada diretório de projeto (`Cadastro de Usuário com Front-End` e `Consumindo API com node.js e MySQL`), crie um arquivo chamado `.env` e adicione as seguintes variáveis de ambiente, substituindo os valores pelos seus dados do MySQL:

    ```
    DB_HOST=localhost
    DB_USER=seu_usuario_mysql
    DB_PASSWORD=sua_senha_mysql
    DB_NAME=nome_do_seu_banco_de_dados
    ```

    (Substitua `seu_usuario_mysql`, `sua_senha_mysql` e `nome_do_seu_banco_de_dados` pelos seus dados reais)

### Executando os Projetos

#### 1. Cadastro de Usuário com Front-End

* **Servidor Backend:**
    ```bash
    cd Cadastro\ de\ Usuário\ com\ Front-End
    node server.js
    ```
    O servidor geralmente iniciará em `http://localhost:3000` (ou na porta definida no arquivo `server.js`).

* **Front-End:**
    Abra o arquivo `index.html` em seu navegador web para acessar a interface de usuário.

#### 2. Consumindo API com Node.js e MySQL

* **Servidor Backend:**
    ```bash
    cd Consumindo\ API\ com\ node.js\ e\ MySQL
    node server.js
    ```
