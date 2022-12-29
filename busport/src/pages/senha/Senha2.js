import React from 'react';
import './Senha.css';
import { Link } from 'react-router-dom';

const Senha2 = () => {
  return (
  <div className="bodys2">
    <div className="titulo">
      <div className="bus">BUS</div><div className="port">PORT</div>
    </div>
    <div className="recsenha2">Recuperar senha</div>
    <div className="codigo">
      <span>Enviamos um código de verificação com seis dígitos para o seu e-mail cadastrado</span>
    </div>
    <div className="formsenha2">
      <input type="text" size="30" maxLength="6" placeholder="Digite aqui"></input>
    </div>
    <Link to="/home">
      <button type='submit' className='entrar2'>Enviar</button>
    </Link>
    
  </div>
  );
}

export default Senha2;