import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";
import Empresas from "./pages/Empresas.jsx";
import Mantenimiento from "./pages/Mantenimiento.jsx";
import Podas from "./pages/Podas.jsx";
import Limpieza from "./pages/Limpieza.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nosotros",
    element: <History />,
  },
  {
    path: "/empresas",
    element: <Empresas />,
  },
  {
    path: "/mantenimiento",
    element: <Mantenimiento />,
  },
  {
    path: "/podas",
    element: <Podas />,
  },
  {
    path: "/limpieza",
    element: <Limpieza />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
