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
_________________________________________________________________________________________________
*/
