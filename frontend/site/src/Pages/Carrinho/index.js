import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Style
import { Pesquisa, ConteinerItens } from './style.js';

//Components
import Master from '../Master/index.js'

//Api 
import { ListarCarrinho } from '../../Service/carrinhoApi.js';


export default function Carrinho(){

    const [ carrinho, setCarrinho ] = useState([]);

    async function ConsultarCarrinho(id) {
        const result = await ListarCarrinho(id);
        setCarrinho(result);
    }

    useEffect(() => {
        ConsultarCarrinho(1);
    });

    return(
        <Master>
            <ConteinerItens>
                {carrinho.map(x => 
                    <div className="card">
                        <div className="card-header">
                            {x.livro.nome}
                        </div>
                        <div className="container">
                            <img src="..." alt="..." className="img-thumbnail" />
                            <div className="card-body">
                                <h6 className="card-title">Resumo</h6>
                                <p className="card-text">{x.livro.descricao}</p>
                                <h6 className="card-title">Autor</h6>
                                <p className="card-text">Nome do autor 1, Nome do autor 2 ....</p>
                                <h6 className="card-title">Editora</h6>
                                <p className="card-text">Nome da editora</p>
                                <h6 className="card-title">Data de Lancamento</h6>
                                <p className="card-text">20/23/2020</p>

                                <h6 className="card-title">Avaliação</h6>
                                <p className="card-text">4.5</p>
                            </div>
                        </div>
                        <div className="card-header">
                            Ações
                        </div>
                    </div>
                )}        
            </ConteinerItens>
            <Pesquisa>
                <div className="container">
                    <div className="form-group">
                        <label>Valor total dos livros: </label>
                        <span> {10488.5} </span>
                    </div>
                    <div className="form-group">
                        <label>Valor do frete: </label>
                        <span> {300.45} </span>
                    </div>
                    <div className="form-group">
                        <label>Total da compra: </label>
                        <span> {1523.55} </span>
                    </div>
                </div>

                <button id="btcompra" type="button" className="btn btn-success">COMPRAR</button>
            </Pesquisa>
        </Master>
    );
}