import React from "react";
import "./Senha.css";
import "../login/Login.css";
import { Link } from "react-router-dom";

const Senha = () => {
  return (
  <div className="bodys">
    <div className="titulo">
      <div className="bus">BUS</div><div className="port">PORT</div>
    </div>
    <div className="recsenha">Recuperar senha</div>
    <div className="formsenha">
      <input type="text" size="30" placeholder="Número do cartão"></input>
    </div>
    <Link to="/senha2">
      <button type='submit' className='entrar'>Enviar</button>
    </Link>
  </div>
  );
}

export default Senha;