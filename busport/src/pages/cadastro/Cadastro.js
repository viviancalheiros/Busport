import React from "react";
import "./Cadastro.css";
import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div className="bodyc">
      <div className="titulo">
        <div className="bus">BUS</div><div className="port">PORT</div>
      </div>
      <div className='Cadastro'>Cadastre-se</div>
      {Emailcad()}
      {Senhacad()}
      {SenhaConfirmacad()}
      {SubmitEntrar()}
    </div>
  );
}

function Emailcad() {
  return (
    <form className="form1">
      <br></br><input type="text" placeholder="E-mail"/>
    </form>
  )
}

function Senhacad() {
  return (
    <form className="form1">
      <br></br><input type="password" placeholder="Senha"/>
    </form>
  )
}

function SenhaConfirmacad() {
  return (
    <form className="form1">
      <br></br><input type="password" placeholder="Confirmar senha" />
    </form>
  )
}

function SubmitEntrar() {
  return (
    <div className="bodyc">
      <Link to="/cadastro2">
        <button className="entrar1" type="submit">Próximo</button>
      </Link>
    </div>
  )
}

export default Cadastro;