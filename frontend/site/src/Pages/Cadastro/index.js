import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './style.css'

export default function Cadastro(props){

    const [infos, setInfos] = useState(props.location.state);

    return(
        <div>
            <form>
                <div>
                    <div className="menu-topo"> <img src="Logo.jpeg" className="Logo"/> </div>
                        
                        <div className="Meio">
                                <div className="titulo-cadastro"> <h3 className="titulo">Tela de Cadastro de Informações</h3></div>
                            <div className="meio-cadastro">
                                <div className="espaco"> </div>
                                <div className="informacoes1">teste</div>
                                <div className="informacoes2">teste2</div>
                                <div className="informacoes3">teste3</div>
                            </div>
                        </div>

                    <div className="menu-final">final</div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}