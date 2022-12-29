import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import './Sidebar.css';
import {AiFillStar, AiFillHome} from "react-icons/ai";
import {ImSearch} from "react-icons/im";
import {BiCreditCard} from "react-icons/bi";
import {BsFillGearFill} from "react-icons/bs";
import {GiTalk} from "react-icons/gi";
import {FiAlertCircle, FiShare} from "react-icons/fi";
import {IoIosHelpCircleOutline} from "react-icons/io";
import {HiOutlineLocationMarker} from "react-icons/hi";
import { Link } from 'react-router-dom';
export default function pages() {
  return (
   <div>
    <Menu>
        <div className="titulo1">
            <div className="bus1">BUS</div><div className="port1">PORT</div>
        </div>
        <div className="divisao"></div>
        <Link to="/home">
            <div>
            <AiFillHome size={22}/>
            <a className="menu-item">Home</a>
            </div>
        </Link>
        <Link to="/pesquisabus">
            <div>
            <HiOutlineLocationMarker size={22}/>
            <a className="menu-item">Traçar rotas</a>
            </div>
        </Link>
        <Link to="/onibusfav">
            <div>
            <AiFillStar size={22}/>
            <a className="menu-item">Ônibus mais usados</a>
            </div>
        </Link>
        <Link to="/pesquisabus2">
            <div>
            <ImSearch size={22}/>
            <a className="menu-item">Buscar linha</a>
            </div>
        </Link>
        <div>
            <a href="https://vamumobilidade.com.br/faca-o-seu-pedido/">
                <BiCreditCard size={22}/>
                <span className="menu-item">Colocar crédito</span>
            </a>
        </div>
        <div>
            <a href="https://web.whatsapp.com/">
                <GiTalk size={22}/>
                <span className="menu-item">Fale conosco</span>
            </a>
        </div>
        <Link to="/configuracoes">
            <div>
            <BsFillGearFill size={22}/>
            <a className="menu-item">Configurações</a>
            </div>
        </Link>
        <div>
            <FiShare size={22}/>
            <a className="menu-item">Compartilhar</a>
        </div>
        <div className="divisao"></div>
        <Link to="/reportar">
            <div>
                <FiAlertCircle size={22}/>
                <span className="menu-item">Denúncia</span>
            </div>
        </Link>
        <div>
            <IoIosHelpCircleOutline size={22}/>
            <span className="menu-item">Ajuda</span>
        </div>
    </Menu>
   </div>
 );
}