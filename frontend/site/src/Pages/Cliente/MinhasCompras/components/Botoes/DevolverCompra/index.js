import React from "react";
import {TelaContainer} from "./style.js";

export default function DevolverCompra(){

    const DevolverSim = async () => {

    }
    const DevolverNao = async () => {
        
    }
    
    return(
        <TelaContainer>
             <div className="container" style={{backgroundColor:"white",minWidth:"25%",minHeight:"25%"}}>
                    <div>
                        <span>
                            Deseja Devolver a Compra?
                        </span>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Porque?</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div 
                    style={{
                            width:"80%",
                            justifyContent:"space-around",
                            display:"flex"
                        }}>
                        <button type="button" className="btn btn-light">Voltar</button>
                        <button type="button" className="btn btn-danger">Devolver</button>
                    </div> 
             </div>
        </TelaContainer>
    )
}