import React,{useState,useEffect} from "react";
import Master from "../../Master"
import {CaixaFinalizarCompra} from "./style.js";
import nextGenBookAPI from "../../../Service/NextGenBookApi";

const api = new nextGenBookAPI();
export default function FinalizarCompra(props){
    return <div>Ok</div>
}

/*
const [registros,setRegistros] = useState([...props.location.state]);
    const [idCliente,setIdCliente] = useState(registros[0].cliente);;
    console.log(registros[0].cliente);
    const [enderecoId,setEnderecoId] = useState();
    const [enderecoEscolhido,setEnderecoEscolhido] = useState("");
    const [listaDeEndereco,setListaDeEndereco] = useState([]);
    const [tipoDePagamento,setTipoPagamento] = useState("");
    const [numeroParcela,setNumeroParcela] = useState(0);
    const [valorPorParcela,setValorPorParcela] = useState(0);
    const [valorfrete, setValorFrete] = useState(0);
    const [dataPrevistaEntrega,setDataPrevistaEntrega] = useState();
    const [livros,setLivros] = useState([]);
    const [valorlivros,setValorLivros] = useState(0);
    const [totalcompra,setTotalCompra] = useState(0);
    const [respCorreio,setRespCorreio] = useState([]);

    const { calcularPrecoPrazo } = require("correios-brasil");
    const listarEndereco = async () =>{
        let resp = await api.listarEndereco(1);
        setListaDeEndereco([...resp]);
    }
      function PegarIdEndereco(){
         let resp = listaDeEndereco.filter(x =>x.nome === enderecoEscolhido);
         return resp[0].id;
      }
      function PegarCepDestino(){
          let resp = listaDeEndereco.pop(x =>x.id === PegarIdEndereco());
          return resp[0].cep;
          console.log(resp[0]);
       }

function calcularFrete(){

    const  requests = [];
    registros.map((item) => {
        requests.push({
            sCepOrigem: "04890300",
            sCepDestino:"04890300",
            nVlPeso: "1",
            nCdFormato:  "1",
            nVlComprimento:  "10",
            nVlAltura: "10",
            nVlLargura: "10",
            nCdServico:  "04014",
            nVlDiametro:  "0",
            
        });
    })
   requests.map((item) =>{

       calcularPrecoPrazo(item).then((response) => {
           console.log(response);
          let resp = response;
          setValorFrete(valorfrete+resp.Valor);
          respCorreio.push(resp.Codigo);
    });
})

}
    

    const calcular = () =>{
        registros.map(x => {
            setValorLivros((x.qtd * x.informacoes.venda) + valorlivros);
            setTotalCompra(totalcompra+valorfrete);
        });
    
            setValorPorParcela(totalcompra / numeroParcela);
        }
       
    const realizarCompra = async () =>{
        registros.map(x =>{
            respCorreio.map(y =>{

                livros.push({
                   IdLivro:x.informacoes.id,
                   NumeroLivro:x.qtd,
                   VendaLivro:x.informacoes.venda,
                   CodigoRastreio:y
                })
            })
        })
        let request = {
              idCliente:1,
              enderecoId : PegarIdEndereco(),
              tipoDePagamento,
              numeroParcela,
              valorfrete,
              dataPrevistaEntrega,
              livros
        }
        let resp = await api.realizarVenda(request);
    }


    useEffect(() => {  
        listarEndereco(1);
    }, []);

    useEffect(() => {  
        calcular();
    }, []);

    return(
        <div>
            <Master children={
                    <div style={{justifyContent:"center",alignItems:"center",paddingTop:"4%",display:"flex",flexDirection:"column"}}>
                        <div style={{width:"60%",display:"flex",justifyContent:"flex-start"}}>
                            <span style={{fontSize:"25px",fontWeight:"bold"}}>Finalizar Compra</span>
                        </div>
                 <CaixaFinalizarCompra>
                        <div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Livro</th>
                                    <th scope="col">Preço Unitario</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {registros.map((item) =>
                                        <tr className="table-success" key={item.id}>
                                            <th scope="row">{item.informacoes.nome}</th>
                                            <td>R$:{item.informacoes.venda}</td>
                                    </tr>
                                    )}
                                </tbody>
                            </table>
                            
                        </div>
                     <div className="decisoes">
                       <div className="form-group">
                                <label>Selecione o endereço:</label>
                                <select id="tipos" className="form-control" onChange={(x) => setEnderecoEscolhido(x.target.value)}>
                                {listaDeEndereco.map((item)=>(
                                        <option value={item.nome}>{item.nome}</option>
                                    ))}
                                </select>
                            </div>
                                <button onClick={calcularFrete()}></button>
                       <div className="form-group">
                                <label>Metodo De Pagamento:</label>
                                <select id="tipos" className="form-control" onChange={(x) => setTipoPagamento(x.target.value)}>
                                    <option value="Dinheiro">Dinheiro</option>
                                    <option value="Credito" >Credito</option>
                                    <option value="Débito">Débito</option>
                                </select>
                            </div>
                            {tipoDePagamento === "Débito"&&
                                <div className="form-group row" >
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="endereco" placeholder="Informe o numero do seu cartao"  />
                                </div>
                            </div>
                            }
                            {tipoDePagamento === "Credito" &&
                            <div className="form-row">
                                   <input type="text" className="form-control col-4" id="endereco" placeholder="Informe o numero do seu cartao"  />
                                  <span className="col">Numero de Parcelas</span>
                                  <input type="number" className="form-control col-1"  onChange={(x) => setNumeroParcela(x.target.value)}/>
                                  <span  className="col">Valor das Parcelas :
                                {numeroParcela} x R$ {valorPorParcela}
                                </span>
                            </div>
                             }
                            <div className="form-row">
                                  <div className="col-4">
                                      <span>Valor Total dos Livros:</span>
                                      {valorlivros}
                                  </div>
                                  <div className="col-4">
                                      <span>Valor Total do Frete:</span>
                                      {valorfrete}
                                  </div>
                                  <div className="col-4">
                                      <span>Valor Total da Compra:</span>
                                      {totalcompra}
                                  </div>
                            </div>
                            <div className="botao">
                            <button className="btn" onClick={realizarCompra}>Comprar</button>
                            </div>
                       </div>
                 </CaixaFinalizarCompra>
                 </div>
            }/>
        </div>
*/                            