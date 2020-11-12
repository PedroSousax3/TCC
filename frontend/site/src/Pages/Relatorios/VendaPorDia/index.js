import React ,{useState} from 'react';
import Master from '../../Master/index.js';
import {ContainerVendaDia,Containerinput} from '../style.js';
import { ToastContainer, toast } from "react-toastify";
import NextGenBooks from '../../../Service/NextGenBookApi';
import { useHistory, Link } from "react-router-dom";

let api = new NextGenBooks();
export default function VendaPorDia(){
const [Dia, setDia] = useState(new Date().toISOString().substr(0, 10));
const [registros,setRegistros] = useState([]);




    const listar = async () =>{
        try{
            let request = {
                Dia
            }
            console.log(request);
            let resp = await api.relatorioVendaDia(request);
            setRegistros([...resp]);
        }catch(e){
            toast.error(e.response.erro);
        }
    }
    return(
        <Master>
            <ContainerVendaDia>
                        <Containerinput>
                            <div className="form-group">
                                <label className="Data">Escolha a data:</label>
                                <input className="form-control" type="date"  onChange={(n) => setDia(n.target.value)} />
                                <div className="botao">
                                <button
                                  className="btn"
                                    onClick={listar}
                                >
                                    CONSULTAR
                                </button>
                          </div>
                            </div>
                        </Containerinput>
                        <div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Cliente</th>
                                        <th scope="col">Data</th>
                                        <th scope="col">Hora</th>
                                        <th scope="col">Quantidade de Produtos</th>
                                        <th scope="col">Total de Produtos</th>
                                        <th scope="col">Total da Compra</th>
                                        <th scope="col">Endereço de Entrega</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {registros.map((item) =>
                                        <tr className="table" key={item.nomeCliente}>
                                            <th scope="row">{item.nomeCliente}</th>
                                            <td>{item.diaDaVenda}</td>
                                            <td>{item.hora}</td>
                                            <td>{item.qtdProdutosDiferentes}</td>
                                            <td>{item.qtdTotalDeProdutos}</td>
                                            <td>{item.enderecoDeEntrega}</td>
                                            <td>
                                                <Link 
                                                    to = {{
                                                        state : {
                                                            item
                                                        }, 
                                                        pathname : "/LivroVenda"
                                                    }}
                                                >
                                                <button id="btcompra" type="button" className="btn btn-success" >Livros</button>
                                               </Link>
                                            </td>
                                        </tr>
                                 


                                    )}
                                </tbody>
                            </table>

                        </div>
            </ContainerVendaDia>
            <ToastContainer/>
        </Master>
    )
}                   