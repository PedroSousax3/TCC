import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import nextGenBookAPI from "../../../Service/NextGenBookApi";

import Master from "../../Master";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoginCaixaFuncionario } from "./CadastrarLoginFuncionario/style";



const api = new nextGenBookAPI();
export default function CadastrarLogin()
{
    
    
    const [Nome, setNome ] = useState("");
    const [ Email, setEmail ] = useState("");
    const [ NomeDeUsuario, setNomeDeUsuario ] = useState("");
    const [ Senha, setSenha ] = useState("");

    const navegacao = useHistory();


    const Login = async () => {
        try{
            const request = {
              Nome,
              Email,
              NomeDeUsuario,
              Senha
            }
            console.log(request);
            const a = await  api.cadastrarLoginFuncionario(request);
            navegacao.push("/Funcionario/cadastro",a.data);
            console.log(a);

        }catch(e){
            toast.error(e.response.data.erro);
        }
    }
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
  
                        <div style={{justifyContent:"center",alignItems:"center",paddingTop:"5%",display:"flex",flexDirection:"column"}}>
                            <div style={{width:"58%",display:"flex",justifyContent:"flex-start",fontSize:"1.4rem",fontWeight:"bolder"}}>
                            </div>
                            <LoginCaixaFuncionario>
                                <span>CADASTRAR FUNCIONARIO</span>
                                        <div className="centro">
                                            <form>
                                            <div className="form-group">
                                                <label for="formGroupExampleInput">Nome:</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput"  onChange = {(e) => setNome(e.target.value)}/>
                                              </div>
                                              <div className="form-group">
                                                <label for="formGroupExampleInput">E-mail:</label>
                                                <input type="email" className="form-control" id="formGroupExampleInput"  onChange = {(e) => setEmail(e.target.value)}/>
                                              </div>
                                              <div className="form-group">
                                                <label for="formGroupExampleInput">Usuario:</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput"  onChange = {(e) => setNomeDeUsuario(e.target.value)}/>
                                              </div>
                                              <div className="form-group">
                                                <label for="formGroupExampleInput2">Senha:</label>
                                                <div className="input-icone">
                                                  <input type="password" className="form-control" id="formGroupExampleInput2"  onChange = {(e) => setSenha(e.target.value)}/>
                                                      <i className="icone btn btn-sm fas fa-eye" style={{marginTop:"3%"}}
                                                                        onClick={mostrar}
                                                            ></i>
                                                </div>
                                              </div>
                                                  <div className="botao">
                                                      <button
                                                        className="btn"
                                                          onClick={Login}
                                                      >
                                                          Proximo
                                                      </button>
                                                </div>
                                            </form>
                                        </div>
                                  </LoginCaixaFuncionario>
            <ToastContainer />
        </div>
        </div>

        
        }/>
 </div>



    )
}
