import React from "react";
import CardAmarelo from "../components/Card/CardAmarelo.js";
import {CompraContainer} from "../style"
import Botoes from "../../Botoes/Botoes.js";

export default function EmAndamento(){
    return(
        <div className="container">
            <CompraContainer>
                <CardAmarelo
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