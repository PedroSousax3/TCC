import React from "react";
import {CaixaFuncionario} from "./style";



export default function CadastrarFuncionario(props){
    return(
    <div>

        <PageCadastroFuncionario/>
        <div style={{justifyContent:"center",alignItems:"center",paddingTop:"7%",display:"flex",flexDirection:"column"}}>
            <div style={{width:"80%",display:"flex",justifyContent:"flex-start",fontSize:"25px",fontWeight:"bold"}}>
                <span>CADASTRAR FUNCIONARIOS</span>
            </div>
            <CaixaFuncionario>
              <div className="agrupamento">
                    <div className="textos">
                        <span>Carteira de Trabalho:</span>
                        <span>Cpf:</span>
                        <span>Nascimento:</span>
                        <span>Admissão:</span>
                        <span>Cargo:</span>
                        <span>Endereço:</span>
                        <span>Cep:</span>
                        <span>Numero Residencial:</span>
                        <span>Admissão:</span>
                    </div>
                    <div className="inputs">
                        <input type="text" onChange={(n) => setNome(n.target.value)}></input>
                        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
                        <input type="date" onChange={(n) => setNomeDeUsuario(n.target.value)}></input>
                        <input type="date" onChange={(n) => setNomeDeUsuario(n.target.value)}></input>
                        <input type="text" onChange={(n) => setNomeDeUsuario(n.target.value)}></input>
                        <input type="text" onChange={(n) => setNomeDeUsuario(n.target.value)}></input>
                        <input type="text" onChange={(n) => setNomeDeUsuario(n.target.value)}></input>
                        <input type="number" onChange={(n) => setNomeDeUsuario(n.target.value)}></input>
                        <input type="text" onChange={(n) => setNomeDeUsuario(n.target.value)}></input>
                     </div>
                </div> 
                <div className="botao-next">
                    <button onClick={CadastrarLogin}>Próximo {">"}</button>    
                </div> 
                </CaixaFuncionario>
        </div>
        </div>
    )
}
