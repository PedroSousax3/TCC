import React, { useState } from "react";
import { Link } from "react-router-dom";

//Style
import { ConteinerItens } from './style.js';

//Components
import Master from '../Master/index.js'

export default function Carrinho(){
    return(
        <Master theme={{sc_direction: "row"}}>
            
            <ConteinerItens theme={{
                                sc_width: "100%",
                                sc_padding : "25px 15px",
                                sc_min_height: "85vh"
            }} id = "container">    

                <ConteinerItens theme={{
                                    sc_width: "100%",
                                    sc_background_color : "var(--verde-claro)",
                                    sc_padding : "8px",
                                    sc_min_height: "85vh"
                }} id = "itens">       

                </ConteinerItens>
                <ConteinerItens theme={{
                                    sc_width: "280px",
                                    sc_background_color : "var(--marrom-medio)",
                                    sc_padding : "8px",
                                    sc_height: "85vh",
                                    sc_margin: "0px 0px 0px 10px"
                }} id = "pesquisa">

                </ConteinerItens>

            </ConteinerItens>
        </Master>
    );
}