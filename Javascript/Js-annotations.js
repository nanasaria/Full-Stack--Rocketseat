/*
_________________________________________________________________________________________________
DOM - Document Object Model

Obter o título do documento:
document.title;

Acessar elementos por id:
const id = document.getElementById("id");

Visualizar as propriedades do objeto:
console.dir(id)

Acessar elementos pela classe:
const grid = document.getElementsByClassname("grid")
Traz mais de um elemento dependendo de quantos elementos estão utilizando uma classe

Selecionar lista de elementos pela tag:
const li = document.getElementsByTagName("li")

Selecionar elementos utilizando os seletores do css:
const id = document.querySelector("#id") -> Selecionar um elemento pelo id.
const class = document.querySelector(".class") -> Selecionar um elemento pela classe.
O Query selector retorna sempre o PRIMEIRO item.

Para selecionar todos:
const items = document.querySelectorAll("#items");

Manipulando conteúdo:

Retorna o conteúdo como texto:
console.log(id.textContent) -> Retorna o conteúdo visível e oculto.
ex de resultado: "  Item 1  "

Atribuir novo conteúdo:
id.textContent = "Primeiro item"

No QuerySelector você pode passar mais de 1 argumento:
const spanIntoList = document.querySelector("li span")

Outras manipulações:
spanIntoList.innerText = "Primeiro item" -> Muda somente o texto. Retorna somente o conteúdo visível.
spanIntoList.innerHtml -> Pode mudar o elemento HTML. No caso, o span. Retorna o HTML como texto.

Alterando os estilos:
const input - document.querySelector("#nam")

adicionar classes ao elemento:
input.classList.add("input-error")

remover classes do elemento:
input.classList.remove("input-error")

Se a classe não existe adiciona, se a classe existe remove:
input.classList.toggle("input-error")

Mudar cor do elemento:
const button = document.querySelector("button")
button.style.backgroundColor = "red"

Criando elementos:
const guests = document.querySelector("ul") -> selecionando o ul

const newGuest = document.createElement("li") -> Criando um elemento li
const guestName = document.createElement("span") -> Criando um span

guestName.textContent = "Maria Alice" -> adicionando o texto do span
newGuest.append(guestName) -> Adicionando o span dentro do li.

prepend() -> Adiciona antes de tudo.
appendChild() -> Adiciona 1 elemento como filho.

Adicionar classe ao elemento:
newGuest.classList.add("guest")

Manipular atributos do elemento:
const input = document.querySelector("input")

************************************************************************
*    primeiro argumento é a propriedade e a segunda é o valor.         *
*    input.setAttribute("disabled", true)                              *
*    input.setAttribute("type", "file")                                *
*                                                                      *
*    Você pode remover também:                                         *
*    Passa apenas 1 argumento.                                         *
*    input.removeAttribute("id")                                       *
************************************************************************

Eventos
Ação que o usuário faz para interagir com a aplicação.

addEventListener() -> método que observa o que acontece com a janela (window)

primeiro argumento é o evento e o segundo é uma função para manipular.
window.addEventListener("load", () => {})

Quando usamos direto, observa a nossa estrutura do DOM.
Você pode recuperar todas as informações do evento passando uma variável na função
dentro do addEventListener.
addEventListener("click", (event) => {
    event.target -> Retorna o elemento que foi clicado.
    console.log(event.target.textContent) -> Retorna o textContent do elemento clicado.
})

preventDefault() -> previne o comportamento padrão, muito usado para botões submit para que
a página não recarregue a cada click.

Eventos em um elemento específico:
const ul = document.querySelector("ul")

ul.addEventListener("scroll", () => {
    console.log(ul.scrollTop) 

    if(ul.scrollTop > 300){
        console.log("Fim da lista")
        ul.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
})

scrollTop -> Mostra qual o valor de distância que a barra está do topo da lista.

Eventos de formulário:

const form = document.querySelector("form")

Você pode fazer direto sem o "AddEventListener"
form.onsubmit = (event) => {
    event.preventDefault()
    console.log("Você fez submit no form")
}

form.addEventListener("submit", () => {
    event.preventDefault()
    console.log("Você fez submit no form")
})

Quando se utiliza o onsubmit, ele funciona apenas com o último criado e o addEventListener
funciona com todos.

Eventos em input:
const input = document.querySelector("input")

// keydown - Quando uma tecla é pressionada (captura qualquer tecla)
input.addEventListener("keydown", (event) => {
    console.log(event) -> Dispara o evento quando qualquer tecla é pressionada.
    console.log(event.key) -> Pega somente a tecla pressionada
})

//keypress - Quando uma tecla do tipo caractere é pressionada (letras, números, pontos e etc.)
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})

//change - Quando um conteúdo muda
input.addEventListener("change", (event) => {
    console.log(event)
})

Compreendendo Expressões Regulares
É utilizado para identificar se uma ocorrência ou padrão existe em uma string.
Um padrão de expressão é composto por um conjunto de caracteres ou uma combinação
de caracteres simples e especiais.

Utilizar a expressão regular:
const input = document.querySelector("input")
input.addEventListener("input", () => {

    /D - Identifica somente letras;
    + - Identifica uma sequência
    g - aplica para toda a String.

    const regex = /\D+/g
    const value = input.value

    Propriedade match() verifica um padrão.
    console.log(value.match(regex))
})

Acessando propriedades e métodos usando a notação de ponto.
const user = {
    name: "Bárbara",
    surname: "Barbie",
    age: 19,

    function: method(){
        console.log("Olá, sou um método :)")
    }
}

console.log(user.name)

Acessando um método dentro do objeto:
user.method()

//Notação de colchetes - Outra alternativa.
console.log(user["name"])
user["message"]()

Acessar propriedades dentro do contexto do objeto:
const user = {
    name: "Bárbara",

    message: function (){
        console.log(`Olá, ${this.name}`)
    }
}

** Com arrow function o "this" não funciona

Atualizar objetos em javascript:
const product = {
    name: "Teclado",
    quantity: 100
}

atualizar a propriedade:
product.quantity = 90

Encadeamento Opcional (?.):
Se a propriedade ou função chamada é nullish (null or undefined),
a expressão retorna undefined em vez de gerar um erro.

Útil ao explorar o conteúdo de um objeto quando não existe
garantia de existência de determinadas propriedades obrigatórias.

const user = {
    id: 1,
    name: "Rodrigo",
    address: {
        street: "Avenida Brasil",
        city: "São Paulo",
        geo: {
            latitude: 47.8080,
            longitude: 17.5674
        }
    }
    
    message: function() {
        console.log(`Olá, ${this.name}`)
    }
}

console.log(user?.address?.street)

OPERADOR DE COALESCÊNCIA NULA (??)
Operador lógico que retorna o seu operando do lado direito
quando o seu operador do lado esquerdo é null ou undefined.
Caso contrário, ele retorna o seu operando do lado esquerdo.
Ou seja, vai retornar o que houver valor.

let content = null
console.log(content ?? "Conteúdo padrão")
Esse log imprime "Conteúdo padrão".

content = "Olá"
console.log(content ?? "Conteúdo padrão")
Nesse caso, que o content agora tem um valor, imprimiu
"Olá".

Ele entende apenas o null e undefined, se passar um valor
boolean, por exemplo, ele entende que contém um valor.

Utilizando com objetos:
const user = {
    name: "Rodrigo",
    avatar: undefined
}

console.log(user.avatar ?? "default.png")

Função construtora
É a função que usamos com o operador new que é capaz de
instanciar objetos.

function createProduct(name) {
    const product = {}

    product.name = name;
    product.details = function(){
        console.log(`O nome do produto é ${this.name}`)
    }

    return product
}

const product1 = new createProduct("Teclado")
const product2 = new createProduct("Mouse")

function Person(name){
    this.name = name;
    this.message = function(){
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = newPerson("Kiana")

Texto maiúsculo e minúsculo:

let message = "Olá, mundo!"
message.toUpperCase() -> Maiúsculo
message.toLowerCase() -> Minúsculo

Comprimento de uma string:
message.length

Substituindo e fatiando uma string

Substituir:
1° parâmetro se refere a qual parte quer substituir
2° parâmetro é pelo que se quer substituir:
message.replace(",", " ")
Nesse caso vai substituir a virgula por um espaço.

Fatiar:
1° parâmetro se refere ao inicio de onde vai começar a fatiar
2° parâmetro se refere ao fim de onde termina de fatiar
message.slice(0,3)
Nesse caso, vai retornar: "Olá".

Extraindo uma parte de trás para frente:
message.slice(-6)
Nesse caso, vai retornar: "mundo!".

Remover espaços em branco no início e final da string:
let textWithSpace = "   Texto de exemplo    "
textWithSpace.trim()

Completando uma string
const creditCard = "1234567891239367"
const lastDigits = creditCard.slice(-4)

Ocultar o restante dos números:
método padStart() preenche a string a partir do início.
Recebe dois parâmetros.
1° parâmetro - Qual o tamanho que quer para o texto
2° parâmetro - Pelo que vai substituir
const maskedNumber = lastDigits.padStart(creditCard.length, "X")
Preenche todos os números como X com exceção dos 4 últimos.

método padEnd() preenche a string a partir do fim.
Recebe dois parâmetros.
1° parâmetro - Qual o tamanho que quer para o texto
2° parâmetro - Pelo que vai substituir

const number = 123
number.padEnd(10, "#")
Vai completar com jogo da velha até 10, com exceção do 123.

Separando e unindo strings:
let text = "Estudar, aprender, praticar"

Método de split divide o texto.
O parâmetro que ele recebe é a partir de qual caractere ou
parte de texto pode dividir. Ou seja, onde faz o corte.
let separate = text.split(",")
Split gera um array com as palavras separadas.
Nesse caso, resulta em:
["Estudar", "Aprender", "Praticar"]

Como unir a string:
Sem parâmetros, o join insere vírgulas ao fim de cada pedaço,
mas você pode passar algo para ele colocar.
let joined = separate.join()

Encontrando um conteúdo em uma string:
let message = "Estou estudando os fundamentos do JS"

Obter a posição da palavra:
IndexOf é um método que retorna o índice inicial da 
palavra que você passar por parâmetro.
message.indexOf("JS")

Verificar se uma palavra existe na String.
message.includes("JS")

**Para o javascript, o array é um objeto.**

Criar array com construtor:
const newArray = new Array()

o new Array() pode receber um valor para indicar quantas posições quer no array.

Como criar e acessar arrays?
let fruits = ["Apple", "Orange", "Grape"]

const grape = fruits[2] -> Acessa pelo índice

Convertendo uma String para Array:
let phrase = "Katy Perry foi para a Lua"
phrase.split(" ") -> Transforma cada palavra após o espaço em um item de array.
Retorno: ["Katy","Perry","foi","para","a","Lua"]

Cria um array com as letras
Array.from(phrase) -> Nesse caso, cada letra da frase se torna um item.

Adicionando e removendo itens em um array:
let users = []
users.push("Caio") -> Método push() adiciona um item no fim do array.
users.unshift("Ana") -> Método unshift() adiciona um item no início do array.

users.shift() -> Método shift() remove um item do início do array
users.pop() -> Método pop() remove um item do final do array.

Usando o índice:
let fruits = ["Apple", "Orange", "Grape", "Strawberry", "Lemon"]

let position = fruits.indexOf("Apple") -> Procura qual o índice de apple. Retorno: 0.
**Procurando um item que não tem no array, retorna -1.

** Método splice()-> Remover elementos do array com base no índice.
Recebe 2 parâmetros.
1° parâmetro: A partir de qual posição deletar itens do array
2° parâmetro: Quantos elementos quer remover

fruits.splice(0, 2)
Retorno: ["Strawberry", "Lemon"]






























Loop FOR
Repete até que a condição específica seja FALSA.

Recebe:
- Variável de controle
- Condição
- Incremento ou decremento da variável de controle

for(step = 0; step < 10; step++){
    console.log(step)
}

Executa de 0 a 9, portanto retorna o número 0 ao 9.

Exemplo de tabuada:
for (let i = 0; i <= 10; i++) {
  const num = 7;
  console.log(`${num} X ${i} = ${num * i}`);
}

For in:
Executa as interações a partir de um objeto e percorre as propriedades.

let person = {
    name: "Lady",
    surname: "Gaga",
    email: "ladygaga@gmail.com"
}

Dentro do parênteses utilizamos o in.
1° parâmetro: Variável auxiliar.
2° parâmetro: in.
3° parâmetro: Objeto que gostaria de percorrer.

for (let property in person){
    console.log(property) -> Exibe o nome da propriedade.
    console.log(person[property]) -> Exibe o conteúdo da propriedade. 
}

For of
Itera sobre valores de um objeto iterável.

let students = ["Maria", "Malévola", "Cinderela"]

for(let student of students){
    console.log(student)
}

Com of você retorna o conteúdo e o in você retorna o índice.

Break 
Encerra a execução da repetição ou switch para seguir
para a instrução seguinte.

Utilizando o break no for:
for(let i = 0; i < 10; i++){
    console.log(i)
    if(i === 5){
        break 
    }
}
Quando o i chega ao 5, ele para a execução.

Continue
Encerra (pula) a execução das instruções na iteração atual e
continua a execução do loop com a próxima iteração.

for(let i; i < 10; i++){
    console.log(i)
    if(i === 5){
        continue
    }
}
Nesse caso irá imprimir do 0 ao 4 e quando chega ao 5, ele 
volta a execução do inicio e retorna o restante 6 a 9.

Data e Hora

Exibir data e hora atual:
new Date()

Retornar a quantidade de milissegundos decorridos desde a data
que o JavaScript usa de referência:
new Date().getTime()

Definindo uma data específica:

1° parâmetro: Ano
2° parâmetro: Mês -> Sempre começa do 0, ou seja, janeiro é 0 e dezembro é 11.
3° parâmetro: Dia

new Date(2025, 3, 15)


Definindo uma data e uma hora específica:
4° parâmetro: Horas
5° parâmetro: Minutos
6° parâmetro: Segundos
new Date(2025, 3, 15,14,30,0)

Outra maneira:
Passar como string e o T é para representar o horário
new Date("2025-04-15T14:30:00")

Outra maneira:
new Date("April 4, 2025 15:30:00")

Métodos pra trabalhar com data e hora
let date = new Date("July 4, 2024 15:32:04")

Trazer o dia da semana:
date.getDay() -> Pega o dia da semana de 0 a 6. 0 é domingo.

Trazer o dia do mês (0 a 30)
date.getDate()

Trazer o mês (0 a 11)
date.getMonth()

Trazer o ano
date.getFullYear()

Trazer as horas
date.getHours()

Trazer os minutos
date.getMinutes()

Trazer os segundos
date.getSeconds()

Modificando uma data e uma hora

Modificar o ano:
date.setFullYear(2030)

Modificar o mês:
date.setMonth(2) -> Mudar para maio.

Modificar o dia:
date.setDate(10)

Formatando uma data e uma hora
let date = new Date("2023-03-23T12:34:09")

date.getDate().toString().padStart(2, "0") -> Coloca um 0 a frente do dia caso tenha apenas 1 digito.

Convertendo uma data para string
date.toString() -> Converte para String.

date.toDateString() -> Exibe somente a data
date.toTimeString() -> Exibe somente a hora.

Exibindo data e hora formatadas de acordo com a localidade
date.toLocaleDateString() -> Data formata no padrão dia/mes/ano
date.toLocaleTimeString() -> Hora formatada no padrão hora:minutos:segundos

Exibir a data e hora no formato escolhido:
Recebe o formato que deseja como parâmetro.
date.toLocaleDateString("pt-BR")
date.toLocaleTimeString("pt-BR")

Outros métodos:
toLocaleString() -> Retorna data e horário de acordo com a localidade.
date.toLocaleString("pt-BR") -> Ex:. Retorno: 13/02/2023 13:02:24

Podemos passar um objeto também:
date.toLocaleString("pt-BR", {
    dateStyle: "short" -> Estilos de exibição

}) 

Retorno: Ex:. 13/02/2021

date.toLocaleString("pt-BR", {
    dateStyle: "long" -> Estilos de exibição

}) 
Retorno: Ex:. 1 de julho de 2024

date.toLocaleString("pt-BR", {
    dateStyle: "long" -> Estilos de exibição

}) 
Retorno: Ex:. 1 de jul. de 2024

date.toLocaleString("pt-BR", {
    dateStyle: "full" -> Estilos de exibição

}) 
Retorno: Ex:. terça-feira, 2 de jul. de 2024

date.toLocaleString("pt-BR", {
    day: "2-digit", -> 2 dígitos
    month: "2-digit",
    hour: "2-digit"
}) 
Retorno: Ex:. 02/07, 14:30

let amount = 12.5

amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
})

Fuso horário
Timestap é conhecida como um carimbo de data/hora.
O Timestamp é um valor que representa um ponto especifico no tempo,
geralmente expresso como uma contagem de segundos ou milissegundos
desde um momento de referência.

Referência
A data do JavaScript é baseada no valor de tempo em milissegundos
desde a meia noite de 01 de janeiro de 1970, UTC.

Fuso horário
Duas maneiras de interpretação: Local ou Tempo Universal Coordenado (UTC).
O fuso horário local não é armazenado no objeto de data,
mas é determinado pelo ambiente que está executando.

Intl é uma API de Internacionalização do ECMAScript
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
Retorno: Informações da localidade.

Podemos utilizar essa API para fazer formatações:
new Intl.DateTimeFormat("pt-BR").format(new Date())

date.getTimezoneOffset() -> Traz a diferença de timezone em minutos
date.getTimezoneOffset() / 60 -> Traz a diferença de timezone em horas.

Criando uma data e hora com fuso horário:
const dateWithTimezone = new Date("2023-03-23T12:34:09:234+03:00")
dateWithTimezone.toLocaleString() -> Apresenta com o fuso horário e formatado.
*************************************************************************************

CLASSES
No JavaScript, as classes são uma forma de criar objetos e definir seu comportamento
por meio de construtores e métodos.
Foi introduzida no ECMAScript 2015 (ES6) para fornecer uma sintaxe mais amigável para
a criação de objetos e herança de protótipos.

Uma classe tem construtores e métodos.
Um construtor é um método especial chamado quando um objeto é instanciado 
a partir da classe.
Métodos são funções associadas a objetos e descrevem o comportamento desses objetos.

Herança
Uma classe pode herdar propriedades e métodos de outra classe, permitindo a reutilização 
de código.

Criando uma classe:

class MyClass {
    Corpo da classe
}

class Person {
    constructor(name){
        console.log("Olá", name)
    }
}

const person = new Person("Barbie")

Criando propriedades dentro das classes:

class Product {
    constructor(name){
        this.name = name;
    }
}

const product = new Product("Teclado")

Adicionando métodos nas classes:
class User{
    constructor(name, email){
        this.name = name
        this.email = email
    }
    
    sendEmail(){
        console.log(`E-mail enviado para ${this.name} para o endereço de e-mail ${this.email}`)
    }
}

const user = new User("Sabrina", "sabrinacarpenter@gmail.com")
user.sendEmail()

O que é método estático?
Método estático pode ser acessado sem a instanciação da classe,
porém não é possível usar as propriedades do constructor, então,
no caso de método estático, o melhor é passar os parâmetros no 
próprio método.

class User{
    static showMessage(){
        console.log(`Olá`)
    }
}

const user = new User()
user.showMessage()

User.showMessage() -> Quando é estático, pode acessar assim.

Como aplicar herança com classes?
class Animal {
    constructor(name){
        this.name = name
    }
    
    makeNoise(){
        console.log("SOM!")
    }
}

class Dog extends Animal {
    Executa e recebe o que está em Animal, mesmo que
    não tenha nada declarado aqui
}

Sobrescrevendo os métodos:
Quando não sobrescrevemos o método, ele pega o método 
referência na classe base.

class Dog extends Animal {
    Executa e recebe o que está em Animal.

    makeNoise(){
        console.log("Woof! Woof!")
    }
}

Herança e cadeia de protótipos

Classes x Prototype
Quando se trata de herança, o JavaScript tem somente um construtor: Objetos.
Cada objeto tem um link interno para um outro objeto chamado prototype.
O objeto prototype também tem um atributo propotype, e assim por diante até
que o valor seja null. O null que, por definição, não tem prototype, e age
como um link final nesta cadeia de protótipos.

const address = {
    city: "São Paulo",
    country: "Brazil"
}

O próprio objeto tem um prototype e quando chega ao null, terminou a cadeia.
Em array também podemos ver esse comportamento.

Como utilizar classes pra lidar com exceções?
let obj = []

try{
    obj.execute() -> Método que não existe
}catch(error){
    Verificar se o erro faz parte da instância TypeError
    if(error instanceof TypeError){
        console.log("Método indisponível")
    }
}

Como utilizar classes para criar erros customizados?

class MyCustomError {
    constructor(message) {
        this.message = "CLASSE DE ERRO CUSTOMIZADO", message
    }
}

try {
    throw new MyCustomError("Erro lançado")
}catch(error){
    if(error instanceof MyCustomError){
        console.log(error.message)
    }
    else{
        console.log("Não foi possível executar")
    }
}

_________________________________________________________________________________________________
*/
