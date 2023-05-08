import React from "react";
import "./Onibusfav.css";
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import {FaBus} from "react-icons/fa";
import {BsPersonFill} from "react-icons/bs";
import logovamu from "../pesquisa/logovamu.png";
import Sidebar from '../sidebar/Sidebar';

const Onibusfav = () =>{
    return(
        <div className="bodyonibus" >
            <div className="titulobus">
                <div className="bus2">BUS</div><div className="port2">PORT</div>
            </div>
            <span className="favs">Ônibus mais usados</span>
            <div className="onibus">
                <div className="item">
                    <span>033</span>
                    <div className="divbus1"></div>
                    <span>José Tenório/Centro</span>
                    <AiFillStar size={22}/>
                </div>
                <div className="item">
                    <span>602</span>
                    <div className="divbus2"></div>
                    <span>Salvador Lyra/Iguatemi</span>
                    <AiFillStar size={22}/>
                </div>
                <div className="item">
                    <span>700</span>
                    <div className="divbus3"></div>
                    <span>Gruta/Ponta Verde</span>
                    <AiFillStar size={22}/>
                </div>
                <div className="item">
                    <span>069</span>
                    <div className="divbus4"></div>
                    <span>Clima Bom/Centro</span>
                    <AiFillStar size={22}/>
                </div>
            </div>
            <div className="menuinferiorfav">
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

export default Onibusfav;