import React, { useState } from "react";
import { Link } from "react-router-dom";


import 'react-toastify/dist/ReactToastify.css';
import { CaixaEsqueciSenha } from '../style';
import Master from "../../Master/index";
import { ToastContainer } from "react-toastify";



export default function TrocarSenha(){

    const [senha, setSenha] = useState("");

    function mostrar() {	
        var tipo = document.getElementById("formGroupExampleInput2");	

        if (tipo.type == "password") {	
          tipo.type = "text";	
        } else {	
          tipo.type = "password";	
        }	

            tipo.type = tipo.type; 	


        var botao = document.querySelector(".btn.btn-sm"); 	

        if (botao.classList.contains("fa-eye")) { 	
          botao.classList.remove("fa-eye"); 	
          botao.classList.add("fa-eye-slash"); 	
        } else { 	
          botao.classList.remove("fa-eye-slash"); 	
          botao.classList.add("fa-eye"); 	
        }	

      }

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
                                 <input type="password" className="form-control" id="formGroupExampleInput" placeholder="SENHA NOVA"/>
                                 <i className="icone btn btn-sm fas fa-eye" style={{marginTop:"3%"}}
                                                                        onClick={mostrar}
                                 ></i>
                                 </div>
                                 <div className="inputs form-group">
                                 <input type="password" className="form-control" id="formGroupExampleInput" placeholder="CONFIRMAR SENHA NOVA"/>
                                 </div>
 
                                 <div className="botao">
                                     <button type="button" class="btn btn-success">
                                        Trocar senha
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