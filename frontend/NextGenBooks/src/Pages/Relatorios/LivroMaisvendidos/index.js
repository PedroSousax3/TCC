import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Master from '../../Master/index.js';
import funcaoApi from '../../../Service/NextGenBookApi.js';

const api = new funcaoApi();
export default function LivroMaisvendidos() {
    const [registro, setRegistro] = useState([]);
    const [qtditem, setQtdItem] = useState(0);

    async function listarVendas() {
        const response = await api.livroMaisVendidosApi();
        if (response.length > 0) {
            setRegistro([...response])
            setQtdItem(response.length);
        }
    }


    useEffect(
        () => listarVendas(),
        []
    );

    return (
        <Master>
            <ContainerLivroMaisvendidos>
                <h1>Livros Mais Vendidos</h1>
                <table className="table table-striped table-dark">
                    <thead>
                        <th>LIVRO</th>
                        <th>LANÇAMENTO</th>
                        <th>QUANTIDADE VENDIDA</th>
                        <th>VALOR UNITARIO</th>
                        <th>TOTAL VENDIDO</th>
                        <th>VER MAIS</th>
                    </thead>
                    <tbody>
                        {
                            registro.map(x =>
                                <tr>
                                    <th scope="row">{qtditem}</th>
                                    <td>{x.nome_livro}</td>
                                    <td>{x.lancamento}</td>
                                    <td>{x.qtd}</td>
                                    <td>{x.valor_venda}</td>
                                    <td>{x.total_vendido}</td>
                                    {() => setQtdItem(qtditem - 1)}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </ContainerLivroMaisvendidos>
        </Master>
    )
}

const ContainerLivroMaisvendidos = styled.div`
    display:flex;
    min-height : calc(100vh - 45px);
    width : 100vw;
    padding : 20px;
`;