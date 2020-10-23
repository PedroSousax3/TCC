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

      return (
          <div id="login">
                  <Master children={
                                <div className="">
                                <ContainerLogin>
                                  <LoginCaixa>
                                    <span>Entrar</span>
                                  <div className = "conteiner-dados form-group">
                                    <div className=" inputbotao form-group">
                                      <label className="usuario">Usuario ou E-mail:</label>
                                        <input type="text"
                                          className="form-control"
                                           onChange={(u) => setUser(u.target.value)}
                                        />
                                    </div>
                                    <div className=" inputbotao form-group">
                                      <label className="senha">Senha:</label>
                                        <input id="Senha" 
                                        className="form-control"
                                              type="password"
                                         onChange={(s) => setSenha(s.target.value)}
                                        />
                                        </div>
                                        <div className="botao">
                                        <button
                                          className="btn btn-light"
                                                onClick={() => document.getElementById("Senha").type === "password" 
                                                                                                          ? document.getElementById("Senha").type = "text"
                                                                                                          : document.getElementById("Senha").type = "password"
                                                      
                                                        }
                                        >
                                        Mostar
                                        </button>
                                    
                                    <button
                                      className="btn"style={{backgroundColor:"#16C823"}}
                                        onClick={Logar}
                                    >
                                        Logar
                                    </button>
                                    </div>
                                  </div>
                                  <div className = "Links">
                                    <div className="link">
                                      <Link as = "a" to={{pathname:"/EsqueciSenha"}}>
                                          Esqueci a Senha
                                      </Link>
                                    </div>
                    
                                    <div className="link">
                                      <Link as = "a" to={{pathname:"Cadastro"}}>
                                          Cadastre-se
                                      </Link>
                                    </div>
                                  </div>
                                  </LoginCaixa>
                                </ContainerLogin>
                                <ToastContainer />
                              </div>
                                
                  }/>
          </div>
      );
}
