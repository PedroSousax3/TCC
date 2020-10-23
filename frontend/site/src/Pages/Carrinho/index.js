import React, { useState } from "react";
import { Link } from "react-router-dom";

//Style
import { CarrinhoStyled, ConteinerItens, Pesquisa } from './style.js';

//Components
import Master from '../Master/index.js'

export default function Carrinho(){
    return(
        <Master>
            <CarrinhoStyled>
                <ConteinerItens theme={{
                    sc_width: "100%",
                    sc_min_height: "calc(100vh - 60px)"
                }}>
                    <ConteinerItens theme={{
                        sc_width: "75vw",
                        sc_height: "200vh",
                        sc_margin: "0px 10px 0px 0px"
                    }}>
                    
                    </ConteinerItens>
                    <ConteinerItens id="pesquisa" theme={{
                        sc_width: "250px",
                        sc_padding: "10px",
                        sc_height: "calc(100vh - 60px)"
                    }}>
                        <Pesquisa theme={{sc_bg_color: "var(--marrom-medio)"}}>
                            
                        </Pesquisa>
                    </ConteinerItens>    
                </ConteinerItens>
            </CarrinhoStyled>
        </Master>
    );
}