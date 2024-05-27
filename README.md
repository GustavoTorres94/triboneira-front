<h1 align="center"> Triboneira Web Site :computer: </h1>

<div align="center"> 
  
  ![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

</div>

<div align="center">
  <h3>Descrição</h3>
  <p>
    Inspirado na tribo Gaulês, uma aplicação front-end desenvolvida com Vite - React. <br>
    A aplicação visa ser uma plataforma onde users podem interagir e receber informações sobre a comunidade da tribo e de CS2. <br>
    Um projeto pessoal sendo totalmente desenvolvido por mim utilizando boas práticas que aprendi durante os estudos. <br>
    Assim que o projeto ganhar mais forma pretendo fazer o deploy.<br>
  </p>
</div>

## Índice

- [Como Usar](#como-usar)
  
- [Funcionalidades](#funcionalidades)
  
- [Tecnologias](#tecnologias)

### Como Usar

<p><a href="https://triboneira-front-production.up.railway.app/" target="_blank"> LINK DO DEPLOY </a></p>
    
<p>
  <ol>
    <li>
      Clone este repositório.
    </li>
    <li>
      Entre no diretório criado.
    </li>
    <li>
      Intale as dependências da aplicação.
      
    npm install
      
            
  </li>
  <li>
    Utilize o seguinte comando para "subir" os containers do Docker

    docker compose up -d --build
        
  </li>

  <li>
    Utilize o script de desnvolvimento para rodar a aplicação

    npm run dev

    
  </li>

  </ol>
</p>

### Funcionalidades

A Aplicação possui algumas funcionalidades:
<ul>
  <li>
    Utilização do localStorage: salvando algumas informações que podem melhorar a performace da aplicação para próximas renderizações.
  </li>
  <li>
    FormsValidation: Uma série de validações de formulário de cadastro de novos users.
  </li>
  <li>
    API da Twitch: Utilizando serviços assíncronos para consumir a Api para obter dados em tempo real para melhor passar as informações ao user.
  </li>
  <li>
    CSS Modules: Foi escolhido para arquitetura do CSS.
  </li>
  <li>
    FontAwesome: Utilizando a lib para utilizar algumas das fontes quando necessário.
  </li>
  <li>
    MaterialUI: Utilizando a lib para estilizações específicas.
  </li>
</ul>
</ul>

Pages:<br>
/ - Home<br>
/about<br> 
/contact<br>
/register<br>
/login<br>
/notfound<br>
Testes

### React

App desenvolvida com o uso de React.<br>
Optei por utilizar o Redux para gerenciar o estado global da aplicação, que está no diretório src/redux.<br>


### Testes
<!--> EditarMaisTarde
A aplicação foi testada utilizando o Jest, Mocha e Chai. Os testes são unitários e estão no diretório de testes.<br>
Os comandos para testar a aplicação são os seguintes:

    npm run test:local
    npm run test:coverage

### Tecnologias

Neste projeto utilizei as seguintes ferramentas:
<div align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />
</div>
