import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { BuscarFoto } from '../../../Service/fileApi';
import LoadingBar from 'react-top-loading-bar'

//Mastes
import Master from '../../Master/index.js';

import { toast, ToastContainer } from "react-toastify";
import { alterarTituloPagina } from '../../../components/Utils/mask.js'


import { Card, Title, Container, ImagemCard } from '../../../components/Card/index.js'

//Api
import { listarApi, removerFav } from '../../../Service/favoritosApi.js'
import Cookies from 'js-cookie';

export default function EsqueciSenha() {

    const [registros, setRegistros] = useState([]);
    const [idCliente, setIdCliente] = useState(Number(Cookies.get('id')));
    const ref = useRef(null);
    const listarFavoritos = async () => {
        try {
            ref.current.continuousStart();
            const response = await listarApi(idCliente);
            setRegistros([...response]);
            console.log(response);
        }
        catch (ex) {
            toast.error(ex.response.erro)
        }
        finally {
            ref.current.complete();
        }
    }

    const removerFavorito = async (id) => {
        try {
            await removerFav(id);

            toast.success("Livro removido dos Favoritos");

            await listarFavoritos();
        }
        catch (ex) {
            toast.error(ex.response.erro)
        }
    }

    useEffect(() => {
        alterarTituloPagina("Minha Lista");
        listarFavoritos();
    }, []);

    return (
        <Master>
            <ToastContainer />
            <Favoritos>
                <LoadingBar
                    color='#f11946'
                    ref={ref}
                />
                <h1>Lista de Favoritos</h1>
                {registros.map(x =>
                    <Card theme={{ bg_color: "white" }}>
                        <Title theme={{ color: "black", bg_color: "rgba(0, 0, 0, 0.1)" }}>{x.nome}</Title>
                        <Container>
                            <div className="column item" ke={x.id}>
                                <div>
                                    <h5>
                                        Autor(a): {x.atores}
                                    </h5>
                                </div>
                                <div>
                                    <h5>
                                        Editora: {x.editora}
                                    </h5>
                                </div>
                                <div>
                                    <h5>
                                        Descrição:
                                        </h5>
                                    <p>
                                        {
                                            (x.descricao.length > 300)
                                                ? x.descricao.substr(0, x.descricao.indexOf(".", 300) + 1) + "..." : x.descricao
                                        }
                                    </p>
                                    <div>
                                    </div>
                                    <h5>
                                        Quantidade Disponível: {x.qtd}
                                    </h5>
                                </div>
                                <div className="button-card">
                                    <Link to={{
                                        state: {
                                            idlivro: x.livro
                                        },
                                        pathname: "/MostrarLivro"
                                    }}>Ver detalhes</Link>

                                    <button className="btn btn-danger" onClick={() => removerFavorito(x.id)}>Remover Livro</button>
                                </div>
                            </div>
                        </Container>
                    </Card>
                )}
            </Favoritos>
        </Master>
    );
}

const Favoritos = styled.div`
    display: flex;
    flex-direction: column;

    padding: 10px 10%;

    & > h1 {
        color : white;
    }

    & * {
        box-sizing: border-box;
    } 

    & p {
        word-break: break-word;
    } 

    @media screen and (max-width: 380px)
    {
        & {
            padding: 10px 5px;
        }
    }
`;