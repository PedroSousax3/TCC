import React, { useState } from "react";
import { Link } from "react-router-dom";

//Style
import { CarrinhoStyled, ConteinerItens, Pesquisa } from './style.js';

//Components
import Master from '../Master/index.js'
import CardGaral from '../../components/Card/VisaoGeral/index.js'

export default function Carrinho(){
    return(
        <Master>
            <CarrinhoStyled>
                <ConteinerItens theme={{
                    sc_width: "100%",
                    sc_min_height: "calc(100vh - 60px)"
                }} id = "container-itens">
                    <ConteinerItens theme={{
                        sc_width: "70%",
                        sc_margin: "0px auto 0px auto"
                    }} id="conteudo">
                        <CardGaral></CardGaral>
                        <CardGaral></CardGaral>
                        <CardGaral></CardGaral>
                    </ConteinerItens>
                    <ConteinerItens id="pesquisa" theme={{
                        sc_width: "250px",
                        sc_padding: "10px",
                        sc_height: "calc(100vh - 60px)"
                    }} id="container-pesquisa">
                        <Pesquisa theme={{sc_bg_color: "var(--marrom-medio)"}}>
                            
                        </Pesquisa>
                    </ConteinerItens>    
                </ConteinerItens>
            </CarrinhoStyled>
        </Master>
    );
}