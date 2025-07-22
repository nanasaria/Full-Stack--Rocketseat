/*
React Router
Biblioteca mais utilizada para navegação no React

Instalação do React Router
npm i react-router

Para compartilhamos as rotas na aplicação, envolvemos o
App com o <BrowserRouter>. Ex:
<BrowserRouter>
    <App />
</BrowserRouter>

Depois criamos um arquivo de rotas e deixamos da seguinte
forma:
import { Routes, Route } from "react-router";

*importa as páginas
import { Home } from "../pages/home";

* Envolve todas as rotas em <Routes> e cada <Route> se 
  refere a uma rota passando o path que seria o caminho no
  navegador, o index caso seja a página principal para
  deixar explicito e por fim, o element passando a página.

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
}

O último passo é utilizar as rotas de App ao invés do App.
Dessa forma:
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./main.css";
import { AppRoutes } from "./routes/appRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);

Página de Rotas Inexistentes
Colocamos da seguinte forma:
  <Route path="*" element={<NotFound />} />
O * indica que é qualquer rota.
É importante colocar no fim de todas as rotas.

Como Passar Parâmetros em rotas
Passamos da seguinte forma:
/rota?parametro
<a href="/products?category=tvs">Categoria</a>
Para recuperar a informação:
Importamos:
import { useSearchParams } from "react-router";

Depois:
const [searchParams] = useSearchParams();
const category = searchParams.get("category");

Recuperando:
{category && (
  <span>
    Categoria <strong>{category}</strong>
  </span>
)}

Nesse caso dizemos que caso exista o parâmetro categoria,
para mostrar ele.
Se precisarmos passar mais parâmetros utilizamos o &parametro.
Da seguinte forma:
<a href="/products?category=tvs&price=2500">Categoria</a>

Para recuperar:
const price = searchParams.get("price");

useNavigate
o useNavigate permite navegar por métodos e links imperativos.

Para utilizar precisamos importar:
import { useNavigate } from "react-router";

E colocar em uma constante para utilizar, de fato:
const navigate = useNavigate();

Para utilizar:
<button type="button" onClick={() => navigate("/products")}>
  Ver Produtos
</button>

Podemos criar funções também:
function productsOpen() {
    navigate("/products");
}

E chamar da seguinte forma:
<button type="button" onClick={productsOpen}>
  Ver Produtos
</button>

Observação: Quando a função não recebe parâmetros, não 
precisamos passar um arrow function no onClick.

Rota com Parâmetros Obrigatórios
<Route path="/details/:id" element={<Details />} />

Recuperar os Parâmetros Obrigatórios
Primeiramente, importamos o useParams:
import { useParams } from "react-router";

Depois passamos para uma constante que recebe o useParams:
const params = useParams();
Ou desestruturando:
const {id} = useParams();

Voltar utilizando o useNavigate:
Ao utilizar o useNavigate para voltar 1 página, nós mantemos
o histórico de navegação do usuário.
Para isso, passamos como argumento o -1, dessa forma:
<button type="button" onClick={() => navigate(-1)}>
  Voltar
</button>

Layout Routes
Essa é uma abordagem de layouts compartilhados entre rotas
usando o React Router.
No react-router, o Outlet é um componente especial usado 
para renderizar rotas filhas dentro de uma rota pai. Ele 
serve como um "espaço reservado" para onde as rotas 
aninhadas devem ser exibidas.
Outlet é usado dentro de componentes de layout que representam 
rotas pai.
Ele renderiza automaticamente o conteúdo da rota filha 
correspondente ao caminho atual.
Muito útil para layouts compartilhados entre várias páginas.

Basicamente, é como se disséssemos que tais rotas pertencem
a uma rota. Como filhas.

Ex:
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div>
      <header>
        <p>Olá, Usuário</p>
      </header>
      <Outlet />
      <footer>
        <span>Todos os direitos reservados</span>
      </footer>
    </div>
  );
}

Todos as rotas que pertencerem ao grupo de Layout, terão
a header com o Olá, usuário e footer aparecendo. E para
dizer que as rotas pertencem a um grupo, declaramos da 
seguinte forma:
<Route path="/" element={<Layout />}>
  <Route path="/" index element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/details/:id" element={<Details />} />
</Route>

*/
