import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import emailjs from 'emailjs-com';



import { CaixaEsqueciSenha } from './style';
import Master from "../../Master";
import { ToastContainer, toast } from "react-toastify";
import nextGenBookAPI from '../../../Service/NextGenBookApi'

const api = new nextGenBookAPI();

export default function EsqueciSenha(props){
  const navegacao = useHistory();
  const [email, setEmail] = useState("");
  const [destinario, setDestinario] = useState("");
  const [titulo, setTitulo] = useState("");
  const [corpo, setCorpo] = useState("");
  const [codigo, setCodigo] = useState("");



    const verificarEmail = async() => {
    var tipo = document.getElementById("email");	

    try{
        let request = {
            email: email,
            destinario: destinario,
            titulo: titulo,
            dorpo: corpo
        }
        const response = await api.enviarEmail(request);
        if(tipo.type === "email"){
            
        }
        
    }catch(e){
        console.log("ero")
    }
  }
    
  const validarCodigo = async() =>{
    try{
        let request = {
            codigo: codigo
        }
        const response = await api.confirmarCodigo(request);
        navegacao.push("/EsqueciSenha/TrocarSenha");
    }catch(e){
        toast.dark("Codigo Invalido")
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
                        
                                <div className="inputs form-group" style={{flexDirection:"row", display:"flex"}}>
                                <input type="email" className="form-control" id="email" placeholder="INFORME SEU E-MAIL"
                                onChange = {(e) => setEmail(e.target.value)}  />
                                <button type="button" class="btn btn-light" 
                                    onClick={verificarEmail}
                                >Enviar Código</button>
                                </div>
                                <div className="inputs form-group">
                                <input type="text" className="form-control" id="codigo" placeholder="CÓDIGO"
                                onChange = {(e) => setCodigo(e.target.value)}/>
                                </div>

                                <div className="botao" style={{alignItems:"center", display:"flex", justifyContent:"center"}}>
                                    <button type="button" class="btn btn-success" onClick={validarCodigo}>
                                    Prosseguir
                                    </button>
                                </div>
                        
                    </CaixaEsqueciSenha>
                    <ToastContainer />
                        
                   </div>
               </div>
           
           
           }/>
        </div>
    );
}