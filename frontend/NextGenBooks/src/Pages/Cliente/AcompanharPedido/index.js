import React,{useState} from "react";
import {Container,CaixaPadrao} from "./style.js";
import {rastrearPedido} from  "../../../Service/ApiCorreio.js";
import Master from "../../Master";

export default function AcompanharPedido(){
    let rast = [];
    let registros ; 
    const [ valor,setValor] = useState("");

    const acompanharPedido = async() =>{
       try{
        rast.push(valor);
        let request= {
          rast:rast
        };
        let resp = await rastrearPedido(request);
        registros = resp;
       }catch(e){
           console.error(e);
       }
    }
    return(
        <Master>
            <Container>
                            <h1 style={{color:"white"}}>Acompanhar Pedido</h1>
                            <div className="form-group row" style={{width:"97%",marginTop:"2%",marginLeft:"14%"}}>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="codigo" placeholder="Digite o codigo"  onChange={(e) => setValor(e.target.value)}/>
                                    <button onClick={acompanharPedido}>Rastrear</button>
                                </div>
                            </div>
                        <CaixaPadrao>
                            {registros}
                        </CaixaPadrao>
            </Container>
            </Master>
    )
}