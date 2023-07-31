  <h1 align="center">:file_cabinet: NativeFlix</h1>

## :memo: Descrição
Desafio Fullture: criando um app de listagem de mídias com React Native. Aplicativo desenvolvido com o objetivo de fornecer uma experiência aprimorada na listagem de mídias de um banco de dados utilizando a API do TMDB. Com o uso do react-navigation para uma navegação suave entre páginas e do StyleSheet para uma estilização elegante, proporcionando uma experiência de usuário atraente e intuitiva.

Demo: 


https://github.com/Richard-Passos/nativeflix/assets/104469731/74c97695-d500-4e56-83d8-f10b6079375f


Recursos Principais:

1- Páginas Auth (Login e Register): Podendo logar ou registrar um usuário, podendo também lidar com erros, troca de senha e persitir os dados de login.

2- Página Inicial (Home): Oferecendo uma visualização geral das mídias disponíveis. Essa página fornece uma visão geral dos títulos disponíveis e atrai os usuários para explorar mais detalhes.

3- Página de Detalhes (Details): Ao selecionar uma mídia específica, os usuários são direcionados a esta página para obter informações detalhadas sobre a mídia selecionada. Essa página é gerada dinamicamente através de parâmetros fornecidos pelo react-navigation, garantindo uma experiência personalizada para cada título selecionado.

4- Página de Listagem Ampla (Pagination): Essa página permite que os usuários naveguem por uma listagem mais ampla de mídias, aplicando um recurso de scroll infinito. Isso garante que os usuários possam descobrir e explorar uma grande quantidade de títulos de forma contínua, sem limitações de páginação tradicionais.

5- Página de Pesquisa (Search): Podendo pesquisar mídias por seus títulos, também aplicando o scroll infinito.

6- Página de Configurações (Settings): Essa página permite que o usuário faça o logout de sua conta ou até mesmo que a exclua.

## :wrench: Tecnologias utilizadas
* ReactNative;
* Expo;
* JavaScript;

## :rocket: Rodando o projeto
### Para rodar o repositório é recomendado seguir os seguintes passos:
1º - Inicializar o git
```
git init
```
2º - Clonar o projeto
```
git clone https://github.com/Richard-Passos/nativeflix
```
3º - Entrar na pasta do projeto
```
cd nativeflix
```
4º - Instalar dependências
```
npm i
```
5º - Criar arquivo .env
```
touch .env
``` 
6º - Colocar sua API key do TMDB dentro do arquivo .env
```
MEDIAS_KEY=SUA_API_KEY
```
7º - Ainda no arquivo .env, colocar os seus dados de configuração do firebase seguindo o modelo do arquivo .env.example
```
AUTH_KEY=SUA_FIREBASE_API_KEY
AUTH_DOMAIN=SUA_FIREBASE_AUTH_DOMAIN
AUTH_PROJECT_ID=SUA_FIREBASE_PROJECT_ID
AUTH_STORAGE_BUCKET=SUA_FIREBASE_STORAGE_BUCKET
AUTH_MESSAGING_SENDER_ID=SUA_FIREBASE_MESSAGING_SENDER_ID
AUTH_APP_ID=SUA_FIREBASE_APP_ID
```
8º - Rodar projeto com expo
```
npm start
```
## :handshake: Colaboradores
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Richard-Passos">
        <img src="https://img.freepik.com/vetores-premium/desenho-de-desenho-animado-de-um-programador_29937-8176.jpg" width="100px;" alt="Programador"/><br>
        <sub>
          <b>Richard P</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## :dart: Status do projeto
Finalizado
