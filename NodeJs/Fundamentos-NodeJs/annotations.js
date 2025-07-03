/*
Node.js

O Node.js não é uma linguagem de programação. É um ambiente
de execução JavaScript fora do navegador.
Node é baseado no V8 JavaScript Engine do Google Chrome que 
é um interpretador JavaScript. Basicamente, o Node utiliza 
a engine V8 para interpretar e executar o código JavaScript.
Mas, também tem APIs e recursos nativos.

Funcionamento do Node.js
O Node é Single Thread, ou seja, nunca faz duas coisas ao 
mesmo tempo.

Single Thread
No node, há uma única thread principal que executa o código
JavaScript. Esse único thread é responsável por lidar com 
todas as requisições, executar funções e gerenciar operações
de I/O (input e output).
Esse thread não fica bloqueado esperando que as operações de
I/O terminem; em vez disso, ele delega essas operações e 
continua processando outras tarefas (non-blocking I/O).

Call Stack
Cada função que precisa que precisa ser executada é colocada
na pilha (stack). O Node executa a função no topo da pilha e
quando essa função termina, ele a remove da pilha e passa para
para a próxima.

Event Loop
Monitora a Call Stack e a fila de eventos (event queue). Se
a Call Stack estiver vazia, ele pega a próxima tarefa da 
fila de eventos e a coloca na Call Stack para ser executada.

Pensando na Arquitetura
Cliente -> Faz a requisição
Event Loop -> Toma uma decisão para ver se a requisição é 
um pedido simples ou mais complexo. Caso seja simples (síncrona), 
ele manda para a Call Stack que executa a operação e a 
operação estando completa, envia a resposta para quem 
solicitou. Se a operação for mais complexa (assíncrona) e 
precisamos aguardar uma operação, o Event Loop envia para
o Event Queue (operações assíncronas) e quando a tarefa 
assíncrona termina, o event loop "avisa" que está pronto 
e a operação vai para a Call Stack e a Call Stack envia
a resposta a quem solicitou.

Importação Node Js
CommonJs -> Importação padrão do Node Js
Es module -> Importação utilizando import/export

API
O que é uma API?
Application Programming Interface (Interface de Programação de Aplicação)
oferece funcionalidades sem a necessidade de saber como
foram implementados.

Cliente faz a requisição para a API e a API faz a requisição
para o servidor. 
O Cliente sempre precisa de uma resposta na arquitetura 
cliente-servidor.

Métodos HTTP
Indicam a ação a ser executada.

GET - Leitura
POST - Criação
PUT - Atualizar
DELETE - Deletar
PATCH - Atualização Parcial

Podemos ter a mesma rota com ações diferentes. Ou seja, 
no mesmo endereço podemos executar um GET, POST, etc.


HTTP Response Status Codes
Os códigos de status de resposta HTTP indicam o status de 
uma solicitação. 
Exemplo:

1xx -> Respostas informativas
2xx -> Sucesso
3xx -> Redirecionamento
4xx -> Erro do cliente
5xx -> Erro no servidor

Como o Node.js lida com Requisições HTTP

Enviando Dados
Uma requisição HTTP pode incluir dados em um corpo (body).
Quando a requisição chega ao servidor, o corpo não é
imediatamente disponível como uma propriedade simples. Como
o corpo pode ser grande, ele chega ao servidor como um fluxo
(stream) de dados, dividido em pedaços (chunks).

Middleware
Middleware é um interceptador que pode executar código,
fazer mudanças nos objetos de solicitação e resposta e 
encerrar o ciclo de solicitação-resposta. Ele tem acesso
a requisição e a resposta.

Parâmetros Nomeados
A interrogação diz: "Daqui para frente teremos parâmetros
nomeados"

http://localhost:3333/products?category=computer&price=5000

Parâmetros nomeados são muito utilizados para filtrar, 
fazer paginação, dados NÃO obrigatórios.
Não é recomendável passar dados sensíveis em parâmetros 
nomeados.

*/
