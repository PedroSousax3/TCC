import React, { useState } from "react";
import { Link } from "react-router-dom";
import Master from "../../Master";
import { toast, ToastContainer } from "react-toastify";
import Botoes from "../MinhasCompras/components/Botoes/Botoes.js"
import {ContainerMinhasCompras} from "./style.js";
import {Pesquisa} from "./style.js";
import nextgenBooks from "../../../Service/NextGenBookApi";

let api = new nextgenBooks();
export default function MinhasCompras(){
    const [registros,setRegistros] = useState([]);
    const [valor,setValor] = useState();
    
    const listarAndamento = async () =>{
        try{

            let resp = await api.listarComprasndamento(1);
            setRegistros([...resp]);
        }catch(e) {
            toast.error(e.response.data.erro);
        }
    }
    const listarFinalizadas = async () =>{
        try{
        let resp = await api.listarComprasfinalizadas(1);
        setRegistros([...resp]);
    }catch(e) {
        toast.error(e.response.data.erro);
    }
    }

    const listarPendentes = async () =>{
        try{
        let resp = await api.listarComprasPendentes(1);
        setRegistros([...resp]);
    }catch(e) {
        toast.error(e.response.data.erro);
    }
    }

    return(
       <div>
           <Master>
               <ContainerMinhasCompras>
                    <div className="titulo">
                        <label style={{fontSize:"20px",fontWeight:"bolder"}}>
                            Minhas Compras
                        </label>
                    {registros.map(x =>
                    <div className="card">
                        <div className="card-header" Key={1}>
                        </div>
                        <div className="container" Key={1}>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                              <img src="" alt="..." className="d-block w-20" />
                            </div>
                            {x.vendaLivro.map (y=>
                            <div className="carousel-item">
                              <img src="" alt="..." className="d-block w-20" />
                            </div>
                            )}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                        </div>
                                        </div>
                            <div className="card-body" Key={1}>
                              <h6 className="card-title">Quantidade de Produtos:{x.vendaLivro.length}</h6>
                                <p className="card-text">Status:{x.status.nome}</p>
                            </div>
                            <Botoes
                               IdVendaLivro = {x.vendaLivro.id}
                               IdVendaStatus = {x.status.id}
                            />
                        </div>
                    )}
                    </div>
                </ContainerMinhasCompras>  
              <Pesquisa>
                <div className="container">
                    <div className="form-group">
                    <button id="btcompra" type="button" className="btn btn-success" onClick={listarPendentes} style={{width:"200px"}}>Pendentes</button>
                    </div>
                    <div className="form-group">
                    <button id="btcompra" type="button" className="btn btn-success" onClick={listarAndamento} style={{width:"200px"}}>Em Andamento</button>
                    </div>
                    <div className="form-group">
                    <button id="btcompra" type="button" className="btn btn-success" onClick={listarFinalizadas} style={{width:"200px"}}>Finalizadas</button>
                    </div>
                </div>
            </Pesquisa>  
            <ToastContainer />
           </Master>
       </div>
    );
}                    


/*</div><div className="botoes">
                    <div className="btn-group" role="group" aria-label="Exemplo básico">
                        <button type="button" className="btn btn-secondary" onClick={listarPendentes}>Pendentes</button>
                        <button type="button" className="btn btn-secondary"onClick={listarAndamento}>Em Andamento</button>
                        <button type="button" className="btn btn-secondary"onClick={listarFinalizadas}>Finalizadas</button>
                    </div>
                    </div>
                    <CaixaMinhasCompras>
                         <div style={{width:"100%",textDecoration:"none"}}>
                         {registros.map(x => 
                                <li style={{width:"100%"}} key= {x.id}><CompraContainer>

                                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                           

                                        {x.vendaLivro.map(y => <div className="carousel-item" key={y.id}>
                                            <div className="card" style={{display:"flex"}}>
                                            
                                            <div className="card-header" >{y.livroInfo.nome}</div>
                                            <div>
                                            <img src="..." alt="..." className="img-thumbnail" 
                                                    style={{maxWidth:"50%",minWidth:"45%"}} 
                                                    >
                                                    </img>
                                            <div className="card-body">
                                                <h5 className="card-title">{y.livroInfo.idioma}</h5>
                                                <p className="card-text">{y.livroInfo.paginas}</p>
                                                <p className="card-text">{y.livroInfo.compra}</p>
                                            </div>
                                            </div>
                                          </div>
                                         </div>
                                            )}
                                        
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        </div>

                                        <Botoes
                                        IdVendaLivro = {x.vendaLivro.id}
                                        IdVendaStatus = {x.status.id}
                                        />
                                </CompraContainer></li>
                                    )}
                          </div>
                    </CaixaMinhasCompras>*/
               