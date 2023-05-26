import React from "react";
import "./Cadastro.css";
import "../login/Login.css";
import { Link } from "react-router-dom";

export function Cadastrado(){
  alert("Cadastro realizado com sucesso!")
}

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
  
export function Nome() {
    return (
      <form className="form2">
        <br></br>
        <input id="nome" type="text" size="30" placeholder="Nome completo"/>
      </form>
  );
}
  
export function CPF() {
    return (
      <form className="form2">
        <br></br><input id="cpf" type="text" maxLength="11" placeholder="CPF"/>
      </form>
  );
}
  
export function dataNasc() {
    return (
      <form className="form2">
        <br></br><input id="datanasc" type="text" placeholder="Data de Nascimento" />
      </form>
  );
}
  
export function numCartao() {
    return (
      <form className="form2">
        <br></br><input id="numcartao" type="text" placeholder="Número do cartão" />
      </form>   
  );
}

export function tipoCartao() {
    return (
      <form className="form2">
        <br></br><input id="tipocartao" type="text" placeholder="Tipo do cartão" />
      </form>
  );
}

export function Botao() {
    return (
      <div className="bodyc">
        <Link to="/home">
          <button onClick={Cadastrado} className="entrar2" type="submit">Enviar</button>
        </Link>
      </div>
        
  );
}

export default Cadastro2;