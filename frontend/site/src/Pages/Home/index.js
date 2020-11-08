import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Master from '../Master/index';

import { Home, ContainerPesquisa, ContainerPreview, Card, ItemCard } from './style.js'
import { ConteinerItens } from '../../Pages/Cliente/Carrinho/style.js'

import { } from '../Cliente/Carrinho/style.js'

import { ListPostFile, BuscarFoto } from '../../Service/fileApi.js';

export default function HomePage () {

    const [ registros, setRegistros ] = useState([]);
    const [ consulta, setConsulta ] = useState([]);
    const [ listGeneros, setlistGeneros ] = useState([]);
    const [ posicao, setPosicao ] = useState(0);
    
    const listarLivros = async () => {
        const result = await ListPostFile(posicao);
        setConsulta([...result.data]);
        setRegistros([...result.data]);

        let Generos = [];
        result.data.map(x =>
            x.generos.map(g => {
                if(Generos.indexOf(g) < 0)
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

    function almentarPosicao(){
        setPosicao(posicao + 50)
    }

    function diminuirPosicao(){
        setPosicao(posicao - 50)
    }

    useEffect(() => {
        listarLivros();
    },[]);

    return (
        <Master>
            <Home>
                <ContainerPesquisa>
                    <div class="form-group" id="dvsearch" style={{margin:"0px"}}>
                        <input class="form-control" list="genero" placeholder="Genero" />
                        <datalist id="genero" onChange={(x) => x}>
                            {
                                listGeneros.map(x =>
                                    <option value={x} />
                                )
                            }
                        </datalist>
                    </div>
                    <div class="form-group" id="dvgenero" onChange={(x) => filtrarNome(x.target.value)} style={{margin:"0px", width: "50vw"}}>
                        <input class="form-control" type="genero" placeholder="Pequisar ..." />
                    </div>
                </ContainerPesquisa>

                <ContainerPreview>
                    {
                        registros.map(x =>
                            <Card className="card-livro" key={x.id} as={Link} to = {{
                                pathname : "/MostrarLivro",
                                state : {
                                    idlivro : x.id
                                }
                            }}>
                                <div id="card-image" style={{height : "300px", width: "170px"}}>
                                    <img src={BuscarFoto(x.nomeArquivo)} height="100%" width="100%" alt="" />
                                </div>
                                <div id="card-titulo">
                                    <h5 style={{margin : "0px"}}>
                                        {x.nome}
                                    </h5>
                                </div>
                            </Card>  
                        )
                    }
                </ContainerPreview>
            </Home>
        </Master>
    );
}