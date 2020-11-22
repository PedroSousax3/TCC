import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import Master from '../Master/index';
import LoadingBar from 'react-top-loading-bar'

import { Home, ContainerPesquisa, ContainerPreview, Card } from './style.js'

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

import { alterarTituloPagina } from '../../components/Utils/mask.js'

import { ListPostFile, BuscarFoto } from '../../Service/fileApi.js';
import '../../components/pesquisa/pesquisa.css';
import { toast } from 'react-toastify';

export default function HomePage(e) {
    const [consulta, setConsulta] = useState([]);
    
    const [inicio, setInicio] = useState(0);
    const [nome, setNome] = useState("");
    
    const [qtdPost, setQtdPost] = useState(0);

    const ref = useRef(null);
    
    const listarLivros = async () => {
        try  {
            ref.current.continuousStart();
            const result = await ListPostFile(inicio, 10, nome);
            setConsulta([...result.data.posteres]);
            setQtdPost(result.data.qtd);
        }
        catch (ex) {
            toast.info(ex.response.data.erro)
        }
        finally {
            ref.current.complete();
        }
    }

    async function listarPress(event) {
        if (event.key === 'Enter') {
            setInicio(0);
        }
    }

    function diminuirPosicao() {
        if (inicio - 10 <= 0) {
            setInicio(0);
        }
        else 
            setInicio(inicio - 10);
    }

    function aumentarPosicao () {
        if (inicio + 10 > qtdPost)
            setInicio(qtdPost - 10);
        else
            setInicio(inicio + 10);
    } 

    useEffect(
        () => { 
            listarLivros() 
        }, 
        [inicio]
    );
    alterarTituloPagina("Inicio");
    return (
        <Master>
            <LoadingBar
                color='#f11946'
                ref = {ref}
            />
            <Home>
                <ContainerPesquisa className="pesquisa">
                    {/*
                        <div className="genero">
                            <select>
                                <option valur="Todos">Genero</option>
                                <option value="Ação">Ação</option>
                                <option value="Aventura">Aventura</option>
                                <option value="Drama">Drama</option>
                            </select>
                        </div>
                    */}
                    <div className="nome" style={{width : "100%"}}>
                        <input style={{width : "100%"}} type="text" onChange={(x) => setNome(x.target.value)} onKeyPress={listarPress} placeholder="Pequisar ..." />
                    </div>
                </ContainerPesquisa>

                    {/*
                        <div className="form-group" id="dvgenero" style={{ margin: "0px", width: "50vw" }}>
                            <input className="form-control" id="filtro" type="genero"  />
                        </div>
                    */}

                <ContainerPreview style={{ justifyContent: "center" }}>
                    {
                        consulta.map(x =>
                            <Card className="card-livro" style={{textDecoration : "none"}} key={x.id} as={Link} to={{
                                pathname: "/MostrarLivro",
                                state: {
                                    idlivro: x.id
                                }
                            }}>
                                <div className="card-image" style={{ height: "310px" }}>
                                    <img src={BuscarFoto(x.nomeArquivo)} height="100%" width="100%" alt="" />
                                </div>
                                <div className="card-focus" style = {{ width : "100%    "}}>
                                    <div id="card-titulo" style={{ width : "100%" }}>
                                        <h5 style={{ margin: "0px", textAlign : "center" }}>
                                            {x.nome}
                                        </h5>
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                </ContainerPreview>
                <nav aria-label="Navegação de página exemplo" style={{ bottom: "0", position: "relative", marginTop: "35px", display: "flex", justifyContent: "center" }}>
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link"
                                onClick={diminuirPosicao}>
                                Anterior
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link"
                                onClick={aumentarPosicao}>
                                Próximo
                            </button>
                        </li>
                    </ul>
                </nav>
            </Home>
        </Master>
    );
}