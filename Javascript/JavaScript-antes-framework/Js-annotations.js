/** 
ECMAScript 

JavaScript foi criado em 1995 por Brendan Eich, 
enquanto ele trabalhava no Netscape.

Em 1996 o JavaScript foi juntado à ECMA International
com o objetivo de padronizar a linguagem.


JavaScript é a linguagem que você escreve e executa nos
navegadores, enquanto o ECMAScript é a especificação que 
define como a linguagem JavaScript deve se comportar.

Strict mode
Os erros silenciosos passam a gerar exceções no Js.
Pode ser ativado no escopo global ou de função.

function showMessage(){
    "use strict" -> Ativa o Strict Mode.

    personName = "Roberta Marinho"
    console.log("Olá", personName)
}

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

__________________________________________________________________________________________________________________
**/
