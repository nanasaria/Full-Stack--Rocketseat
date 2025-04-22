/** 
ECMAScript 

JavaScript foi criado em 1995 por Brendan Eich, 
enquanto ele trabalhava no Netscape.

Em 1996 o JavaScript foi juntado à ECMA International
com o objetivo de padronizar a linguagem.

JavaScript é a linguagem que você escreve e executa nos
navegadores, enquanto o ECMAScript é a especificação que 
define como a linguagem JavaScript deve se comportar.
__________________________________________________________________________________________________________________

Strict mode

Os erros silenciosos passam a gerar exceções no Js.
Pode ser ativado no escopo global ou de função.

function showMessage(){
    "use strict" -> Ativa o Strict Mode.

    personName = "Roberta Marinho"
    console.log("Olá", personName)
}

__________________________________________________________________________________________________________________

Desestruturação em Arrays

Permite extrair dados de arrays ou objetos em 
variáveis distintas.

const data = ["Roberto Carlos", "roberto@gmail.com"]

const [username, email] = data

console.log(username) -> Retorno: Roberto Carlos

const fruits = ["banana", "maçã", "laranja"]

Desestruturar somente o primeiro:
const [fruit] = fruits
console.log(fruit) -> Retorno: banana

Ignorar o primeiro item na desestruturação:
const [_, apple] = fruits
console.log(apple) // Retorno: maçã

Ignorando o primeiro e o segundo:
const [,,orange] = fruits
console.log(laranja) -> Retorno: laranja

Desestruturação em Objetos

const product = {
    description: "teclado",
    price: 150
}

const {description, price} = product
console.log("Descrição:", description)
console.log("Preço: R$", price)

Independente da ordem passada, não muda o retorno.

function newProduct({description, price}){
    console.log(## NOVO PRODUTO ##)
    console.log("Descrição:", description)
    console.log("Preço: R$", price)
}

newProduct({
    description: "Mouse", 
    price: 70
})
__________________________________________________________________________________________________________________

Rest params (...) 

Permite representar um número indefinido de
argumentos como um array.

function values (a, ...rest){
    console.log(a) -> Retorno: 1
    console.log(...rest) -> Retorno: 2,3,4
    console.log(rest) -> Retorno: [1,2,3,4]
}

Você consegue passar parâmetros de forma dinâmica.
values(1, 2, 3, 4)

**Dica: Pode usar o nome que desejar com o rest 
params, não precisa utilizar o "rest".

__________________________________________________________________________________________________________________

Spread

Permite que um objeto iterável, como uma expressão
array ou uma string seja expandido para ser usado
onde tiver zero ou mais argumentos.

const numbers = [1,2,3]
console.log(numbers) -> Retorno: [1,2,3]

Com Spread (...)
console.log(...numbers) -> Retorno: 1 2 3

const data = [
    {
        name: "Chappel",
        email: "chappelroan@gmail.com",
        avatar: "chappel.png"
    },
    {
        name: "Lana",
        email: "lanadelrey@gmail.com",
        avatar: "lanadelrey.png"
    }
]

loga o array contendo os 2 objetos
console.log(data) -> Retorno: [{...}, {...}]

Traz os 2 objetos separados (desestruturados).
console.log(...data) -> Retorno: {name: "Chappel",email: "chappelroan@gmail.com",avatar: "chappel.png"}
{name: "Lana",email: "lanadelrey@gmail.com",avatar: "lanadelrey.png"}

__________________________________________________________________________________________________________________

Métodos de Array

método map(): Usado para manipular um array.
Chama a função callback recebida por parâmetro para
cada elemento do Array original, em ordem, e constrói
um novo array com base nos retornos de cada chamada.
E no final, devolve o novo array.

const products = ["Teclado", "Mouse", "Monitor"]

Percorrendo os itens do array
products.map((product) => {
    console.log(product) -> Loga cada produto.
})

Sintaxe reduzida:
products.map((product) => console.log(product))

Utilizando o novo objeto retornado:
const formatted = products.map((product) => {
    return product.toUpperCase()
})

console.log(formatted) -> Retorno: Novo array 
products com todos os itens em maiúsculo.

método filter(): Usado para filtrar um array.
Cria um novo array com todos os elementos que 
passarem em uma condição.

const words = ["JavaScript", "HTML", "CSS", "Web"]

const result = words.filter((word) => word.length > 3)
console.log(result) -> Retorno: ["JavaScript", "HTML"]

const products = [
    {description: "Teclado", price: 150, promotion: true},
    {description: "Mouse", price: 70, promotion: false},
    {description: "Monitor", price: 900, promotion: true},
]

const promotion = products.filter((product) => product.promotion === true)
console.log(promotion) -> Retorno: [{description: "Teclado", price: 150, promotion: true},
{description: "Monitor", price: 900, promotion: true}]

método findIndex(): Usado para encontrar um índice.
Retorna o índice no array do primeiro elemento que
satisfazer a condição. Caso contrário, retorna -1,
indicando que nenhum elemento passou no teste.

const values = [4, 6, 8, 12]

const index = values.findIndex((value) => value > 4) 
Retorno: 1 (6)
Porque é o primeiro elemento que satisfaz a 
condição.

método find(): Usado para encontrar um valor.
Retorna o valor do primeiro elemento do array
que satisfaz uma condição. Caso não encontre,
retorna undefined.

const values = [5, 12, 8, 130, 44]

const found = values.find((value) => value > 10)
Retorno: 12 
Porque é o primeiro elemento que satisfaz a 
condição.

Com objetos:

const fruits = [
{name: "apple", quantity: 23},
{name: "banana", quantity: 25},
{name: "orange", quantity: 52}
]

const result = fruits.find((fruit) => fruit.name === "banana")
Retorno: {name: "banana", quantity: 25}

método every(): Usado para testar todos os elementos
Testa se todos os elementos passam em uma condição
e retorna um valor boolean.

const ages = [15, 30, 39, 29]

verificar se todas as idades são maiores ou iguais
a 18.
const result = ages.every((age) => age >= 18)
console.log(result) -> Retorno: false
Porque há um elemento com o valor 15 no array,
portanto, não são todos os elementos que são
maiores que 18.

método some(): Usado para verificação
Testa se ao menos um dos elementos no array passa
em uma condição e retorna um valor boolean.

const ages = [15, 30, 39, 29]
const result = ages.some((age) => age < 18)
console.log(result) -> Retorno: true
Porque há um elemento com o valor 15 no array
que é menor que o valor 18.

método some(): Usado para reduzir um array a um único valor.

Parâmetros:
- Array original (values)
- Acumulador (accumulator)
- Valor da iteração (currentValue)
- Valor inicial (0)
- Index (Index da iteração atual - opcional)

const values = [1, 2, 3, 4, 5]
const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("ACUMULADOR", accumulator)
    console.log("CURRENT VALUE", currentValue)
    console.log("INDEX", index)

    console.log("SOMA", accumulator + currentValue)
    console.log("#####################")

    return accumulator + currentValue;
}, 0)

Esse sum vai retornar a soma de todos os valores 
do array values.

Esse 0 no fim é onde se declara o valor inicial 
do acumulador.

**O reduce precisa do return.
__________________________________________________________________________________________________________________

IMUTABILIDADE
Uma vez que algo imutável é criado, você não pode
modificar valores ou propriedades. Em vez disso,
você cria uma cópia modificada para manter o 
original inalterado.

Exemplo:

const address1 = {
    street: "Av. Brasil",
    number: 20
}

const address2 = address1
address2.number = 30

O address2 não é uma cópia de address1, é uma
REFERÊNCIA.
O address2 irá modificar o address1. Porque 
address2 faz referência a address1 e não um novo
objeto na memória.

Estratégia
Geralmente há duas maneiras:
1. Alterar o dado diretamente no valor.
2. Substituir o dado antigo por uma nova
   cópia com as alterações desejadas.

Exemplo:
const address1 = {
    street: "Av. Brasil",
    number: 20
}

const address2 = {...address1}
address2.number = 30

Na criação de interface
A imutabilidade é utilizada para otimizar a atualização
do DOM e para fornecer um modelo mais previsível no
desenvolvimento de interfaces (UI).

Detectar Mudanças
Detectar mudanças e objetos mutados é difícil, como
eles são modificados diretamente, a detecção do que
mudou exatamente requer um objeto mutado para ser
comparado com as cópias das suas próprias versões
anteriores e a árvore inteira do objeto para ser
cruzada.

Detectar mudanças em objetos imutáveis é consideravelmente
fácil. Se ele for diferente do anterior, concluímos
que o objeto foi alterado.

Aplicando imutabilidade

const address1 = {
    street: "Av. Brasil",
    number: 20
}

Isso não é cópia. É uma referência.
const address2 = address1

Cria um objeto diferente, mas com os valores e 
propriedades do address1
const address2 = {...address1}

Outra opção:

Cria um objeto diferente, mas com os valores e 
propriedades do address1 já sobrepondo o number.
const address2 = {...address1, number:30}

Exemplo Array
const list1 = ["apple", "banana"]
const list2 = list1 -> REFERÊNCIA
const list2 = [...list1] -> CÓPIA

**Com array, nesse caso, você também NÃO está criando uma
cópia e sim uma referência.

SHALLOW COPY - Cópia superficial
Não pega os itens aninhados.

const htmlCourse = {
    course: "HTML",
    students: [{name: "Lana del rey", email: "lanadelrey@gmail.com"}]
}

Adiciona as propriedades e valores do htmlCourse e 
sobrescreve o valor da propriedade course.
const jsCourse = {
    ...htmlCourse,
    course: "JavaScript"
}

jsCourse.students.push({name: "João", email:"joao@email.com"})
**O problema de fazer isto da forma como estamos fazendo isso
é que está adicionando esse objeto em htmlCourse também, 
então, fazendo desta forma não estamos copiando, estamos
referenciando porque students é um objeto aninhado. Ele só
faz a cópia do primeiro nível, se houver objetos aninhados
ele consegue apenas referenciar.**


DEEP COPY - Cópia profunda
const htmlCourse = {
    course: "HTML",
    students: [{name: "Lana del rey", email: "lanadelrey@gmail.com"}]
}

Dessa forma copiamos htmlCourse e o students que é um objeto
aninhado.
const jsCourse = {
    ...htmlCourse,
    course: "JavaScript",
    students: [...htmlCourse.students]
}

jsCourse.students.push({name: "João", email:"joao@email.com"})
***Agora adicionamos esse objeto apenas em students 
do JsCourse.***

Outra maneira:
const jsCourse = {
    ...htmlCourse,
    course: "JavaScript"
}

jsCourse.students = {
    ...htmlCourse.students
}

Congelar um objeto para impedir a modificação
const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Lady Gaga",
        email: "ladygaga@gmail.com"
    }
}

O JavaScript em si não impõe restrições à modificação
dos objetos.
book.category = "HTML"

Congelar os objetos e impedir a modificação:
Object.freeze(book)

**O Freeze não impede modificações profundas, ou seja, não
congela objetos aninhados.

Deep Freeze - Congelar recursivamente cada propriedade.
Função Recursiva -> Função que chama ela mesma.

const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Lady Gaga",
        email: "ladygaga@gmail.com"
    }
}

function deepFreeze(object){
**Pega todas as propriedades do objeto e devolve como array.**
**Apenas do primeiro nível.**
    const props = Reflect.ownKeys(object)

**Itera sobre todas as propriedades do objeto.**
    for(const prop of props){
    ** Obtém o valor associado a propriedade atual.**
        const value = object[prop]

        **Verifica se o valor é um objeto ou uma função
        para continuar aplicando o deepFreeze em objetos 
        aninhados.**
        if ( value && typeof value === "object" || 
        typeof value === "function" ) {
            deepFreeze(value)
        }
    }

    **Retorna o objeto congelado.**
    return Object.freeze(object)
    
}

**Chama a função para congelar o objeto com Deep Freeze.**
deepFreeze(book)

Manipulando Objetos Imutáveis 

const book = {
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Lady Gaga",
        email: "ladygaga@gmail.com"
    }
}

const updatedBook = {
    ...book,
    title: "Criando um Front-end moderno com HTML"
    category: "html"
}

Utilizar rest operator (desestruturação) para remover 
propriedades:

const {category, ...bookWithoutCategory} = book
bookWithoutCategory -> Agora é um objeto sem category.

__________________________________________________________________________________________________________________

Módulos
ESM é o sistema de módulo JavaScript (ESM é uma abreviação
para Módulos JavaScript) que define um formato para organizar
e estruturar o código em módulos, permitindo a modularização
e reutilização de código.

** Precisa colocar quais funções irá exportar usando um "export",
se não colocar isso, a função fica disponível apenas ao arquivo 
que pertence.**

**Para utilizar os modulos, precisa passar para o script
o tipo módulo (type="module") ou no package.json.**

Exportar funções

Quando colocamos o default depois de export, estamos dizendo
que a função é exportada por padrão.

export default function sum(a, b) {
  return a + b;
}

Quando exportamos por padrão, para importar a função
fica: import sum from "./calc.js";
Sem as {}.

Quando exportamos normalmente:
export function sum(a, b) {
  return a + b;
}

a importação fica:
import { sum } from "./calc.js";
__________________________________________________________________________________________________________________

Funções assíncronas

setTimeout() -> Executar após um intervalo de tempo.
Executa uma função após um intervalo de tempo especificado.

1° Parâmetro: Função
2° Parâmetro: Tempo em milissegundos.

setTimeout(() => {
    console.log("Olá, tudo bem?")    
}, 3000)

setInterval() -> Executa uma função após um intervalo de 
tempo especificado. 
** O setInterval() fica executando a cada intervalo de tempo.
Ex: Quando você deseja que algo seja executado a cada 5s.


let value = 10

const interval = setInterval(() => {
    console.log(value)
    value--

    if(value === 0){
        console.log("Feliz ano novo!")   
        clearInterval(interval) 
    }
}, 1000)

** Essa função decrementa o value a cada 1s, ou seja, 
a cada 1s tira 1 do valor (10) e quando chega ao 0,
loga um "Feliz ano novo!" e interrompe o setTimeout 
com o clearInterval(). **

Sobre Funções Assíncronas
Quando uma função assíncrona é chamada, ela retorna uma
Promise.
Quando a função assíncrona retorna um valor, a Promise 
será resolvida com o valor retornado.
Quando a função assíncrona lança uma exceção ou algum valor,
a Promise será rejeitada com o valor lançado.

Uma função assíncrona pode conter uma expressão await, que 
pausa a execução da função assíncrona e espera pela resolução
da Promise passada, e depois retoma a execução da função
assíncrona e retorna o valor resolvido.

**Se não usar o await, o JavaScript não irá esperar pelo
retorno de algo, simplesmente vai seguir com a execução
da função.**

Função que retorna uma Promise:
function asyncFunction() {
    return new Promise((resolve, reject) => {
        **Simular uma operação assíncrona**

        const isSuccess = true
        if(isSuccess){
            resolve("A operação foi concluída com sucesso!")
        }else{
            reject("Algo deu errado")
        }
    })
}

**A Promise recebe uma função que tem como parâmetro o
Resolve e o Reject. 
Resolve -> Quando a Promise é bem sucedida.
Reject -> Quando a Promise é mal sucedida.**

Visualização da Promise:
console.log(asyncFunction())

**Apresenta uma Promise pendente porque não foi definido
que deve esperar a execução da Promise**

Para visualizar o retorno da Promise:
asyncFunction().then((response) => {
    console.log("Promise resolvida:",response)
}).catch((error) => {
    console.log("Error", Error)    
}).finally(() => {
    console.log("Eu executo sempre.")    
})

**then() espera a função ser resolvida e recupera 
a resposta usando o parâmetro response pertencente.**

**catch() caso a Promise seja rejeitada, cai no catch
que retorna o erro utilizando o parâmetro error que 
pertence a ele.**

**finally() executa independente se a Promise for resolvida
ou rejeitada.**

Async/Await

Declaramos que essa é uma função assíncrona.
**O await indica que o Js deve esperar a resolução, nesse
caso da asyncFunction().**

async function fetch() {
    cons response = await asyncFunction()
}

fetch()

**Para utilizar o await, precisa do async.

Com arrow function:

const fetch = async () => {
    cons response = await asyncFunction()
}

Event loop

Característica do Js:
single threaded: Executa uma coisa por vez.
no-blocking: Não trava o contexto da execução.
asynchronous: Por ser no-blocking precisa utilizar um
paradigma assíncrono para lidar com a execução das 
coisas.
concurrent: As tarefas que executam assincronamente 
concorrem umas com as outras pelo processamento.

Concorrência e Event Loop
O JavaScript possui um modelo de concorrência baseado
em um event loop responsável por gerenciar a execução
de código assíncrono e eventos em um único thread,
permitindo que o JavaScript seja não bloqueante.

Call Stack
Armazena as chamadas de funções em execução. Quando uma 
função é chamada, ela é empilhada no topo da pilha.

Tudo passa pelo Call Stack. Algumas tarefas são executadas
nela mesma e outras somente passam por ela e será executada
em uma Web API.

Web APIs 
Utilização de outros recursos.
- setTimeout
- DOM
- fetch

Callback Queue
Fila que armazena callbacks e eventos que aguardam para 
serem processados.
- onClick
- onLoad

Event Loop
Verifica a pilha de Call Stack e Callback. Se houver,
um callback é removido da fila e colocado na pilha
de chamadas para execução.

Micro e Macro Tasks
Existem dois tipos principais de tarefas na fila de 
callback.

Microtasks: São tarefas de alta prioridade que são executadas
antes das Macrotasks (temporizadores e promises).

Macrotasks: São tarefas de menor prioridade, como callbacks
de eventos setTimeout e setInterval.
__________________________________________________________________________________________________________________

Pacotes
Pacotes (ou bibliotecas) fornecem funcionalidades prontas que
você pode reutilizar em projetos. Economiza tempo e esforço,
evitando a necessidade de reescrever funcionalidades.

Gerenciador de pacotes
É uma ferramenta que facilita a instalação, atualização e
gerenciamento de bibliotecas e dependências de um projeto.

O gerenciador lida com a resolução de dependências, garantindo
que as bibliotecas necessárias estejam disponíveis em 
versões compatíveis.

NPM é um dos gerenciadores de pacotes mais populares para
JavaScript.

Usado principalmente no ecossistema do Node.js, mas também
é utilizado em projetos front-end web.

O npm permite instalar e gerenciar pacotes JavaScript e
executar scripts e bibliotecas instaladas.

Dependências e Ambientes

Produção
Inclui as dependências necessárias para a execução do projeto
em um ambiente de produção.

Desenvolvimento
Inclui as dependências que são necessárias apenas durante o
desenvolvimento, mas não são necessárias para a execução
do aplicativo em produção.

Resolução de dependências

Versionamento semântico
Padrão de atualizações de versões que oferece um modelo
fácil de entender o que mudou em uma versão.

  9    .    1    .      3
 Major     Minor      Patch

Major (versão principal): Aumenta quando são feitas alterações
incompatíveis. Isso significa que, se você atualizar para uma
nova versão principal, pode haver alterações que quebrarão
a compatibilidade com versões anteriores.

Minor (versão menor): Aumenta quando são adicionadas novas
funcionalidades de maneira compatível com versões anteriores.
As atualizações não devem introduzir alterações que quebram 
a compatibilidade com o código existente.

Patch (versão de correção): Aumenta quando são feitas correções
de bugs compatíveis com versões anteriores. Isso significa 
que essas correções não devem introduzir novas funcionalidades
ou quebrar a compatibilidade.

Convenções
O NPM utiliza convenções para gerenciar a resolução de
dependências e garantir que as instalações subsequentes
mantenham a compatibilidade com as versões na aplicação.

O simbolo (~) permite atualizações automáticas para versões
compatíveis permitindo receber patches e correções de bugs.

O simbolo (^) indica que o NPM pode instalar automaticamente
a versão mais recente compatível, mas não a próxima versão
compatível.

Isso permite receber patches, correções de bugs e pequenas
alterações de versão, mas não grandes alterações de versão.

O simbolo (@) indica uma versão exata. O NPM instalará a
versão indicada.
__________________________________________________________________________________________________________________

Requisições HTTP

O que é uma API?
API (Application Programming Interface) é uma interface
que disponibiliza um conjunto de funcionalidades para
serem utilizadas.

Ex: API de CEP, previsão do tempo, cotação de moedas, etc.

Relação Cliente e Servidor
A nossa aplicação (cliente) se conecta com o servidor (API).

Cliente faz a requisição e Servidor dá a resposta.

Métodos HTTP
GET, POST, PUT, DELETE, PATCH

JSON
Significa JavaScript Object Notation. É uma notação de
objetos utilizado para representar dados.
Amplamente utilizado na comunicação cliente-servidor.
Baseado em 
{
chave:valor
}

__________________________________________________________________________________________________________________

Compiladores
Converte código escrito em uma versão específica do JS para
outra versão, permitindo usar recursos mais recentes da 
linguagem mesmo em ambientes que não oferecem suporte a 
essas funcionalidades. Ex: Navegadores antigos.

Transpilação
A transpilação também é um termo utilizado para se referir
a compilação para versões antigas.

Parser: Mapeia todos os elementos do código JS.
Transformer: Manipula os elementos js para gerar código
compatível.
Generator: Gera o código JavaScript.

** Compiladores são essenciais para a evolução contínua da
linguagem. **


__________________________________________________________________________________________________________________
**/
