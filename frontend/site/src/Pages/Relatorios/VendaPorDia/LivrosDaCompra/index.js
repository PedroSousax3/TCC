import React ,{useState} from 'react';
import Master from '../../Master/index.js';
import {ContainerVendaDia,Containerinput} from '../style.js';
import { ToastContainer, toast } from "react-toastify";
import NextGenBooks from '../../../Service/NextGenBookApi';
import { useHistory, Link } from "react-router-dom";

let api = new NextGenBooks();
export default function LivroVendaRelatorio(props){
const [registros,setRegistros] = useState([...props.location.state]);

    return(
        <Master>
            <ContainerVendaDia>
                     
                        <div>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Cliente</th>
                                        <th scope="col">Data</th>
                                        <th scope="col">Hora</th>
                                        
                                    </tr>
                                </thead>

                                <tbody>
                                    {registros.livros.map((item) =>
                                        <tr className="table-success" key={item.nomeLivro}>
                                            <th scope="row">{item.qtdUnitaria}</th>
                                            <td>{item.valorUnitario}</td>
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
   