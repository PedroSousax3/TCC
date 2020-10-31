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
    const [conteudo, setConteudo] = useState();
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
        if (!("erro" in conteudo) ) {
            setCidade(conteudo.localidade);
            setEndereco(conteudo.bairro + " " + conteudo.logradouro );
            setEstado(conteudo.uf);
        } 
        else {
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
    const preencherCampos = async () =>{
        if(cep.length >= 8)
        {
            let response = await buscarEndereco(cep);

            if(response != null)
            {
                meu_callback(response);
                setConteudo(response);
            }
        }   
    }

    const cadastrar = async () =>{
        let request = {
            cliente: 1,
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
                                <input type="text" id="cidade" className="form-control" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                                </div>
                                <div className="col">
                                <input type="text" id="estado" className="form-control" placeholder="Estado" value={estado}  onChange={(e) => setEstado(e.target.value)}/>
                                </div>
                                <div className="col">
                                <input type="text" id="cep" name="cep" className="form-control" placeholder="CEP" maxLength="10" onChange={(e) => setCep(e.target.value) } onKeyPress={preencherCampos}/>
                                </div>
                            </div>
                                <div className="form-group row" style={{width:"94%",marginTop:"2%",marginLeft:"10%"}}>
                                <div className="col-sm-10">
                                <input type="text" className="form-control" id="endereco" placeholder="Endereço" value={endereco}  onChange={(e) => setEndereco(e.target.value)}/>
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
                        
