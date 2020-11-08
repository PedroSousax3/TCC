import React,{useState,useEffect} from "react";
import Master from "../../Master"
import {CaixaFinalizarCompra} from "./style.js";
import nextGenBookAPI from "../../../Service/NextGenBookApi";

const api = new nextGenBookAPI();
export default function FinalizarCompra(props){
    //const [registros,setRegistros] = useState([...props.location.state]);
    const [registros,setRegistros] = useState([]);
    const [idCliente,setIdCliente] = useState(1);
    const [enderecoId,setEnderecoId] = useState();
    const [enderecoEscolhido,setEnderecoEscolhido] = useState("");
    const [listaDeEndereco,setListaDeEndereco] = useState([]);
    const [tipoDePagamento,setTipoPagamento] = useState("");
    const [numeroParcela,setNumeroParcela] = useState(0);
    const [valorPorParcela,setValorPorParcela] = useState(0);
    const [valorfrete, setValorFrete] = useState(0);
    const [livros,setLivros] = useState([]);
    const [valorlivros,setValorLivros] = useState(0);
    const [totalcompra,setTotalCompra] = useState(0);


    const listarEndereco = async () =>{
        let resp = await api.listarEndereco(idCliente);
        setListaDeEndereco([...resp]);
    }
      function PegarIdEndereco(){
         let resp = listaDeEndereco.filter(x =>x.nome === enderecoEscolhido);
         return resp[0].id;
      }
      
       const calcularFrete = () =>{
           registros.map(x =>{
            setValorFrete(valorfrete += 10);
           })
       }

    const calcular = () =>{
        registros.map(x => {
            setValorLivros((x.qtd+1 * x.informacoes.venda) + valorlivros);
            setTotalCompra(totalcompra+valorfrete);
        });
        }
       
    const realizarCompra = async () =>{
        registros.map(x =>{
            livros.push({
               IdLivro:x.informacoes.id,
               NumeroLivro:x.qtd,
               VendaLivro:x.informacoes.venda,
        })
    })
           

        let request = {
              idCliente,
              enderecoId : PegarIdEndereco(),
              tipoDePagamento,
              numeroParcela,
              valorfrete,
              livros
        }
        let resp = await api.realizarVenda(request);
    }


    useEffect(() => {  
        listarEndereco(registros[0]);
        calcular();
        console.log(registros[0])
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
                                {numeroParcela} x R$ {totalcompra / numeroParcela}
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
    )
}
                    

                             

                          