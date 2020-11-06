import React, { useState } from "react";
import { Link } from "react-router-dom";
import Master from "../../Master";
import {ContainerMinhasCompras} from "./style.js";
import {CaixaMinhasCompras} from "./style.js";
import Pendentes from "./components/Renderizar/Pendentes/index";
import Finalizadas from "./components/Renderizar/Finalizadas/index";
import EmAndamento from "./components/Renderizar/EmAndamento/index" 

export default function MinhasCompras(){
    const [condicao,setCondicao] = useState("Pendente")

    const Pendente = () =>{
        setCondicao("Pendente");
    }
    const Finalizada = () =>{
        setCondicao("Finalizada");
    }
    const EmAndamento = () =>{
        setCondicao("Andamento");
    }

    return(
       <div>
           <Master>
               <ContainerMinhasCompras>
                    <div className="titulo">
                        <label>
                            Minhas Compras
                        </label>
                    </div>
                    <div className="botoes">
                    <div className="btn-group" role="group" aria-label="Exemplo básico">
                        <button type="button" className="btn btn-secondary" onClick={Pendente}>Pendentes</button>
                        <button type="button" className="btn btn-secondary"onClick={EmAndamento}>Em Andamento</button>
                        <button type="button" className="btn btn-secondary"onClick={Finalizada}>Finalizadas</button>
                    </div>
                    </div>
                    <CaixaMinhasCompras>
                         <div style={{width:"100%"}}>
                         {condicao === "Pendente" &&
                          <Pendentes/>
                         }
                            {condicao === "Finalizada" &&
                          <Finalizadas/>
                         }
                          {condicao === "Andamento" &&
                          <EmAndamento/>
                         }
                          </div>
                    </CaixaMinhasCompras>
               </ContainerMinhasCompras>
           </Master>
       </div>
    );
}                    