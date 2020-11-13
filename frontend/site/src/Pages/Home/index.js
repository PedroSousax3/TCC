import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Master from '../Master/index';

import { Home, ContainerPesquisa, ContainerPreview, Card, ItemCard } from './style.js'
import { ConteinerItens } from '../../Pages/Cliente/Carrinho/style.js'

import { } from '../Cliente/Carrinho/style.js'

import { ListPostFile, BuscarFoto } from '../../Service/fileApi.js';

export default function HomePage() {

    const [registros, setRegistros] = useState([]);
    const [consulta, setConsulta] = useState([]);
    const [listGeneros, setlistGeneros] = useState([]);
    const [posicao, setPosicao] = useState(0);

    const listarLivros = async () => {
        const result = await ListPostFile(posicao);
        setConsulta([...result.data]);
        setRegistros([...result.data]);

        let Generos = [];
        result.data.map(x =>
            x.generos.map(g => {
                if (Generos.indexOf(g) < 0)
                    Generos.push(g);
            })
        );

        setlistGeneros([...Generos]);
    }

    const buscarFoto = async (nome) => {
        const result = await BuscarFoto(nome);
        return result;
    }

    const removerAcentos = (valor) => {
        return valor.replace(/[^a-zA-Zs0-9 ]/g, "");
    }

    function filtrarNome(texto) {
        setRegistros(consulta.filter(x => removerAcentos(x.nome).toLowerCase().search(removerAcentos(texto).toLowerCase()) >= 0));
    }

    function filtrarGenero(texto) {
        setRegistros(consulta.filter(x => removerAcentos(x.nome).toLowerCase().search(removerAcentos(texto).toLowerCase()) >= 0));
    }

    function almentarPosicao() {
        setPosicao(posicao + 10)
    }

    function diminuirPosicao() {
        setPosicao(posicao - 10)
    }

    useEffect(() => {
        listarLivros();
    }, []);

    return (
        <Master>
            <Home>
                <ContainerPesquisa>
                    <div class="form-group" id="dvgenero" onChange={(x) => filtrarNome(x.target.value)} style={{ margin: "0px", width: "50vw" }}>
                        <input class="form-control" type="genero" placeholder="Pesquisar..." />
                    </div>
                </ContainerPesquisa>

                <ContainerPreview>
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
                <nav aria-label="Navegação de página exemplo">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Próximo</a></li>
                    </ul>
                </nav>
            </Home>
        </Master>
    );
}