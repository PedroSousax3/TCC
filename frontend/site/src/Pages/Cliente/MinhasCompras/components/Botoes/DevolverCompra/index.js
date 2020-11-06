import React, { useState } from "react";
import {TelaContainer} from "./style.js";
import nextgenBooks from "../../../../../../Service/NextGenBookApi";
import { toast, ToastContainer } from "react-toastify";
let api = new nextgenBooks();

export default function DevolverCompra(props){
    const [condicao,setCondicao] = useState(props.condicao);
    const [vendalivro,setVendaLivro] = useState(props.IdVendaLivro);
    const [motivo,setMotivo] = useState("");
    const [valor,setValor] = useState(props.valor);
    const [codigo_rastreio,setCodigoRastreio] = useState("");
    const [comprovante,setComprovante] = useState();
    const [previsao_entrega,setPrevisao_entrega] = useState();

    const AdicionarFoto = (arquivo) => {
        setComprovante(arquivo);
    }
    const DevolverSim = async () => {
        try{
         let request ={
             vendalivro,
             motivo,
             valor:0,
             codigo_rastreio:"123",
             comprovante,
             previsao_entrega:new Date()
         }
         await api.Devolver(request);
        }catch(e) {
            toast.error(e.response.data.erro);
        }
    }
    const DevolverNao = async () => {
        setCondicao(false)
    }
    
    return(
        <TelaContainer>
           {condicao === true &&
                 <div className="container" style={{backgroundColor:"white",minWidth:"25%",minHeight:"25%",postion:"absolute"}}>
                 <div>
                     <span>
                         Deseja Devolver a Compra?
                     </span>
                 </div>
                 <div class="form-group">
                   <span>
                         Adicione a foto do comprovante
                     </span>
                   <input type="file" id="img-input" name="image"
                            onChange={e => AdicionarFoto(e.target.files[0])}
                        />
                     <label for="exampleFormControlTextarea1">Porque?</label>
                     <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange ={(e) => setMotivo(e.target.value)}></textarea>
                 </div>
                 <div 
                 style={{
                         width:"80%",
                         justifyContent:"space-around",
                         display:"flex"
                     }}>
                     <button type="button" className="btn btn-primary" onClick={DevolverNao}>Voltar</button>
                     <button type="button" className="btn btn-danger" onClick={DevolverSim}>Devolver</button>
                 </div> 
          </div>
           }
        </TelaContainer>
    )
}