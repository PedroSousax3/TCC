import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";

//Mastes
import Master from '../../Master/index.js';

import { Card, Title, Container, ImagemCard } from '../../../components/Card/index.js'

//Api
import { listarApi } from '../../../Service/favoritosApi.js'

export default function EsqueciSenha(){

    const [ registros, setRegistros ] = useState([]);

    const listarFavoritos = async (idcliente) => {
        const response = await listarApi(idcliente);
        setRegistros([...response]);
        console.log(response);
    }

    useEffect(() => {  
        listarFavoritos(1);
    }, []);

    return(
       <Master>
           <Favoritos>
                <h1>Lista de Favoritos</h1>
                {registros.map(x =>    
                    <Card theme={{bg_color : "#98F0BB"}}>
                        <Title theme={{color: "black", bg_color : "rgba(0, 0, 0, 0.1)"}}>{x.nome}</Title>
                        <Container>
                            <ImagemCard alt="Capa do Livro" src=""/>
                            <div className="column item">
                                    <div>
                                        <h5>
                                            Autors: 
                                        </h5>
                                        <p>
                                            {x.atores}
                                        </p>
                                    </div>
                                    <div>
                                        <h5>
                                            Editora: 
                                        </h5>
                                        <p>
                                            {x.editora}
                                        </p>
                                    </div>
                                    <div>
                                        <h5>
                                            Descrição: 
                                        </h5>
                                        <p>
                                            {x.descricao}
                                        </p>
                                    <div>
                                    </div>
                                        <h5>
                                            Quantidade Disponivel: 
                                        </h5>
                                        <p>
                                            {x.qtd}
                                        </p>
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