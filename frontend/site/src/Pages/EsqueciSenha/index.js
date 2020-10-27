import React, { useState } from "react";
import { Link } from "react-router-dom";



import { CaixaEsqueciSenha } from './style';
import Master from "../Master";
import { ToastContainer, toast } from "react-toastify";
import nextGenBookAPI from '../../Service/NextGenBookApi'

const api = new nextGenBookAPI();

export default function EsqueciSenha(props){

  const [email, setEmail] = useState();
  const [codigo, setCodigo] = useState();

    return(
       <div>
           <Master children={
               <div>
                   <div style={{justifyContent:"center",alignItems:"center",paddingTop:"3%",display:"flex",flexDirection:"column"}}>
                   <div style={{width:"80%",display:"flex",justifyContent:"flex-start",fontSize:"25px",fontWeight:"bold"}}>
                        </div>

                    <CaixaEsqueciSenha>
                        <form>
                                <div className="inputs form-group" style={{flexDirection:"row", display:"flex"}}>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="INFORME SEU E-MAIL"
                                onChange = {(e) => setEmail(e.target.value)}/>
                                <button type="button" class="btn btn-light">Enviar Código</button>
                                </div>
                                <div className="inputs form-group">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="CóDIGO"
                                onChange = {(e) => setCodigo(e.target.value)}/>
                                </div>

                                <div className="botao" style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                                    <button type="button" class="btn btn-success">
                                    Prosseguir
                                    </button>
                                </div>
                        </form>
                    </CaixaEsqueciSenha>
                    <ToastContainer />
                        
                   </div>
               </div>
           
           
           }/>
        </div>
    );
}