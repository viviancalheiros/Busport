import React from "react";
import "./Configuracoes.css";
import {IoIosArrowDropleftCircle} from "react-icons/io";
import {Link} from "react-router-dom";

const Configuracoes = () =>{
    return(
        <div className="bodyconfig">
            <div className="topoconfig">
                <Link to="/home"><IoIosArrowDropleftCircle color="white" size={40}/></Link>
                <span>Configurações</span>
            </div>
            <div className="configs">
                <span className="margem">Geral</span>
                <div className="divisoria2"></div>
                <div className="permissao">
                    <div>
                        <span>Acessibilidade</span><br/>
                        <span className="letrasp">Mostrar apenas veículos adaptados.</span>
                    </div>
                    <input type="checkbox"></input>
                </div>
                <div className="divisoria2"></div>
                <span className="margem">Notificação</span>
                <div className="divisoria2"></div>
                <div className="permissao">
                    <div>
                        <span>Alerta de proximidade</span><br/>
                        <span className="letrasp">Notificar quando o ônibus estiver perto.</span>
                    </div>
                    <input type="checkbox"></input>
                </div>
                <div className="divisoria2"></div>
                <div className="permissao">
                    <div>
                        <span>Alerta mudança de rota</span><br/>
                        <span className="letrasp">Alertar quando tiver mudança de rota.</span>
                    </div>
                    <input type="checkbox"></input>
                </div>
                <div className="divisoria2"></div>
                <div className="avaliar">
                    <span>Avalie-nos!</span>
                    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"/>
                    <div className="estrelas">
                        <input type="radio" id="cm_star-empty" name="fb" value="" checked/>
                        <label for="cm_star-1"><i class="fa"></i></label>
                        <input type="radio" id="cm_star-1" name="fb" value="1"/>
                        <label for="cm_star-2"><i class="fa"></i></label>
                        <input type="radio" id="cm_star-2" name="fb" value="2"/>
                        <label for="cm_star-3"><i class="fa"></i></label>
                        <input type="radio" id="cm_star-3" name="fb" value="3"/>
                        <label for="cm_star-4"><i class="fa"></i></label>
                        <input type="radio" id="cm_star-4" name="fb" value="4"/>
                        <label for="cm_star-5"><i class="fa"></i></label>
                        <input type="radio" id="cm_star-5" name="fb" value="5"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Configuracoes;