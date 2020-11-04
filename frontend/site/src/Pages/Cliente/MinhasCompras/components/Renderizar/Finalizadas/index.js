import React from "react";
import CardVerde from "../components/Card/CardVerd.js";
import {CompraContainer} from "../style"
import Botoes from "../../Botoes/Botoes.js";

export default function Finalizadas()
{
    return(
        <div className="container">
        <CompraContainer>
            <CardVerde
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