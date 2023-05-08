import React from "react";
import "./Editar.css";
import "../login/Login.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from "react-router-dom";

function atualizado(){
    alert("Dados atualizados!")
}

const Editar =() =>{
    return(
    <div className="bodyeditar">
        <Link to="/perfil">
        <IoIosArrowDropleftCircle className="setaeditar" size={35} color="#05e185"/>
        </Link>
        <div className="titulo">
            <div className="bus">BUS</div><div className="port">PORT</div>
        </div>
        <div className="infoeditar">
            <span>Nome</span>
            <input type="text"></input>
            <span>CPF</span>
            <input type="number"></input>
            <span>Data de nascimento</span>
            <input type="date"></input>
            <span>Número da carteirinha</span>
            <input type="number"></input>
            <span>Tipo da carteirinha</span>
            <select>
                <option></option>
                    <option>Cidadão</option>
                    <option>Escolar</option>
                    <option>Vale-Transporte</option>
                    <option>Sênior</option>
                    <option>Especial</option>
                    <option>Especial com Acompanhante</option>
                    <option>Empresarial</option>
                    <option>Correios</option>
                    <option>Órgão Gestor</option>
                    <option>Rodoviário</option>
            </select>
            <span>Confirme a senha</span>
            <input type="password"></input>
        </div>
        <Link to="/perfil">
            <button onClick={atualizado} className="atualizar">Atualizar</button>
        </Link>
    </div>
    )
}

export default Editar;