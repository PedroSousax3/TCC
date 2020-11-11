import React ,{useState} from 'react';
import Master from '../../../Master';
import {ContainerVendaDia,Containerinput} from '../../style.js';
import { ToastContainer, toast } from "react-toastify";
import NextGenBooks from '../../../../Service/NextGenBookApi';
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
                                        <th scope="col">Nome Do Livro</th>
                                        <th scope="col">Quantidade</th>
                                        <th scope="col">Valor</th>
                                        
                                    </tr>
                                </thead>

                                <tbody>
                                    {registros.livros.map((item) =>
                                        <tr className="table" key={item.nomeLivro}>
                                            <th scope="row">{item.qtdUnitaria}</th>
                                            <td>R$ {item.valorUnitario}</td>
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