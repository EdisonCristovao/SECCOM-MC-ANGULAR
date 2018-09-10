# SECCOM MiniCurso ANGULAR 4/5/6

Esse minicurso tem como objetivo principal disseminação de conhecimento, qualquer dúvida pode ser consultada a documentação em [Angular](https://angular.io/guide/quickstart).

## Primeiros passos

Tendo `npm` instalado, é necessario instalar o `angular/cli` com o comando abaixo.
```
npm install -g @angular/cli
```

Faça um fork desse projeto.
Faça um clone do repositorio do seu github.
crie um projeto angular na raiz `SECCOM-MC-ANGULAR/`.

Para criar e executar o primeiro projeto.
```
ng new my-app
cd my-app
ng serve --open
```

O projeto é executado na url `http://localhost:4200/`, use o navegador para acessar.

## Objetivo do minicurso

O objetivo é criar um FAKE OLX, cada um criará o seu. Para aqueles que querem uma ideia segue um [mockup](https://projects.invisionapp.com/share/A6GOUOHD4RW#/screens) oferecido pela [centrics](https://github.com/centrics).

## Instalação Bootstrap
Para instalar o bootstrap use o comando.
```
npm install bootstrap
```
adicione no seu css global.
```
@import '~bootstrap/dist/css/bootstrap.min.css';
```

## Instalação JSON-sever
Para instalar o json-server use o comando.
```
npm install -g json-server
```

Dentro do seu projeto cria um arquivo `db/db.json`, então ja é possivel executar o json-serve com o seguinte comando.
```
json-server --watch db/db.json
```

Documentação do [JSON-server](https://github.com/typicode/json-server).


# SECCOM-MC-ANGULAR
