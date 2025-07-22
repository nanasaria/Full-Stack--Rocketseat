import "./styles.css";

import { Outlet } from "react-router";

export function Layout() {
  return (
    <div>
      <header className="user">
        <p>Olá, Usuário</p>
      </header>
      {/* Outlet insere a rota que você estiver navegando aqui dentro */}
      <Outlet />
      <footer>
        <span>Todos os direitos reservados</span>
      </footer>
    </div>
  );
}
