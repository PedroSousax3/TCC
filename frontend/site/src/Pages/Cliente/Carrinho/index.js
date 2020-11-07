import React, { useState, useEffect } from "react";
import { Link,useHistory } from "react-router-dom";

//Style
import { Pesquisa, ConteinerItens } from './style.js';

import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

//Components
import Master from '../../Master/index.js';

//Api 
import { ListarCarrinho, Remover } from '../../../Service/carrinhoApi.js';


export default function Carrinho(props){
    const navegacao = useHistory()
    const [ registros, setRegistros ] = useState([]);
    const [ valorlivros, setValorLivros ] = useState(0);
    const [ valorfrete, setValorFrete ] = useState(0);    
    const [ totalcompra, setTotalCompra ] = useState(0);

    const RemoverItem = async (id) => {
        await Remover(id);
        await ConsultarCarrinho(1);
    }

    function SomarCarrinho(){
        registros.forEach(x => {
            setValorLivros(valorlivros + (x.informacoes.venda * x.qtd));
        });
    }
    
    const ConsultarCarrinho = async (id) => {
        const result = await ListarCarrinho(id);
        setRegistros([...result]);

        SomarCarrinho();
        console.log(result)
    }

    const Comprar = () => {
        navegacao.push("/FinalizarCompra", registros);
    }

    useEffect(() => {  
        ConsultarCarrinho(1);
    }, []);

    return(
        <Master>
            <ConteinerItens>
                {registros.map((x) => 
                    <div className="card">
                        <div className="card-header" Key={x.id}>
                            {x.informacoes.nome}
                        </div>
                        <div className="container" Key={x.id}>
                            <img src="..." alt="..." className="img-thumbnail" />
                            <div className="card-body" Key={x.id}>
                                <h6 className="card-title">Resumo</h6>
                                <p className="card-text">{x.informacoes.descricao}</p>
                                <h6 className="card-title">Autor</h6>
                                <p className="card-text">{x.autores.nome}</p>
                                <h6 className="card-title">Editora</h6>
                                <p className="card-text">{x.informacoes.editora.nome}</p>
                                <h6 className="card-title">Data de Lancamento</h6>
                                <p className="card-text">{x.informacoes.lancamento}</p>
                            </div>
                        </div>
                        <div className="card-header" Key={x.id}>
                            <button className="btn btn-danger" onClick={() => RemoverItem(x.id)}>Remover</button>
                        </div>
                    </div>
                )}        
            </ConteinerItens>
            <Pesquisa>
                <div className="container">
                    <div className="form-group">
                        <label>Valor total dos livros: </label>
                        <span> {valorlivros}</span>
                    </div>
                    <div className="form-group">
                        <label>Valor do frete: </label>
                        <span> {48.12} </span>
                    </div>
                    <div className="form-group">
                        <label>Total da compra: </label>
                        <span> {totalcompra} </span>
                    </div>
                </div>

                <button id="btcompra" type="button" className="btn btn-success" onClick={Comprar}>COMPRAR</button>
            </Pesquisa>
        </Master>
    );
}