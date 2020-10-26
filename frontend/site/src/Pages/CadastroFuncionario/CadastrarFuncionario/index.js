
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {CaixaFuncionario} from "./style";
import nextGenBookAPI from "../../../Service/NextGenBookApi"
import Master from "../../Master";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const api = new nextGenBookAPI();


export default function CadastrarFuncionario(){
 
   const navegacao = useHistory()
    const [Login, setLogin ] = useState(props.location.state.id);
    const [Nome, setNome] = useState(props.location.state.nome);
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
                    <div style={{justifyContent:"center",alignItems:"center",paddingTop:"3%",display:"flex",flexDirection:"column"}}>
                        <div style={{width:"80%",display:"flex",justifyContent:"flex-start",fontSize:"25px",fontWeight:"bold"}}>
                        </div>
                            <span>CADASTRAR FUNCIONARIOS</span>
                        <CaixaFuncionario>
                            <form>
                                <div className="inputs form-group">
                                <label for="formGroupExampleInput">Carteira De Trabalho:</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setCarteiraTrabalho(e.target.value)}/>
                                </div>
                                <div className="inputs form-group">
                                <label for="formGroupExampleInput">Cpf:</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setCpf(e.target.value)}/>
                                </div>
                                <div className="inputs form-group">
                                <label for="formGroupExampleInput">Nascimento:</label>
                                <input type="date" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setNascimento(e.target.value)}/>
                                </div>
                                <div className="inputs form-group">
                                <label for="formGroupExampleInput">Admissão:</label>
                                <input type="date" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setAdimissao(e.target.value)}/>
                                </div>
                                <div className="inputs form-group">
                                <label for="formGroupExampleInput">Cargo:</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setCargo(e.target.value)}/>
                                </div>
                                <div className="inputs form-group">
                                <label for="formGroupExampleInput">Endereço:</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setEndereco(e.target.value)}/>
                                </div>
                                <div className="inputs form-group">
                                <label for="formGroupExampleInput">Cep:</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setCep(e.target.value)}/>
                                </div>
                                <div className="inputs form-group">
                                <label for="formGroupExampleInput">Numero Residencial:</label>
                                <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setNumeroResidencial(e.target.value)}/>
                                </div>
                                <div className="inputs form-group">
                                <label for="formGroupExampleInput">Complemento:</label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Input exemplo" onChange = {(e) => setComplemento(e.target.value)}/>
                                </div>
                                <div className="botao">
                                                      <button
                                                        className="btn"
                                                          onClick={CadastrarFuncionario}
                                                      >
                                                          Finalizar Cadastro
                                                      </button>
                                                </div>
                            </form>
                        </CaixaFuncionario>
                    <ToastContainer />
                    </div>
                </div>
            }/>
        </div>
    )
}
