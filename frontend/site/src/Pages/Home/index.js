import React, { useState, useEffect } from 'react'

import Master from '../Master/index';

import { Home, ContainerPesquisa, ContainerPreview, ItemCard } from './style.js'
import { ConteinerItens } from '../../Pages/Cliente/Carrinho/style.js'

import { } from '../Cliente/Carrinho/style.js'


import { ListarLivrosApi } from '../../Service/LivroApi.js';

export default function HomePage () {

    const [ registros, setRegistro ] = useState([]);
    const [ posicao, setPosicao ] = useState(0);

    async function listarLivros() {
        const result = await ListarLivrosApi(posicao);
        setRegistro([...result.data]);
    }

    function almentarPosicao(){
        setPosicao(posicao + 50)
        console.log(posicao)
    }

    function diminuirPosicao(){
        setPosicao(posicao - 50)
        console.log(posicao)
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
                    
                </ContainerPreview>
            </Home>
        </Master>
    );
}