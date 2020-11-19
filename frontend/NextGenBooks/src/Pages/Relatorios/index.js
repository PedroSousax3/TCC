import React from 'react';
import Master from '../Master/index.js';
import { useHistory, Link } from "react-router-dom";
import {ContainerVendaDia} from './style.js'
export default function MenuRelatorios(){
    return(
        <Master>
            <ContainerVendaDia>
               <h1>Relatórios</h1>
               <h6>Aqui você pode acompanhar o crescimento da nossa empresa</h6>
                   <div style={{display:"flex",flexDirection:"column",fontSize:"25px",marginTop:"10%"}}>
                        <Link to="/Relatorios/VendaDia">
                            Vendas Do Dia
                        </Link>
                        <Link to="/Relatorios/VendaMes">
                            Vendas Por Mês
                        </Link>
                        <Link to="/Relatorios/TopClientes">
                            Top 10 Clientes
                        </Link>
                        <Link to="/Relatorios/TopVenda">
                            Top 10 Vendas
                        </Link>  
                        <Link to="/Relatorios/LivroMaisVendido">
                            Mais Vendidos
                        </Link>   
                    </div> 
            </ContainerVendaDia>
             
        </Master>
    )
}