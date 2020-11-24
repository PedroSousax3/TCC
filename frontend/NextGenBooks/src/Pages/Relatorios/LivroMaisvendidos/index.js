import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Chart from 'react-google-charts'

import Master from '../../Master/index.js';
import funcaoApi from '../../../Service/NextGenBookApi.js';
const api = new funcaoApi();

//https://react-google-charts.com/controls-and-dashboard/number-range-filter-control

export default function LivroMaisvendidos() {
    const [registro, setRegistro] = useState([]);
    const [dados, setDados] = useState([]);

    useEffect(
        () => {
            async function listarVendas() {
                const response = await api.livroMaisVendidosApi();
                if (response.length > 0) {
                    setRegistro([...response])
                }
                let list = [["Livros", "Total Vendido"]]
                response.map(x => list.push([String(x.nome_livro), Number(x.total_vendido)]))
                setDados([...list]);
                console.log(list);
            }
            listarVendas();
        }, []
    );

    function imprimirRelatorio() {
        const container = document.getElementById("relatotio").innerHTML;

        let screen = `
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />            
            ${container}
        `;

        const tela = window.open('about:blank');

        tela.document.write(screen);
        tela.window.print();
        tela.window.close();
    }


    return (
        <Master>
            <ContainerLivroMaisvendidos id="relatotio">
                <h1>Livros Mais Vendidos</h1>
                <table className="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>LIVRO</th>
                            <th>LANÇAMENTO</th>
                            <th>QUANTIDADE VENDIDA</th>
                            <th>VALOR UNITARIO</th>
                            <th>TOTAL VENDIDO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            registro.map(x =>
                                <tr key={x.id}>
                                    <th scope="row">{x.nome_livro}</th>
                                    <td>{new Date(x.lancamento).toLocaleDateString()}</td>
                                    <td>{x.qtd}</td>
                                    <td>R$ {x.valor_venda}</td>
                                    <td>R$ {x.total_vendido}</td>
                                    <td>
                                        <Link
                                            className="btn btn-warning"
                                            to={{
                                                state: {
                                                    idlivro: x.idlivro
                                                },
                                                pathname: "/MostrarLivro"
                                            }}
                                        >
                                            Ver Detalhes
                                        </Link>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

                <Chart
                    width={800}
                    height={600}
                    chartType="ColumnChart"

                    loader={<div>Loading Chart</div>}
                    data={[...dados]}
                    rootProps={{ 'data-testid': '6' }}
                    chartPackages={['corechart', 'controls']}
                    options={{
                        hAxis: {
                            title: 'Livros Mais Vendidos',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'Livros',
                        }
                    }}
                    controls={[
                        {
                            controlType: 'StringFilter',
                            options: {
                                filterColumnIndex: 0,
                                matchType: 'any', // 'prefix' | 'exact',
                                ui: {
                                    label: 'Filtrar',
                                },
                            },
                        },
                    ]}
                />

                <div className="no-print" style={{ margin: "60px 10px 0px auto" }}>
                    <button type="button" className="btn btn-primary" onClick={imprimirRelatorio}>Imprimir</button>
                </div>
            </ContainerLivroMaisvendidos>
        </Master >
    )
}

const ContainerLivroMaisvendidos = styled.div`
    display:flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    color: white;
    min-height : calc(100vh - 45px);
    padding : 20px;
`;