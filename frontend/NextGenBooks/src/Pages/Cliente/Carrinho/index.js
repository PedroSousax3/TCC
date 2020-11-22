import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

//Style
import { Pesquisa, ConteinerItens } from './style.js';
import { toast, ToastContainer } from "react-toastify";

//Components
import Master from '../../Master/index.js';
import { Card, Title, Container } from '../../../components/Card/index.js'

//Api 
import { ListarCarrinho, Remover, alterarQuantidadeApi } from '../../../Service/carrinhoApi.js';
import { BuscarFoto } from '../../../Service/fileApi.js';

import Cookies from 'js-cookie'

const override = css`
  display: block;
  margin: 0 auto;
  margin: auto 5px;
`;


export default function Carrinho(props) {
    const navegacao = useHistory()
    const [id, setId] = useState(Number(Cookies.get('id')));
    const [registros, setRegistros] = useState([]);
    const [valorlivros, setValorLivros] = useState(0);
    const [valorfrete, setValorFrete] = useState(0);
    const [totalcompra, setTotalCompra] = useState(0);
    const [estado, setEstado] = useState(false);
    const ref = useRef(null);


    const RemoverItem = async (id) => {
        await Remover(id);
        await ConsultarCarrinho(id);
    }

    function SomarCarrinho(result) {
        let valor = 0;
        let frete = 0;
        result.forEach(x => {
            valor += x.informacoes.venda * x.qtd;
            frete += x.qtd;
        });
        setValorLivros(valor);
        setValorFrete(frete);
        setTotalCompra(frete + valor);
    }

    const ConsultarCarrinho = async () => {
        try {
            ref.current.continuousStart();
            const result = await ListarCarrinho(id);
            setRegistros([...result]);
            SomarCarrinho(result);
            console.log(result);
        }
        catch (ex) {
            toast.erro(ex.response.data.erro)
        }
        finally {
            ref.current.complete();
        }
    }

    const Comprar = () => {
        navegacao.push("/FinalizarCompra", registros);
    }

    const alterarCarrinho = async (item, idcarrinho, qtd) => {
        try {
            setEstado(true);
            let response = await alterarQuantidadeApi(idcarrinho, qtd);
            ConsultarCarrinho();
            setEstado(false);
        }
        catch (ex) {
            toast.error(ex.response.erro)
        }
    }

    useEffect(() => {
        ConsultarCarrinho();
    }, []);

    return (
        <Master>
            <LoadingBar
                color='#f11946'
                ref = {ref}
            />
            <ToastContainer />
            <ConteinerItens>
                {registros.map((x) =>
                    <Card theme={{ bg_color: "#98F0BB" }} key={x.id}>
                        <Title theme={{ color: "black", bg_color: "rgba(0, 0, 0, 0.1)" }}>{x.informacoes.nome}</Title>
                        <Container>
                            <img style={{ height: "300px", width: "180px" }} src={BuscarFoto(x.informacoes.foto)} alt={"Capa do livro " + x.informacoes.editora.nome} />
                            <div className="column item" ke={x.id}>
                                <div>
                                    <h5>
                                        Autor(a): {x.autores.map(a => a.nome)}
                                    </h5>
                                </div>
                                <div>
                                    <h5>
                                        Editora: {x.informacoes.editora.nome}
                                    </h5>
                                </div>
                                <div>
                                    <h5>
                                        Descrição:
                                        <p>
                                            {
                                                (x.informacoes.descricao.length > 300)
                                                    ? x.informacoes.descricao.substr(0, x.informacoes.descricao.indexOf(".", 300) + 1) + "..." : x.informacoes.descricao
                                            }
                                        </p>
                                    </h5>
                                    <h5>
                                        Quantidade Disponível: {x.estoque.qtd}
                                        <div>
                                            <Link to={{
                                                state: {
                                                    idlivro: x.informacoes.id
                                                },
                                                pathname: "/MostrarLivro"
                                            }}>Ver detalhes</Link>
                                        </div>
                                    </h5>
                                </div>
                                <div className="button-card" key={x.id}>
                                    <button className="btn btn-danger" onClick={() => RemoverItem(x.id)}>
                                        <i className="fas fa-trash-alt" alt="Remover Livro do carrinho"></i>
                                    </button>
                                    <div className="unidadebutao" style={{ float: "left", margin: "0px 8px" }}>
                                        <ClipLoader
                                            css={override}
                                            size={35}
                                            color={"#438719"}
                                            loading={estado}
                                        />
                                        <input type="number" className="form-control" min="1" minLength="1" onChange={(qtd) => alterarCarrinho(x.qtd, x.id, Number(qtd.target.value))} value={x.qtd} style={{ width: "70px" }} />
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Card>
                    /*<div className="card">
                        <div className="card-header" Key={x.id}>
                            {x.informacoes.nome}
                        </div>
                        <div className="container" Key={x.id}>
                            <div className="card-body" Key={x.id}>
                                <h6 className="card-title">Resumo</h6>
                                <p className="card-text">{x.informacoes.descricao}</p>
                                <h6 className="card-title">Editora</h6>
                                <p className="card-text">{x.informacoes.editora.nome}</p>
                                <h6 className="card-title">Data de Lancamento</h6>
                                <p className="card-text">{new Date(x.informacoes.lancamento).toLocaleDateString()}</p>
                            </div>
                        </div>
                        <div className="card-header" style={{ display: "flex", justifyContent: "space-between" }} Key={x.id}>
                            <button className="btn btn-danger" onClick={() => RemoverItem(x.id)}>Remover</button>
                            <div className="unidadebutao">
                                <ClipLoader
                                    css={override}
                                    size={35}
                                    color={"#438719"}
                                    loading={estado}
                                />
                                <input type="number" className="form-control" min="1" minLength="1" onChange={(qtd) => alterarCarrinho(x.qtd, x.id, Number(qtd.target.value))} value={x.qtd} style={{ width: "70px" }} />
                            </div>
                        </div>
                    </div>*/
                )}
            </ConteinerItens>
            <Pesquisa>
                <div className="container">
                    <div className="form-group">
                        <label>Valor total dos livros: </label>
                        <span> {valorlivros.toFixed(2)}</span>
                    </div>
                    <div className="form-group">
                        <label>Valor do frete: </label>
                        <span> {valorfrete} </span>
                    </div>
                    <div className="form-group">
                        <label>Total da compra: </label>
                        <span> {totalcompra.toFixed(2)} </span>
                    </div>
                </div>

                <button id="btcompra" type="button" className="btn btn-success" onClick={Comprar}>COMPRAR</button>
            </Pesquisa>
        </Master>
    );
}