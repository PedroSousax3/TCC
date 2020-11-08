import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Master from '../Master/index';

import { Home, ContainerPesquisa, ContainerPreview, Card, ItemCard } from './style.js'
import { ConteinerItens } from '../../Pages/Cliente/Carrinho/style.js'

import { } from '../Cliente/Carrinho/style.js'

import { ListPostFile, BuscarFoto } from '../../Service/fileApi.js';

export default function HomePage () {

    const [ registros, setRegistro ] = useState([]);
    const [ posicao, setPosicao ] = useState(0);

    const listarLivros = async () => {
        const result = await ListPostFile(posicao);
        setRegistro([...result.data]);
    }
    
    const buscarFoto = async (nome) => {
        const result = await BuscarFoto(nome);
        return result;
    }

    function almentarPosicao(){
        setPosicao(posicao + 50)
        console.log(posicao)
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
                        <datalist id="genero">
                            <option value="PEDRO" />
                        </datalist>
                    </div>
                    <div class="form-group" id="dvgenero" style={{margin:"0px", width: "50vw"}}>
                        <input class="form-control" type="genero" placeholder="Pequisar ..." />
                    </div>
                </ContainerPesquisa>

                <ContainerPreview>
                    {
                        registros.map(x =>
                            <Card key={x.id} as={Link} to = {{
                                pathname : "/MostrarLivro",
                                state : {
                                    idlivro : x.id
                                }
                            }}>
                                <div id="card-image">
                                    <img src={BuscarFoto(x.nomeArquivo)} height="300px" alt="" />
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