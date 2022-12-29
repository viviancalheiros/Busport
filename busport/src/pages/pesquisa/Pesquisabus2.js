import React from "react";
import mapa2 from "./mapa2.png";
import {Link} from "react-router-dom"
import {AiOutlineSearch} from "react-icons/ai";
import {FiAlertCircle} from "react-icons/fi";
import {FaBus} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import logovamu from "./logovamu.png";
import Sidebar from '../sidebar/Sidebar'

const Pesquisabus2 = () =>{
    return(
        <div className="bodyp2">
            <img src={mapa2} height="100%" width="455px"/>
            <div className="barradepesquisa2">
                <input type="text" className="pesq2" placeholder="Ex.: 606"></input>
                <AiOutlineSearch size={30} color="white"/>
            </div>
            <div className="menuinferior2">
                <div><Sidebar/></div>
                <div>
                    <Link to="/pesquisabus"><FaBus size={40} color="#0ea264"/></Link>
                </div>
                <div><img src={logovamu} width="45px" /></div>
                <div><BsPersonFill size={40} color="#0ea264"/></div>
                <div>
                    <Link to="/reportar"><FiAlertCircle size={40} color="#0ea264"/></Link>
                </div>
            </div>
        </div>
    );
}

export default Pesquisabus2;