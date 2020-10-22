import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {LoginCaixaFuncionario} from "./CadastrarLoginFuncionario/style";
import {CaixaFuncionario} from "../style";
import nextGenBookAPI from "../../../Service/NextGenBookApi";
import Master from "../../Master";
const api = new nextGenBookAPI();
export default function CadastrarLogin()
{    
    const [Nome, setNome ] = useState("");
    const [ Email, setEmail ] = useState("");
    const [ NomeDeUsuario, setNomeDeUsuario ] = useState("");
    const [ Senha, setSenha ] = useState("");


    const CadastrarLogin = async () => {
      const request = {
        Nome,
        Email,
        NomeDeUsuario,
        Senha
      }
      console.log(request);
      const a = await  api.cadastrarLoginFuncionario(request);

      navegacao.push("/Funcionario/Cadastro",a.data);
      console.log(a);
    }
    return(
        <div>
            <Master children={
                        <div>


  
                        <div style={{justifyContent:"center",alignItems:"center",paddingTop:"7%",display:"flex",flexDirection:"column"}}>
                            <div style={{width:"70%",display:"flex",justifyContent:"flex-start",fontSize:"25px",fontWeight:"bold"}}>
                                <span>CADASTRAR FUNCIONARIOS</span>
                            </div>
                            <LoginCaixaFuncionario>
                              <div className="agrupamento">
                                    <div className="textos">
                                        <span>Nome:</span>
                                        <span>E-mail:</span>
                                        <span>Nome do Usuario:</span>
                                        <span>Senha:</span>
                                    </div>
                                    <div className="inputs">
                                        <input type="text" onChange={(n) => setNome(n.target.value)}></input>
                                        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
                                        <input type="text" onChange={(n) => setNomeDeUsuario(n.target.value)}></input>
                                        <div className="input-botao">
                                        <input id="Senha" type="password"onChange={(s) => setSenha(s.target.value)}></input>
                                            <button
                                                    onClick={() => document.getElementById("Senha").type === "password" 
                                                    ? document.getElementById("Senha").type = "text"
                                                    : document.getElementById("Senha").type = "password"
                
                                                    }
                                            >Mostrar</button>
                                        </div>
                                    </div>
                                </div> 
                                <div className="botao-next">
                                    <button onClick={CadastrarLogin}>Próximo {">"}</button>    
                                </div> 
                            </LoginCaixaFuncionario>
                        </div>
                    </div>
            }
            />


        </div>
    )
}
