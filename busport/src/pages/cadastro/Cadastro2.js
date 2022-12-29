import React from "react";
import "./Cadastro.css";
import "../login/Login.css";
import { Link } from "react-router-dom";

function Cadastro2() {
    return (
      <div className="bodyc">
        <div className="titulo">
          <div className="bus">BUS</div><div className="port">PORT</div>
        </div>
        <div className='Cadastro2'>Cadastre-se</div>
        {Nome()}
        {CPF()}
        {dataNasc()}
        {numCartao()}
        {tipoCartao()}
        {Botao()}
      </div>
  );
}
  
function Nome() {
    return (
      <form className="form2">
        <br></br><input type="text" size="30" placeholder="Nome completo"/>
      </form>
  );
}
  
function CPF() {
    return (
      <form className="form2">
        <br></br><input type="text" maxLength="11" placeholder="CPF"/>
      </form>
  );
}
  
function dataNasc() {
    return (
      <form className="form2">
        <br></br><input type="text" placeholder="Data de Nascimento" />
      </form>
  );
}
  
function numCartao() {
    return (
      <form className="form2">
        <br></br><input type="text" placeholder="Número do cartão" />
      </form>   
  );
}

function tipoCartao() {
    return (
      <form className="form2">
        <br></br><input type="text" placeholder="Tipo do cartão" />
      </form>
  );
}

function Botao() {
    return (
      <div className="bodyc">
        <Link to="/home">
          <button className="entrar2" type="submit">Enviar</button>
        </Link>
      </div>
        
  );
}

export default Cadastro2;