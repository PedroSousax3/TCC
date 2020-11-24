import React, { useState } from "react";
import { Container, CaixaPadrao } from "./style.js";
import { rastrearPedido } from "../../../Service/ApiCorreio.js";
import { ToastContainer, toast } from "react-toastify";
import Master from "../../Master";

export default function AcompanharPedido() {
    const [registros, setRegistros] = useState([]);
    const [valor, setValor] = useState("");
    const [erro,setErro] = useState("");
    
    const acompanharPedido = async () => {
        try {
            let resp = await rastrearPedido(valor);
            if(resp.includes("Cannot GET /rastrear/" || resp.lenght < 1 || valor === ""))
            {
                setErro("Encomenda não encontrada, verifique se o código está correto")
                let zerado = [];
                setRegistros([...zerado]);
               
            }else{

                setRegistros([...resp]);
            } 
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Master>
            <Container>
                <CaixaPadrao>
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ color: "green",marginBottom:"6%" }}>Status do envio</h3>
                    </div>
                    <div className="form-group row" style={{ width: "80%",display:"flex",justifyContent:"center",alignItems:"center"}} >
                        <div className="col-sm-10" style={{ display: "flex", flexDirection: "row", width: "80%" ,display:"flex",justifyContent:"center",alignItems:"center"}}>
                            <input type="text" style={{ width: "50%", marginRight: "5px",marginLeft:"25%" }} className="form-control" id="codigo" placeholder="Digite o codigo" onChange={(e) => setValor(e.target.value)} />
                            <div className="button1">
                                <button className="btn btn-success" onClick={acompanharPedido}>Buscar</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        {registros.length > 0 && registros.map((x) =>
                            x.map((item) =>

                                <div className="card" key={item.status} >
                                    <div className="titulo" style={{ color: "#999" }}>

                                        Status:{item.status}

                                    </div>
                                    <div className="corpo">
                                        <div>
                                            Data: {item.data}
                                        </div>
                                        <div>
                                            Hora:{item.hora}
                                        </div>
                                        <div>
                                            Local:{item.local}
                                        </div>
                                    </div>
                                </div>
                            )
                        )}
                        { registros.length < 1 &&
                           <div>
                               <h5 style={{color:"gray",marginLeft:"5%"}}>
                                  {erro} 
                               </h5>
                               </div>

                        }
                    </div>
                </CaixaPadrao>
            </Container>
            <ToastContainer />
        </Master>
    )
}