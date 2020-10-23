
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {CaixaFuncionario} from "./style";
import nextGenBookAPI from "../../../Service/NextGenBookApi"
import Master from "../../Master";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const api = new nextGenBookAPI();


export default function CadastrarFuncionario(props){
 
   const navegacao = useHistory()
   const [Login, setLogin ] = useState(props.location.state.id);
    const [Nome, setNome] = useState(props.location.state.nome);
    console.log(Nome)
    const [CarteiraTrabalho, setCarteiraTrabalho ] = useState("");
    const [Cpf, setCpf ] = useState("");
    const [ Email, setEmail ] = useState(props.location.state.email);
    const [ Nascimento, setNascimento ] = useState("");
    const [ Admissao, setAdimissao ] = useState("");
    const [ Cargo, setCargo ] = useState("");
    const [ Endereco, setEndereco ] = useState("");
    const [ Cep, setCep] = useState("");
    const [ NumeroResidencial, setNumeroResidencial ] = useState();
const [ Complemento, setComplemento ] = useState("");


    const CadastrarFuncionario = async () => {
        try{
            const request = {
                Login,
                Nome,
                CarteiraTrabalho,
                Cpf,
                Email,
                Nascimento,
                Admissao,
                Cargo,
                Endereco,
                Cep,
                NumeroResidencial,
                Complemento
              }
              console.log(request);
              const a = await  api.cadastrarFuncionario(request);
              toast.dark("Cadastrado com Sucesso")
              navegacao.push("/",a.data);
              console.log(a);
        }catch(e){
            toast.error(e.response.data.erro);
        }
    }

    return(
        <div>
            <Master children={
                    <div>
                    <div style={{justifyContent:"center",alignItems:"center",paddingTop:"4%",display:"flex",flexDirection:"column"}}>
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
                                    <span>Complemento:</span>
                                </div>
                                <div className="inputs">
                                    <input type="text" onChange={(n) => setCarteiraTrabalho(n.target.value)}></input>
                                    <input  type="text" onChange={(e) => setCpf(e.target.value)}></input>
                                    <input type="date" onChange={(n) => setNascimento(n.target.value)}></input>
                                    <input type="date" onChange={(n) => setAdimissao(n.target.value)}></input>
                                    <input type="text" onChange={(n) => setCargo(n.target.value)}></input>
                                    <input type="text" onChange={(n) => setEndereco(n.target.value)}></input>
                                    <input type="text" onChange={(n) => setCep(n.target.value)}></input>
                                    <input type="number" onChange={(n) => setNumeroResidencial(n.target.value)}></input>
                                    <input type="text" onChange={(n) => setComplemento(n.target.value)}></input>
                                 </div>
                            </div> 
                            <div className="botao-next">
                                <button onClick={CadastrarFuncionario}>Próximo {">"}</button>    
                            </div> 
                            </CaixaFuncionario>
                    <ToastContainer />
                    </div>
                </div>
            }/>
        </div>
    )
}
