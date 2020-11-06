import React from "react";
import CardVermelho from "../components/Card/CardVermelho.js";
import {CompraContainer} from "../style"
import Botoes from "../../Botoes/Botoes.js";

export default function Pendentes()
{
    return(
        <div className="container">
        <CompraContainer>
            <CardVermelho
               Id={1}
               Titulo={"Hi"}
               Valor={"bla"}
               Status={"bla"}
               Quantidade={3}
            />
            <Botoes/>
        </CompraContainer>
    </div>
    )
}