import './Login.css';
import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
  return(
    <div className="body">
      <div className="titulo">
        <div className="bus">BUS</div><div className="port">PORT</div>
      </div>
      <div className="login">Login</div>
      {Email()}
      {Senha()}
      <div className='botoes'>  
        <Link to="/senha">
          <span className='esqueceu'>Esqueceu sua senha?</span>
        </Link>
        {Entrar()}
        <Link to="/cadastro">
          <span className='cadastrar'>Cadastre-se</span>
        </Link>
      </div>
    </div>
  );
}

function Email() {
  return (
    <div className="formlogin">
      <input type="text" size="30" placeholder="E-mail"></input>
    </div>
  );
}

function Senha(){
  return (
    <div className="formlogin">
      <input type="password" size="30" placeholder="Senha"></input>
    </div>
  );
}

function Entrar(){
  return (
      <Link to="/home">
        <button className="entrar" type="submit">Entrar</button>
      </Link>
  );
}

export default Login;