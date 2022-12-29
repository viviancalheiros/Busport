import React from 'react';
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Login from "./pages/login/Login";
import Senha from "./pages/senha/Senha";
import Senha2 from "./pages/senha/Senha2";
import Cadastro from "./pages/cadastro/Cadastro";
import Cadastro2 from "./pages/cadastro/Cadastro2";
import Home from "./pages/home/Home";
import Reportar from "./pages/reportar/Reportar";
import Reportar2 from "./pages/reportar/Reportar2";
import Pesquisabus from "./pages/pesquisa/Pesquisabus";
import Pesquisabus2 from "./pages/pesquisa/Pesquisabus2";
import Perfil from "./pages/perfil/Perfil";
import Editar from "./pages/perfil/Editar";
import Onibusfav from './pages/onibusfav/Onibusfav';
import Configuracoes from './pages/configuracoes/Configuracoes';

function Rotas(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Senha />} path="senha" />
          <Route element={<Senha2 />} path="senha2" />
          <Route element={<Cadastro />} path="cadastro" />
          <Route element={<Cadastro2 />} path="cadastro2" />
          <Route element={<Home />} path="home" />
          <Route element={<Reportar/>} path="/reportar" />
          <Route element={<Reportar2 />} path="/reportar2" />
          <Route element={<Pesquisabus />} path="pesquisabus" />
          <Route element={<Pesquisabus2 />} path="pesquisabus2" />
          <Route element={<Perfil />} path="perfil" />
          <Route element={<Editar />} path="editar" />
          <Route element={<Onibusfav />} path="onibusfav" />
          <Route element={<Configuracoes/>} path="configuracoes" />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Rotas />);