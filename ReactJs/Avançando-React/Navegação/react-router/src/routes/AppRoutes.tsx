import { Routes, Route } from "react-router";

import { Layout } from "../components/Layout";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
