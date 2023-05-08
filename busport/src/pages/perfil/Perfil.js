import React from "react";
import "./Perfil.css";
import {BsPersonCircle, BsPersonFill} from "react-icons/bs";
import {FiAlertCircle} from "react-icons/fi";
import {FaBus} from "react-icons/fa";
import {IoIosArrowDropleftCircle} from "react-icons/io";
import logovamu from "../pesquisa/logovamu.png";
import Sidebar from '../sidebar/Sidebar';
import {Link} from "react-router-dom";

const Perfil = () =>{
    return(
        <div className="bodyperfil">
            <div className="topoperfil">
                <Link to="/home">
                <IoIosArrowDropleftCircle className="voltarperfil" size={40} color="white"/>
                </Link>
                <Link to="/editar">
                    <button className="editar">Editar</button>
                </Link>
            </div>
            <BsPersonCircle size={140} color="white"/>
            <span className="ola">Olá, Mário</span>
            <div className="dados">
                <span>Nome completo</span>
                <input type="text" placeholder="Mário Andrade Ferreira da Silva"></input><br/>
                <span>CPF</span>
                <input type="number" placeholder="000.000.000-00"></input><br/>
                <span>Data de nascimento</span>
                <input type="date" placeholder="15/08/1987"></input><br/>
                <span>Número da carteirinha</span>
                <input type="number" placeholder="00.00.00000000-0"></input><br/>
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
            </div>
            <div className="menuinferiorperfil">
                <div>
                    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                </div>
                <div>
                    <Link to="/pesquisabus"><FaBus size={40} color="#0ea264"/></Link>
                </div>
                <div>
                    <a href="https://vamumobilidade.com.br/"><img src={logovamu} width="45px" /></a>
                </div>
                <div>
                    <Link to="/perfil"><BsPersonFill size={40} color="#0ea264"/></Link>
                </div>
                <div>
                    <Link to="/reportar"><FiAlertCircle size={40} color="#0ea264"/></Link>
                </div>
            </div>
        </div>
    );
}

export default Perfil;