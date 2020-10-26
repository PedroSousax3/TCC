import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { ContainerLogin } from './style.js'
import {LoginCaixa} from "../../components/LoginCaixa/LoginCaixa"
import nextGenBookAPI from "../../Service/NextGenBookApi";
import Master from "../Master";

const api = new nextGenBookAPI();

export default function Logar(props) {
    
      // final do login

      const navegacao = useHistory()
      const [user, setUser ] = useState("");
      const [ senha, setSenha ] = useState("");

      const Logar = async () => {
            try{
              const request = {
                user,
                senha
              }
              console.log(request);
              const a = await  api.login(request);
              navegacao.push("/",a.data);
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

      return (
          <div id="login">
                                <Master children={
                                 <ContainerLogin>
                                    <LoginCaixa>
                                        <div className="centro">
                                            <div className="titulo">
                                                <label>ENTRAR</label>
                                            </div>
                                            <form>
                                              <div className="form-group">
                                                <label for="formGroupExampleInput">Usuario:</label>
                                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setUser(e.target.value)}/>
                                              </div>
                                              <div className="form-group">
                                                <label for="formGroupExampleInput2">Senha:</label>
                                                <div className="input-icone">
                                                  <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Outro input" onChange = {(e) => setSenha(e.target.value)}/>
                                                      <i className="icone btn btn-sm fas fa-eye" style={{marginTop:"3%"}}
                                                                        onClick={mostrar}
                                                            ></i>
                                                </div>
                                              </div>
                                              <div className = "Links">
                                                    <div className="link">
                                                      <Link as = "a" to={{pathname:"/EsqueciSenha"}}>
                                                          Esqueci a Senha &#160;|
                                                      </Link>
                                                    </div>
                                                       
                                                    <div className="link">
                                                      <Link as = "a" to={{pathname:"Cadastro"}}>
                                                      &#160;  Cadastre-se
                                                      </Link>
                                                    </div>
                                              </div>
                                                  <div className="botao">
                                                      <button
                                                        className="btn"
                                                          onClick={Logar}
                                                      >
                                                          Logar
                                                      </button>
                                                </div>
                                            </form>
                                        </div>
                                  </LoginCaixa>
                                </ContainerLogin>
                              }/>
                      </div>
                  );
            }
                            
                                
                                
