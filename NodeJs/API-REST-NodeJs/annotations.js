/*
API REST com Node.js

O que é uma API REST?

Uma API RESTful é uma API que segue os princípios da 
arquitetura REST (Representational State Transfer).

REST é um modelo de arquitetura que fornece diretrizes
para criar aplicações distribuídas que se comuniquem
utilizando os princípios protocolos da WEB, como por 
exemplo, o protocolo HTTP.

Princípios de uma API REST
Client-Server -> Separa a interface do usuário das 
preocupações de armazenamento.

Stateless -> Cada requisição do cliente para o servidor
deve conter todas as informações necessárias para o 
servidor entender e processar a requisição. O servidor
não armazena nenhuma informação sobre o estado do cliente
entre as requisições.

Resource-Based -> Seguir a restrição de uma interface uniforme
ao criar recursos claramente identificados e definir como eles
podem ser manipulados usando métodos HTTP específicos.

Manipulação de Recursos através de Representações -> Os recursos
são manipulados ou modificados não diretamente, mas sim por 
meio de representações desses recursos. Por exemplo, JSON.

Sistema em camadas -> Esse princípio ajuda a organizar e 
simplificar sistemas complexos, promovendo a modularidade,
escalabilidade e flexibilidade. O que ajuda na separação
de responsabilidades para alcançar uma arquitetura eficaz
e de fácil manutenção.

Cacheable -> Destaca a importância de permitir que as 
respostas sejam armazenadas em cache temporariamente no
lado do cliente, melhorando o desempenho, a eficiência e 
a escalabilidade do sistema.

API RESTFUL -> é a que cumpre as diretrizes REST.

TYPESCRIPT NO NODE.JS
Para executar arquivos TypeScript no Node.js precisamos
converter o arquivo ts para JavaScriot. Da seguinte
forma: npx tsc <caminho do arquivo ts a partir da raiz>

O que é o NPX?
NPM -> Node Package Manager
NPX -> Node Package Execute

O NPX executa pacotes, permitindo rodar binários de 
dependências sem precisar especificar o caminho completo.

Configuração TypeScript
Quando utilizamos TypeScript, precisamos utilizar um arquivo 
de configuração. Gere o tsconfig.json com npx tsc --init e 
ajuste as opções essenciais como target, module, lib e 
strict.
O arquivo gerado automaticamente - tsconfig.json - traz 
algumas propriedades comentadas que não serão utilizadas e
para saber quais utilizaremos podemos olhar a documentação
do TypeScript.

EXPRESS
Framework flexível e minimalista para Node.js.
Express conta com:
- Métodos utilitários HTTP 
- Estrutura de roteamento leve e flexível com recursos que
podem ser aumentados com middleware.

Middleware Global -> Aplicar o middleware para todas as rotas
Middleware Local -> Aplicar o middleware em uma rota específica

next -> Tem acesso a próxima requisição, é quem diz para 
seguir para a próxima requisição.

.d.ts -> TypeScript entende que é um arquivo de tipagem global,
ou seja, disponível para toda a aplicação.

Schema Validation
Permite criar regras de validação para permitir que dados 
recebidos sigam um conjunto pré-definidos de regras. Essas 
regras são definidas em um esquema, que descreve a forma
esperada dos dados.
*/
