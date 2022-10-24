import './pag1.css';
import React from 'react';

export default function pag1() {
  return (
  <div className="body">
    <div className="titulo">
      <div className="bus">BUS</div><div className="port">PORT</div>
    </div>
    <div className="login">Login</div>
    <div className="form">
        <input type="text" size="30" placeholder="E-mail"></input>
        <input type="password" size="30" placeholder="Senha"></input>
    </div>
    <div className='botoes'>  
      <span className='esqueceu'>
        Esqueceu sua senha?
      </span>
      <button className='entrar'>Entrar</button>
      <span className='cadastrar'>
        Cadastrar-se
      </span>
    </div>
  </div>
  );
}