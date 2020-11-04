import React,{useState} from "react";
import {BotaoContainer} from "./style.js";
import { useHistory, Link } from "react-router-dom";
import CancelarCompraConfirmar from "./CancelarCompraConfirmar";
import DevolverCompra from "./DevolverCompra";

export default function Botoes(){

    const [condicao,setCondicao] = useState("");

    const MudarCancelar = () => {
        setCondicao("Cancelar");
    }

    const MudarDevolucao = () => {
        setCondicao("Devolucao");
    }

    return(
          <BotaoContainer>
              <button type="button" className="btn btn-primary"><Link to="/">Ver Detalhes</Link></button>
              <button type="button" className="btn btn-danger" onClick={MudarCancelar}>Cancelar Compra</button>
              <button type="button" className="btn btn-warning" onClick={MudarDevolucao}>Pedir Devolução</button>

              {condicao === "Cancelar" &&
               <CancelarCompraConfirmar/>
            }
              {condicao === "Devolucao" &&
                <DevolverCompra/>
              }
          </BotaoContainer>
    )
}