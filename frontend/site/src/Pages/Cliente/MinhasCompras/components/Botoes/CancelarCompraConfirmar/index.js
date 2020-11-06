import React from "react";
import {TelaContainer} from "./style.js";
import { useHistory, Link } from "react-router-dom";


export default function CancelarCompraConfirmar(props){
    const CancelarSim = async () =>{

    }
    const CancelarNao = () =>{
        
    }
    return(
        <TelaContainer>
        <div className="container" style={{backgroundColor:"white",minWidth:"25%",minHeight:"25%"}}>
                    <span>Cancelar Compra</span>
                    <p>Tem certeza que quer Cancelar a Compra?</p>
                    <div 
                    style={{
                            width:"80%",
                            justifyContent:"space-around",
                            display:"flex"
                        }}>
                        <button type="button" className="btn btn-light">Sim</button>
                        <button type="button" className="btn btn-danger">Não</button>
                    </div>
        </div>
        </TelaContainer>
    )
}