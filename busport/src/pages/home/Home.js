import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import {VscAccount} from "react-icons/vsc";
import {MdOutlineQrCode2} from "react-icons/md";
import {CiCirclePlus} from "react-icons/ci";
import {FiAlertCircle} from "react-icons/fi";
import {FaBus} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import logovamu from "../pesquisa/logovamu.png";
import Sidebar from '../sidebar/Sidebar';

const Home = () =>{
    return(
      <>
      <div className="bodyhome">
        <div className="topo">
            <div>Olá,</div>
            <div className="juntar">
            <div>Mário!</div><div className="iconepessoa"><VscAccount size={50}/></div>
        </div>
        <div className="topomenor">
            <div>BUSPORT</div>
            <div>TRANSPORTE PARA TODOS</div>
        </div>
        <div className="toposobreposto">
          <MdOutlineQrCode2 size={50}/>
        <div className="valor">
            <span className="saldo">SALDO</span><br></br>
            <span>R$ 40,65</span>
        </div>
        <div className="adicionar">
          <span>ADICIONAR</span>
          <div><CiCirclePlus className="circulomais" size={35}/></div>
        </div>
        </div>
        </div>
        <div className="opcoes">
          <div className="recarga">
            <span>RECARGA RÁPIDA</span><br/>
            <span className="saldo2">R$ 20,00</span>
          </div>
          <div className="domgratis">
            <span className="saldo2">DOMINGOS GRÁTIS</span><br/>
            <span className="domingo">APROVEITE SEUS DOMINGOS ECONOMIZANDO</span>
          </div>
        </div>
        <div className="menuinferiorhome">
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
      </>
    );
}

export default Home;