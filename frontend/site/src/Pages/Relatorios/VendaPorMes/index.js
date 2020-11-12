import React ,{useState} from 'react';
import Master from '../../Master/index.js';
import {ContainerVendaDia,Containerinput} from '../style.js';
import { ToastContainer, toast } from "react-toastify";
import NextGenBooks from '../../../Service/NextGenBookApi';
import { useHistory, Link } from "react-router-dom";

let api = new NextGenBooks();
export default function VendaPorMes(){
const [MesInicio, setMesInicio] = useState(new Date());
const [MesFim, setMesFim] = useState(new Date());
const [registros,setRegistros] = useState([]);




    const listar = async () =>{
        try{
            let request = {
                MesInicio,
                MesFim
            }
            let resp = await api.relatorioVendaMes(request);
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
                                <label className="Data">Escolha a Data:</label>
                                <label className="Data">Inicio:</label>
                                <input className="form-control" type="date" onChange={(n) => setMesInicio(n.target.value)} />
                                <label className="Data">Fim:</label>
                                <input className="form-control" type="date" onChange={(n) => setMesFim(n.target.value)} />
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
                                        <th scope="col">Mes</th>
                                        <th scope="col">Quantidade de Vendas</th>
                                        <th scope="col">Total Vendas</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {registros.map((item) =>
                                        <tr className="table">
                                            <th scope="row">{item.mes}</th>
                                            <td>{item.qtdVendas}</td>
                                            <td>{item.totalVenda}</td>
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
                                          
                                 

