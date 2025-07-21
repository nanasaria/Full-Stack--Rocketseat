/*
REACT

React é uma biblioteca JavaScript criada e mantida pelo 
Facebook. Essa biblioteca permite criar interfaces interativas
e dinâmicas, com uma abordagem declarativa.

O React facilita a construção de componentes reutilizáveis 
que refletem mudanças de estado.

Vite 
Vite é uma ferramenta que permite criar projeto React.

Criar projeto com Vite
npm create vite@latest

Estrutura de Pastas e Arquivos
public -> Coloca imagens que serão utilizadas de forma 
pública
assets -> Arquivos que utilizamos dentro do projeto
app.tsx -> É o primeiro arquivo a ser renderizado
main.tsx -> Arquivo principal (de entrada)

Um componente nada mais é do que uma função e no React 
utilizamos componentes. Todo componente precisa começar
com letra maiúscula.

Componentes
Componentes parecem legos por serem peças específicas que
podem ser encaixadas em outras e reaproveitadas.

Um componente é algo que sozinho tem um sentido, ele pode
ser único, ou um conjunto de vários outros componentes.

O desenvolvimento baseado em componentes permite criar
partes/peças diminuindo a complexidade e permitindo que 
cada componente seja focado em apenas uma funcionalidade
ou um conjunto de funcionalidades.

Benefícios da componentização
- Reutilização de Código
- Produtividade
- Isolamento de Contexto
- Legibilidade do código
- Redução da complexidade
- Arquivos menores
- Padronização do projeto

Regra: Um componente não pode devolver vários elementos
de uma vez, ele deve devolver 1 elemento pai e seus filhos.

Passando propriedades para componentes
Ex:
<Button name="Criar" />
O componente Button recebe a propriedade criar.
export function Button({name}: Props){
    return <button>{name}</button>
}

Passando métodos para componentes

Definindo um tipo:
type Props = {
    name: string
    onClick?: () => void
}

componente: 
export function Button({name, onClick}: Props){
    return <button onClick={onClick}>{name}</button>
}

Onde chamamos o componente:
<Button name="criar" onClick={() => alert("Criar")} />

Estendo Propriedades do Botão
Os elementos HTML tem a possibilidade de reaproveitar a
tipagem de tudo que já tem.

type Props = React.ComponentProps<"button"> & {
    name: string
}

Dentro do ComponentProps, mais especificamente dentro do
Generics <""> há todas os elementos HTML. Ou seja, nesse
caso dizemos que queremos as propriedades dentro do elemento
button e as propriedades personalizadas.

O elemento permanece dessa forma:
export function Button({name, onClick}: Props){
    return <button onClick={onClick}>{name}</button>
}

Rest Operator
Para pegar todas as propriedades não declaradas explicitamente,
utilize o rest da seguinte forma:
export function Button({name, ...rest}: Props){
    return <button {...rest}>{name}</button>
}

Observação: Se você esquecer de passar o props.name enquanto
utiliza Typescript, o próprio VSCode vai emitir um aviso de
erro.

CSS com React
Para exemplo:
1. crie um arquivo styles.css e coloque:
.container{
    background-color: blue
}

2. Importe no componente
import "./styles.css"
Ou seja, importa direto o arquivo, não precisa declarar
um nome.

3. class
As classes de elementos no React são declaradas como 
classname porque class é uma palavra reservada do JavaScript.

export function App() {
    <div classname="container"></div>
}

CSS Global
É importante criar um arquivo CSS global, geralmente chamado
de global.css, para padronizar e resetar configurações do
navegador e definir estilos que queremos que sejam aplicados
no projeto todo.

CSS Modules
O CSS Modules é uma forma de escrever estilos CSS no React
de modo modular e com escopo local. Então, ao utilizar
um arquivo .module.css, os nomes das classes ficam isolados
por componente, evitando conflitos de nomes no CSS global.
O interessante é que quando o código é compilado, o Webpack 
ou Vite transforma o nome em algo único.

No caso do CSS Modules, a importação precisa ser nomeada.
Ex:
import styles from "./styles.module.css"

Hooks
Hooks permitem que você use estados e outros recursos do
React sem escrever uma classe. Encapsula funcionalidades e
facilita o reaproveitamento da sua lógica.

useState -> Permite adicionar uma variável de estado no
componente.

useEffect -> Utilizado no ciclo de vida do componente e 
permite trabalhar com efeitos colaterais (side-effects).

Hooks tem um padrão de nome que é camelCase e use no inicio.
Ex: useNomeDoHook

Hook nada mais é do que uma função.
Ex:
function useMessage(){
    function show() {
        console.log("Mensagem do hook personalizado")
    }

    return { show }
}

exemplo de uso do Hook:
export function App(){
    const message = useMessage()

    return (
     <div>
        <Button name="Adicionar" onClick={() => message.show()} />
     </div>
    )
}

Estados e Renderizações

Render
Antes dos componentes serem exibidos, eles devem ser renderizados
pelo React.

Há duas razões para um componente renderizar

1. Quando é a renderização inicial do componente.
Quando a aplicação inicia, a renderização inicial acontece.

2. O estado do componente mudou.
A atualização do estado do componente enfileira automaticamente
uma renderização.

Depois de uma renderização, o React chama os componentes
para descobrir o que exibir na tela. O Rendering é o React
chamando seus componentes. Na renderização inicial, o React
chamará o componente raiz. Para renderização o React chamará
o componente de função cuja atualização de estado acionou a 
renderização.
Esse processo é recursivo. O componente também pode disparar
um gatilho para renderizar algo em seguida, e assim por diante.
O processo continuará até que não haja mais componentes
aninhados e o React saiba exatamente o que deve ser exibido.

Após renderizar seus componentes, o React modifica o DOM.
Para a renderização inicial, o React usa a API DOM para
colocar todos os nós DOM criados na tela.
Para re-renderizações, o React aplica as operações mínimas 
necessárias (calculadas durante a renderização) para fazer
o DOM corresponder à saída de renderização mais recente.

O React só altera os nós DOM se houver uma diferença entre 
as renderizações.

Qualquer atualização de tela em um aplicativo React acontece
em três etapas:
1. Acionar
2. Renderizar
3. Comprometer-se
O React não altera o DOM se o resultado da renderização for
o mesmo da última vez.

useEffect
Utilizado no ciclo de vida do componente quando o componente
é renderizado. E permite trabalhar com side-effects.

useEffect precisa estar dentro de um componente para que 
tenhamos acesso aos estados do componente.

Observação: é possível ter múltiplos useEffect em 
diferentes contextos, permitindo uma gestão mais flexível 
dos efeitos colaterais.

Observação: Tudo que é colocado na pasta public fica automaticamente
disponível, basta colocar /nomeArquivo.extensao.
Ex: /icon.svg

*/
