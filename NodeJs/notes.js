/*
O que é CORS?

CORS -> Cross-Origin Resource Sharing
É uma funcionalidade de segurança que permite que uma 
página web acesse recursos de outra origem.

Ex: 
Servidor A -> Front-end
Servidor B -> Back-ed

Para que esses servidores se comuniquem, precisa aplicar o
CORS para habilitar para que uma outra origem possa acessar
o Back-end de forma segura.

Como funciona?

- O CORS é ativado quando uma página tenta acessar recursos
de uma origem diferente daquela que a serviu.
- O CORS adiciona cabeçalhos HTTP que informam ao navegador
se deve permitir o acesso aos dados solicitados.
- Os cabeçalhos CORS incluem Access-Controll-Allow-Origin,
Access-Controll-Allow-Credentials, entre outros,
- O servidor verifica o cabeçalho da origem atual e responde
com os dados solicitados.
- O navegador visualiza os cabeçalhos da solicitação de 
controle de acesso e compartilha os dados retornados com a
aplicação cliente.

Para habilitar o CORS precisa instalar:
npm i cors
Em caso de utilizar TypeScript, precisa instalar os types:
npm i @types/cors
Depois importá-lo no arquivo utilizando o express e 
usá-lo.
Ex: 
const app = express();
app.use(cors());

OBSERVAÇÃO SOBRE O NODE.JS:
O status 200 é padrão, ou seja, se você não passar o status,
retorna 200.

Entendendo Paginação
Paginação -> Retorna resultados conforme uma quantidade
estabelecida. Ou seja, se definir 10 itens por página, 
retorna-se 10 itens - máximo 10 itens - em cada página.

perPage -> Quantidade de itens por página.
page -> Número da página desejada.
take -> Garante que apenas o número de registros definidos
        em perPage será retornado.
skip -> Define quantos registros serão ignorados antes de
começar a busca, para pegar somente os próximos registros e
ignorar a página anterior.

*/
