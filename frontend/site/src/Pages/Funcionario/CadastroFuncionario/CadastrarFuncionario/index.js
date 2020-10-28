
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {CadastroCaixa} from "../../../../components/CadastroCaixa/CadastroCaixa";
import nextGenBookAPI from "../../../../Service/NextGenBookApi"
import Master from "../../../Master";
import {CaixaInformacoes} from "./style"
import { ToastContainer, toast } from "react-toastify";


const api = new nextGenBookAPI();


export default function CadastrarFuncionario(props){
 

    const navegacao = useHistory()

    //const [Login, setLogin ] = useState(props.location.state.id);
    //const [Nome, setNome] = useState(props.location.state.nome);
    const [CarteiraTrabalho, setCarteiraTrabalho ] = useState("");
    const [Cpf, setCpf ] = useState("");
   // const [ Email, setEmail ] = useState(props.location.state.email);
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
               // Login,
               // Nome,
                CarteiraTrabalho,
                Cpf,
                //Email,
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
            <Master >
                   
                    
                    <h3 style={{marginTop:"6%"}}>CADASTRAR FUNCIONARIOS</h3>
                    <CadastroCaixa>
                       <CaixaInformacoes>
                                        <div className="inputs form-group">
                                        <label>Carteira De Trabalho:</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite a carteira de trabalho" onChange = {(e) => setCarteiraTrabalho(e.target.value)}/>
                                        </div>
                                        <div className="inputs form-group">
                                        <label>Cpf:</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite o cpf" onChange = {(e) => setCpf(e.target.value)}/>
                                        </div>
                                        <div className="inputs form-group">
                                        <label>Nascimento:</label>
                                        <input type="date" className="form-control" id="formGroupExampleInput" onChange = {(e) => setNascimento(e.target.value)}/>
                                        </div>
                                        <div className="inputs form-group">
                                        <label>Admissão:</label>
                                        <input type="date" className="form-control" id="formGroupExampleInput"  onChange = {(e) => setAdimissao(e.target.value)}/>
                                        </div>
                                        <div className="inputs form-group">
                                        <label>Cargo:</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite o cargo" onChange = {(e) => setCargo(e.target.value)}/>
                                        </div>
                                        <div className="inputs form-group">
                                        <label>Endereço:</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite Endereco" onChange = {(e) => setEndereco(e.target.value)}/>
                                        </div>
                                        <div className="inputs form-group">
                                        <label>Cep:</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite seu cep" onChange = {(e) => setCep(e.target.value)}/>
                                        </div>
                                        <div className="inputs form-group">
                                        <label>Numero Residencial:</label>
                                        <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Digite seu numero residencial" onChange = {(e) => setNumeroResidencial(e.target.value)}/>
                                        </div>
                                        <div className="inputs form-group">
                                        <label>Complemento:</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Digite um complemento" onChange = {(e) => setComplemento(e.target.value)}/>
                                        </div>
                                        <div className="botao button1" >
                                                        <button type="button" className="btn btn-success" onClick={CadastrarFuncionario} >Confirmar cadastro</button>
                                                    </div>
                          </CaixaInformacoes>
                         
                            <ToastContainer />
                    </CadastroCaixa>
            
          </Master>
        </div>
                    
    )
}
