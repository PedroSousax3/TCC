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
      const [usuario, setUser ] = useState("");
      const [ senha, setSenha ] = useState("");

      const Logar = async () => {
            try{
              const request = {
                usuario,
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
        var tipo = document.getElementById("Senha");
    
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
                                        <span>Entrar</span>
                                        <div className="centro">
                                            <div className = "form-group">
                                              <div className="input-alinhamento">
                                                <div className="coluna-alinhamento">
                                                    <label className="usuario">Usuario ou E-mail:</label>
                                                    <label className="senha">Senha:</label> 
                                                </div>
                                                    <div className="coluna-alinhamento">
                                                          <div className="form-group">
                                                      <input type="text"
                                                        className="form-control"
                                                        onChange={(u) => setUser(u.target.value)}
                                                      />
                                                        <div className=" inputbotao form-group">
                                                          <input id="Senha" 
                                                          className="form-control"
                                                                type="password"
                                                          onChange={(s) => setSenha(s.target.value)}
                                                          />
                                                          <i className="icone btn btn-sm fas fa-eye"
                                                                  onClick={mostrar}
                                                       ></i>
                                                          </div>
                                                  </div>
                                                    </div>
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
                                        </div>
                                    </LoginCaixa>
                                </ContainerLogin>
                          }/>
      </div>
      );
}
