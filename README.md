<h1 align="center">:file_cabinet: NativeFlix</h1>

<br>

## :memo: Description
Desafio Fullture: criando um app de listagem de mídias com React Native. Aplicativo desenvolvido com o objetivo de fornecer uma experiência aprimorada na listagem de mídias de um banco de dados utilizando a API do TMDB. Com o uso do react-navigation para uma navegação suave entre páginas e do StyleSheet para uma estilização elegante, proporcionando uma experiência de usuário atraente e intuitiva.

Demo: 

https://github.com/Richard-Passos/mb-nativeflix/assets/104469731/5dc87e96-2488-4420-a96b-0d3f58624978

Recursos Principais:

1- Páginas Auth (Login e Register): Podendo logar ou registrar um usuário, podendo também lidar com erros, troca de senha e persitir os dados de login.

2- Página Inicial (Home): Oferecendo uma visualização geral das mídias disponíveis. Essa página fornece uma visão geral dos títulos disponíveis e atrai os usuários para explorar mais detalhes.

3- Página de Detalhes (Details): Ao selecionar uma mídia específica, os usuários são direcionados a esta página para obter informações detalhadas sobre a mídia selecionada. Essa página é gerada dinamicamente através de parâmetros fornecidos pelo react-navigation, garantindo uma experiência personalizada para cada título selecionado.

4- Página de Listagem Ampla (Pagination): Essa página permite que os usuários naveguem por uma listagem mais ampla de mídias, aplicando um recurso de scroll infinito. Isso garante que os usuários possam descobrir e explorar uma grande quantidade de títulos de forma contínua, sem limitações de páginação tradicionais.

5- Página de Pesquisa (Search): Podendo pesquisar mídias por seus títulos, também aplicando o scroll infinito.

6- Página de Configurações (Settings): Essa página permite que o usuário faça o logout de sua conta ou até mesmo que a exclua.

<br>

## :wrench: Technologies used
* React Native
* Expo
* JavaScript

<br>

## :rocket: Run project
01 - Clone repositiry
```
git clone https://github.com/Richard-Passos/mb-nativeflix
```

02 - Enter project directory
```
cd mb-nativeflix
```

03 - Install dependencies
```
npm i
```

04 - Create file .env
```
touch .env
```

05 - Put your API key from TMDB inside .env
```
MEDIAS_KEY=your_api_key
```

06 - Still in .env, put your Firebase configuration data
```
AUTH_KEY=your_firbase_api_key
AUTH_DOMAIN=your_firbase_auth_domain
AUTH_PROJECT_ID=your_firbase_project_id
AUTH_STORAGE_BUCKET=your_firbase_storage_bucket
AUTH_MESSAGING_SENDER_ID=your_firbase_messaging_sender_id
AUTH_APP_ID=your_firbase_app_id
```

07 - Run project with expo
```
npm start
```

<br>

## :handshake: Team
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Richard-Passos">
        <img src="https://img.freepik.com/vetores-premium/desenho-de-desenho-animado-de-um-programador_29937-8176.jpg" width="100px;" alt="A boy with headphones holding a laptop."/><br>
        <sub>
          <b>Richard P</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

<br>

## :dart: Status
Finished
