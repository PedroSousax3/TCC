import React,{useState} from "react";
import Master from "../../Master";
import {CaixaPadrao} from "../../../components/CaixaPadrao/style";
import {ContainerEndereco} from "./style";
import {buscarEndereco} from "../../../Service/ApiCorreio";

export default function CadastrarEndereco()
{

    const [cep,setCep] = useState(""); 
    const Endereco = async () =>{
      let request = {
          cep
      }
      let  resp = await buscarEndereco(request);
    }
   
 const [cidade,setCidade] = useState("");
    return(
            <div>
                <Master>
                    <ContainerEndereco>
                        <CaixaPadrao>
                        <div class="form-row">
                                <div class="col-7">
                                <input type="text" class="form-control" placeholder="Cidade" />
                                </div>
                                <div class="col">
                                <input type="text" class="form-control" placeholder="Estado"/>
                                </div>
                                <div class="col">
                                <input type="text" class="form-control" placeholder="CEP" onChange={(e) => setCep(e.target.value)}/>
                                </div>
                            </div>
                            <div class="form-group row" style={{width:"80%",marginTop:"2%"}}>
                            <label  class="col-sm-2 col-form-label">Nome</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputPassword" placeholder="Nome"/>
                            </div>
                            </div>
                                <div class="form-group row" style={{width:"80%",marginTop:"2%"}}>
                                <label  class="col-sm-2 col-form-label">Endereço</label>
                                <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword" placeholder="Nome"/>
                                </div>
                                </div>
                            <div class="form-row">
                                <div class="col-7">
                                <input type="text" class="form-control" placeholder="Complemento"/>
                                </div>
                                <div class="col">
                                <input type="number" class="form-control" placeholder="Numero"/>
                                </div>
                                <div class="col">
                                <input type="text" class="form-control" placeholder="Celular"/>
                                </div>
                            </div>
                            <button onClick={Endereco}>blaaaaa</button>
                        </CaixaPadrao>
                    </ContainerEndereco>
                </Master>
            </div>
    );
}
                        
