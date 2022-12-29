import './Reportar.css';
import React from 'react';
import { Link } from "react-router-dom";
import {FiAlertCircle} from "react-icons/fi";
import {FaBus} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import {IoIosArrowDropleftCircle} from "react-icons/io";
import logovamu from "../pesquisa/logovamu.png";
import Sidebar from "../sidebar/Sidebar.js";

const Reportar = () => {
    return(
      <div className="bodyreportar">
        <div className="alerta">
          <Link to="/home">
            <div className="voltar2" >
            <IoIosArrowDropleftCircle size={40} color="white"/>
            </div>
          </Link>
          <FiAlertCircle color="red" size={70}/>
        </div>
        <span className="reportar"><i>REPORTAR!</i></span>
        <Link to="/reportar2"><button className="queixa">Acidente</button></Link>
        <Link to="/reportar2"><button className="queixa">Trânsito</button></Link>
        <Link to="/reportar2"><button className="queixa">Ônibus quebrado</button></Link>
        <Link to="/reportar2"><button className="queixa">Assalto</button></Link>
        <div className="menuinferior">
          <div>
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
          </div>
          <div>
            <Link to="/pesquisabus"><FaBus size={40} color="#0ea264"/></Link>
          </div>
          <div><img src={logovamu} width="45px" /></div>
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



export default Reportar;