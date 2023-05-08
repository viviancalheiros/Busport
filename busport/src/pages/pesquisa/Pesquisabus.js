import React from "react";
import bus from "./bus.png";
import {AiOutlineSearch} from "react-icons/ai";
import { Link } from "react-router-dom";
import {IoIosArrowDropleftCircle} from "react-icons/io";
import {FiAlertCircle} from "react-icons/fi";
import {FaBus} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import logovamu from "./logovamu.png";
import mapa3 from "./mapa3.png";
import Sidebar from '../sidebar/Sidebar';
import './Pesquisabus.css'


const Pesquisabus = () =>{
    return(
        <div className="bodyp">
            <div className="topopesq">
                <Link to="/home"><div><IoIosArrowDropleftCircle className="voltar" size={40} color="white"/></div></Link>
                <img className="fotobus" src={bus} width="240px"></img>
            </div>
            <div className="sombra">oi</div>
            <div className="barra">
                <div className="barradepesquisa">
                    <input type="text" placeholder="Ex.: Rua A"></input>
                    <AiOutlineSearch className="icone" size={40} color="#05e185"/>
                </div>
            </div>
            <div>
                <img src={mapa3} width="465px" style={{margin:0,padding:0}}></img>
            </div>
            <div className="menuinferior1">
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

export default Pesquisabus;