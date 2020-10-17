import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import { ContainerLogin } from './style.js'

import nextGenBookAPI from "../../Service/NextGenBookApi";
const api = new nextGenBookAPI();

export default function Logar(props) {
    
      // final do login

      const [user, setUser ] = useState("");
      const [ senha, setSenha ] = useState("");

      function Logar(){
        let request = {
          user,
          senha
        }
        console.log(request);
      }

      return (
          <div id="login">
            <ContainerLogin>
              <div className = "conteiner-dados form-group">
                <div className="form-group">
                  <label>Usuario ou E-mail:</label>
                    <input type="text"
                      className="form-control"
                       onChange={(u) => setUser(u.target.value)}
                    />
                </div>
                <div className="form-group">
                  <label>Senha:</label>
                    <input id="Senha" 
                    className="form-control"
                          type="password"
                     onChange={(s) => setSenha(s.target.value)}
                    />
                    <button
                      className="btn btn-light"
                            onClick={() => document.getElementById("Senha").type === "password" 
                                                                                      ? document.getElementById("Senha").type = "text"
                                                                                      : document.getElementById("Senha").type = "password"
                                  
                                    }
                    >
                    Mostar
                    </button>
                </div>
                <button
                  className="btn btn-primary"
                    onClick={Logar}
                >
                    Logar
                </button>
              </div>
              <div className = "form-group container-itens">
                <div className="form-group">
                  <Link as = "a" to={{pathname:"/EsqueciSenha"}}>
                      Esqueci a Senha
                  </Link>
                </div>

                <div className="form-group">
                  <Link as = "a" to={{pathname:"Cadastro"}}>
                      Cadastre-se
                  </Link>
                </div>
              </div>
            </ContainerLogin>
            <ToastContainer />
          </div>
      );
}

/*
//login
    const navegacao = useHistory();
    const [infos, setInfos] = useState(props.location.state);

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const logar = async (e) => {
        e.preventDefault();
        try {
          const m = {
            username:username,
            email:email,
            senha:senha
          };

          const a = await api.login(m);
          console.log(e);
          if(a.data.clienteFuncionario == "Cliente"){
            navegacao.push("/Home",a.data);
          }else{
            navegacao.push("/Login", a.data);
          }
        } catch (e) {
          toast.error("Algum dado pode estar incorreto, verifique por favor.");
        }
     }
      <div className="Caixa-Login">
                <h1>ENTRAR</h1>
                <div className="dados" >
                  <div className="form-group">
                    <label>Username ou Email:</label>
                      <input id="Username" 
                            type="text"
                          value={username} 
                        onChange={(m) => setUsername(m.target.value)} 
                      className="form-control"
                      />
                  </div>    
                
                  <div className="form-group">
                    <label > Senha: </label>
                    <input id="Senha" 
                          type="password" 
                        value={senha} 
                      onChange={(m) => setSenha(m.target.value)} 
                    className="form-control"/>
                  </div>
                </div>
                <div>
                  <button
                      className="btn btn-primary" 
                        onClick={logar}>
                    Logar
                  </button>
                </div>
                <div className="Links">
                  <h5>
                    <Link to={{pathname:"/EsqueciSenha", state: infos}}>
                      Esqueci a Senha
                    </Link>
                  </h5>
                  <h5>
                    <Link to={{pathname:"Cadastro", state: infos}}>
                      Cadastre-se
                    </Link>
                  </h5>
                </div>   
              </div>*/