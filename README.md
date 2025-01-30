# Instruções para Executar o Projeto

Este guia explica o processo necessário para rodar o projeto em sua máquina local. Certifique-se de seguir todos os passos corretamente para garantir que o projeto funcione conforme o esperado.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

1. **Git**: Para clonar o repositório do projeto.
2. **Docker**: Para rodar o projeto em containers. Se você estiver usando Windows, instale o **Docker Desktop**.

## Passo 1: Clonar o Projeto

Abra o terminal e navegue até a pasta onde deseja clonar o projeto. Em seguida, execute o seguinte comando para clonar o repositório:

```git clone https://github.com/FelipeLTavares/nest-angular-app.git```

Isso criará uma pasta chamada `nest-angular-app` no local escolhido.

## Passo 2: Configurar o Arquivo `.env`

Dentro da pasta do projeto, navegue até a pasta `backend`. Crie um arquivo com o nome exato `.env` e cole o seguinte conteúdo nele:

```
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=senha
DATABASE_NAME=poncetech

JWT_SECRET=secret
JWT_EXPIRATION_TIME=3600s
```

Salve o arquivo após colar o conteúdo.

## Passo 3: Garantir que o Docker Está Rodando

Se você estiver usando Windows, abra o **Docker Desktop** e certifique-se de que ele está em execução. No Linux ou macOS, o Docker geralmente é iniciado automaticamente.

## Passo 4: Rodar o Projeto com Docker

Abra o terminal na pasta raiz do projeto (onde está localizado o arquivo `docker-compose.yml`) e execute o seguinte comando:

```docker-compose up --build```

Este comando irá construir e iniciar os containers necessários para rodar o projeto. Aguarde até que o processo seja concluído.

## Passo 5: Acessar o Projeto no Navegador

Após o comando ```docker-compose up --build``` terminar, abra o navegador e acesse o seguinte link:

`http://localhost:4200`

Você verá a interface do projeto carregada no navegador.

## Como Usar o Aplicativo

### 1. Registrar um Usuário

- Na página inicial, clique em **"Registrar-se"**.
- Preencha o formulário de registro com um nome e e-mail quaisquer. O sistema não exige muitas validações, então você pode usar dados fictícios.
- Após o registro, você será redirecionado para a tela de login.

### 2. Fazer Login

- Na tela de login, insira o e-mail e a senha que você acabou de criar.
- Após o login, você será redirecionado para a lista de usuários cadastrados.

### 3. Gerenciar Usuários

- Na lista de usuários, você pode **desativar** um usuário clicando no botão **"Desativar"**. Um usuário desativado não poderá mais fazer login.
- Para **sair** da aplicação, clique no botão vermelho **"Sair"** no canto superior direito da tela.

## Conclusão

Seguindo esses passos, você conseguirá rodar o projeto localmente e explorar suas funcionalidades. Se encontrar algum problema, certifique-se de que todos os pré-requisitos estão corretamente instalados e que os passos foram seguidos conforme descrito. Divirta-se explorando o projeto!
