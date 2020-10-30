
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {CadastroCaixa} from "../../../../components/CadastroCaixa/CadastroCaixa";
import nextGenBookAPI from "../../../../Service/NextGenBookApi"
import Master from "../../../Master";
import {CaixaInformacoes} from "./style"
import { ToastContainer, toast } from "react-toastify";
import {CaixaInput} from "./style"

const api = new nextGenBookAPI();


export default function CadastrarFuncionario(){
 
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
    
    const navegacao = useHistory()
    const [ NomeDeUsuario, setNomeDeUsuario ] = useState("");
    const [ Senha, setSenha ] = useState("");
    const [Nome, setNome] = useState("");
    const [CarteiraTrabalho, setCarteiraTrabalho ] = useState("");
    const [Cpf, setCpf ] = useState("");
    const [ Email, setEmail ] = useState("");
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
                NomeDeUsuario,
                Senha,
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
                                <CaixaInput>
                                <div className="form-group">
                                                        <label>Usuario:</label>
                                                        <input type="text" className="form-control" id="formGroupExampleInput"  onChange = {(e) => setNomeDeUsuario(e.target.value)}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Senha:</label>
                                                        <div className="input-icone">
                                                        <input type="password" className="form-control" id="formGroupExampleInput2"  onChange = {(e) => setSenha(e.target.value)}/>
                                                            <i className="icone btn btn-sm fas fa-eye" style={{marginTop:"3%"}}
                                                                                onClick={mostrar}
                                                                    ></i>
                                                        </div>
                                                    </div>
                                    </CaixaInput>
                            <ToastContainer />
                        </CadastroCaixa>
          </Master>
        </div>
                    
    )
}
            
