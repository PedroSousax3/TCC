import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Master from '../Master/index';

import { Home, ContainerPesquisa, ContainerPreview, Card, ItemCard } from './style.js'
import { ConteinerItens } from '../../Pages/Cliente/Carrinho/style.js'

import { } from '../Cliente/Carrinho/style.js'

import { ListPostFile, BuscarFoto } from '../../Service/fileApi.js';

export default function HomePage(e) {
    const [registros, setRegistros] = useState([]);
    const [consulta, setConsulta] = useState([]);
    const [nome, setNome] = useState("");    
    const [ qtdPost, setQtdPost ] = useState(0);

    const [inicio, setInicio] = useState(1);
    const [fim, setFim] = useState(10);

    const listarLivros = async () => {
        const result = await ListPostFile(inicio - 1, fim, nome);
        setConsulta([...result.data.posteres]);
        setRegistros([...result.data.posteres]);
        setQtdPost(result.data.qtd);
        console.log(inicio, fim);
    }

    function listarPress (event) {
        if (event.key === 'Enter') {
            listarLivros();
        }
    }

    const removerAcentos = (valor) => {
        return valor.replace(/[^a-zA-Zs0-9 ]/g, "");
    }

    function filtrarNome(texto) {
        setRegistros(consulta.filter(x => removerAcentos(x.nome).toLowerCase().search(removerAcentos(texto).toLowerCase()) >= 0));
    }

    function almentarPosicao() {
        setInicio(fim + 1);
        setFim(fim + 10);
        listarLivros();
    }

    function diminuirPosicao() {
        setInicio(inicio - 10);
        setFim(fim - 10);
        listarLivros();
    }

    useEffect(() => {
        almentarPosicao();
    }, []);

    return (
        <Master>
            <Home>
                <ContainerPesquisa>
                    <div className="form-group" id="dvgenero" style={{ margin: "0px", width: "50vw" }}>
                        <input className="form-control" id="filtro" type="genero" onChange={(x) => setNome(x.target.value)} onKeyPress={listarPress} placeholder="Pequisar ..." />
                    </div>
                </ContainerPesquisa>

                <ContainerPreview style = {{justifyContent : "center"}}>
                    {
                        registros.map(x =>
                            <Card className="card-livro" key={x.id} as={Link} to={{
                                pathname: "/MostrarLivro",
                                state: {
                                    idlivro: x.id
                                }
                            }}>
                                <div className="card-image" style={{ height: "300px", width: "170px" }}>
                                    <img src={BuscarFoto(x.nomeArquivo)} height="100%" width="100%" alt="" />
                                </div>
                                <div id="card-titulo">
                                    <h5 style={{ margin: "0px" }}>
                                        {x.nome}
                                    </h5>
                                </div>
                                <div className="card-focus">
                                </div>
                            </Card>
                        )
                    }
                </ContainerPreview>
                <nav aria-label="Navegação de página exemplo" style = {{ bottom: "0", position: "relative", marginTop : "35px", display: "flex", justifyContent : "center" }}>
                    <ul className="pagination">
                        <li className="page-item">
                            <button className="page-link"
                                    onClick={diminuirPosicao}>
                                Anterior
                            </button>
                        </li>

                        <li className="page-item">
                            {inicio} ................ {qtdPost}
                        </li>

                        <li className="page-item">
                            <button className="page-link"
                                    onClick={almentarPosicao}>
                                Próximo
                            </button>
                        </li>
                    </ul>
                </nav>
            </Home>
        </Master>
    );
}