# Navegação com React Router

Estudos sobre navegação em aplicações React utilizando React Router, a biblioteca mais utilizada para roteamento no React.

## Instalação

```bash
npm i react-router
```

## Configuração Básica

### 1. Envolver a aplicação com BrowserRouter

```jsx
import { BrowserRouter } from "react-router";

<BrowserRouter>
    <App />
</BrowserRouter>
```

### 2. Criar arquivo de rotas

```jsx
import { Routes, Route } from "react-router";
import { Home } from "../pages/home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
    </Routes>
  );
}
```

### 3. Utilizar as rotas no main

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes/appRoutes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
);
```

## Rota para Páginas Inexistentes

Para capturar rotas que não existem, utilize o asterisco (*) no final das rotas:

```jsx
<Route path="*" element={<NotFound />} />
```

## Parâmetros de Query String

### Passando parâmetros

```jsx
<a href="/products?category=tvs">Categoria</a>
<a href="/products?category=tvs&price=2500">Categoria com Preço</a>
```

### Recuperando parâmetros

```jsx
import { useSearchParams } from "react-router";

const [searchParams] = useSearchParams();
const category = searchParams.get("category");
const price = searchParams.get("price");

// Exibindo condicionalmente
{category && (
  <span>
    Categoria <strong>{category}</strong>
  </span>
)}
```

## useNavigate - Navegação Programática

### Importação e uso básico

```jsx
import { useNavigate } from "react-router";

const navigate = useNavigate();

// Navegação direta
<button type="button" onClick={() => navigate("/products")}>
  Ver Produtos
</button>
```

### Criando funções de navegação

```jsx
function productsOpen() {
    navigate("/products");
}

<button type="button" onClick={productsOpen}>
  Ver Produtos
</button>
```

### Voltar página anterior

```jsx
<button type="button" onClick={() => navigate(-1)}>
  Voltar
</button>
```

## Parâmetros Obrigatórios na URL

### Definindo rota com parâmetro

```jsx
<Route path="/details/:id" element={<Details />} />
```

### Recuperando parâmetros obrigatórios

```jsx
import { useParams } from "react-router";

// Forma completa
const params = useParams();
const id = params.id;

// Desestruturação
const { id } = useParams();
```

## Layout Routes - Layouts Compartilhados

O Outlet é um componente especial usado para renderizar rotas filhas dentro de uma rota pai, funcionando como um "espaço reservado" para rotas aninhadas.

### Criando um Layout

```jsx
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
```

### Configurando rotas aninhadas

```jsx
<Route path="/" element={<Layout />}>
  <Route path="/" index element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/details/:id" element={<Details />} />
</Route>
```

## Conceitos Estudados

- Configuração do React Router com BrowserRouter
- Criação e organização de rotas
- Tratamento de rotas inexistentes
- Parâmetros de query string com useSearchParams
- Navegação programática com useNavigate
- Parâmetros obrigatórios na URL com useParams
- Layouts compartilhados com Outlet
- Rotas aninhadas e hierarquia de componentes
- Manutenção do histórico de navegação