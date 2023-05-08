import React from "react";
import "./Reportar.css";
import {FiAlertCircle} from "react-icons/fi";
import {FaCamera, FaBus} from "react-icons/fa";
import { Link } from "react-router-dom";
import {BsPersonFill} from "react-icons/bs";
import {IoIosArrowDropleftCircle} from "react-icons/io";
import logovamu from "../pesquisa/logovamu.png";
import Sidebar from "../sidebar/Sidebar.js";

function enviar(){
    alert("Enviado com sucesso!")
}

const Reportar2 = () =>{
    return(
        <div className="bodyreportar">
            <div className="alerta">
                <Link to="/reportar">
                    <div className="voltar2" >
                    <IoIosArrowDropleftCircle size={40} color="white"/>
                    </div>
                </Link>
                <FiAlertCircle color="red" size={70}/>
            </div>
            <span className="reportar2"><i>REPORTAR!</i></span>
            <div className="informacoes">
                <span>Linha do ônibus*</span>
                <input type="number" mrequired></input>
                <br/>
                <span>Hora*</span>
                <input type="time" required></input>
                <br/>
                <span>Foto</span>
                <label className="foto" for="foto"><FaCamera size={40}/></label>
                <input id="foto" type="file"></input>
            </div>
            <br/><br/>
            <Link to="/home">
                <button onClick={enviar} className="enviar2">ENVIAR</button>
            </Link>
            <div className="menuinferiorr2">
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

export default Reportar2;