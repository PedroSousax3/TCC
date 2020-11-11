import React from 'react';
import Master from '../Master/index.js';
import { useHistory, Link } from "react-router-dom";
import {ContainerVendaDia} from './style.js'
export default function MenuRelatorios(){
    return(
        <Master>
            <ContainerVendaDia>
               <h1>Relatorios</h1>
                   <div style={{display:"flex",flexDirection:"column"}}>
                        <Link to="/VendaDia">
                            Vendas Do Dia
                        </Link>
                        <Link to="/VendaMes">
                            Vendas Por Mês
                        </Link>
                        <Link to="/TopClientes">
                            Top 10 Clientes
                        </Link>   
                    </div> 
            </ContainerVendaDia>
             
        </Master>
    )
}