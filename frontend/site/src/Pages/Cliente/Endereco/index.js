import React,{useState, useEffect } from "react";
import Master from "../../Master";
import {CaixaPadrao} from "../../../components/CaixaPadrao/style";
import {ContainerEndereco} from "./style";
import {buscarEndereco} from "../../../Service/ApiCorreio";
import {ContainerBotao} from "./style"
import nextGenBookAPI from "../../../Service/NextGenBookApi";

const api = new nextGenBookAPI();
export default function CadastrarEndereco()
{
    const [idcliente,setIdCliente] = useState();
    const [nome,setNome] = useState("");
    const [endereco,setEndereco] = useState("");
    const [numero,setNumero] = useState();
    const [complemento,setComplemento] = useState("");
    const [cep,setCep] = useState("");
    const [cidade,setCidade] = useState("");
    const [estado,setEstado] = useState("");
    const [celular,setCelular] = useState("");


    function limpa_formulário_cep() {
        document.getElementById('estado').value=("");
        document.getElementById('cidade').value=("");
    }
    
    function meu_callback(conteudo) {
        if (!("erro" in conteudo.data) ){
            
        document.getElementById('cidade').value=(conteudo.data.localidade);
        document.getElementById('endereco').value=(conteudo.data.bairro + " " 
        + conteudo.data.logradouro );
        document.getElementById('estado').value=(conteudo.data.uf);
    } 
    else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
const preencherCampos = async () =>{
    let conteudo;
    
    conteudo = await buscarEndereco(cep);
    
    if(conteudo != null)
    meu_callback(conteudo);
}
const cadastrar = async () =>{
    let request = {
        idcliente,
        nome,
        endereco,
        numero,
        complemento,
        cep,
        cidade,
        estado,
        celular
        
    }
     let resp = await api.cadastrarEndereco(request);
}

 
    return(
            <div>
                <Master>
                    <ContainerEndereco>
                        <CaixaPadrao>
                            <h3 style={{marginBottom:"5%"}}>Cadastrar Endereço</h3>
                        <div className="form-row">
                                <div class="col-2" style={{marginLeft:"7%"}}>
                                <input type="text" id="cidade" className="form-control" placeholder="Cidade" onChange={(e) => setCidade(e.target.value)} />
                                </div>
                                <div className="col">
                                <input type="text" id="estado" className="form-control" placeholder="Estado"  onChange={(e) => setEstado(e.target.value)}/>
                                </div>
                                <div className="col">
                                <input type="text" id="cep" name="cep" className="form-control" placeholder="CEP" maxLength="8" onChange={(e) => setCep(e.target.value)}/>
                                </div>
                                <div className="col button1">
                                        <button type="button" className="btn btn-success" onClick={preencherCampos} >Preencher</button>
                                </div>
                            </div>
                                <div className="form-group row" style={{width:"94%",marginTop:"2%",marginLeft:"10%"}}>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="endereco" placeholder="Endereço"  onChange={(e) => setEndereco(e.target.value)}/>
                                </div>
                                </div>
                            <div className="form-group row" style={{width:"94%",marginLeft:"10%"}}>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="endereco" placeholder="Celular"  onChange={(e) => setCelular(e.target.value)}/>
                                </div>
                                </div>
                            <div className="form-group row" style={{width:"78%",marginLeft:"-5%"}}>
                                <div className="col-5">
                                <input type="text" className="form-control" placeholder="Complemento"  onChange={(e) => setComplemento(e.target.value)}/>
                                </div>
                            <div className="col-2">
                            <input type="number" className="form-control" placeholder="Numero"  onChange={(e) => setNumero(e.target.value)}/>
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" id="inputPassword" placeholder="Descrição"  onChange={(e) => setNome(e.target.value)}/>
                                
                                </div>
                            </div>
                            <ContainerBotao>
                            <div className="botao">
                                                      <button
                                                        className="btn"
                                                          onClick={cadastrar}
                                                      >
                                                          Cadastrar Endereço
                                                      </button>
                                                </div>
                            </ContainerBotao>
                        </CaixaPadrao>
                    </ContainerEndereco>
                </Master>
            </div>
    );
}
                        
