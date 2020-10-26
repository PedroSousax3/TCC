import React, { useState } from "react";
import { Link } from "react-router-dom";



import { CaixaEsqueciSenha } from './style';
import Master from "../Master";
import { ToastContainer } from "react-toastify";



export default function EsqueciSenha(){

  

    return(
       <div>
           <Master children={
               <div>
                   <div style={{justifyContent:"center",alignItems:"center",paddingTop:"3%",display:"flex",flexDirection:"column"}}>
                   <div style={{width:"80%",display:"flex",justifyContent:"flex-start",fontSize:"25px",fontWeight:"bold"}}>
                        </div>

                    <CaixaEsqueciSenha>
                        <form>
                                <div className="inputs form-group">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="INFORME SEU EMAIL"/>
                                </div>
                                <div className="inputs form-group">
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="CODIGO"/>
                                </div>

                                <div className="botao">
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