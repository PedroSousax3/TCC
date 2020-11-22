import React, { Component, useEffect } from 'react'
import styled from 'styled-components'

import { alterarTituloPagina } from '../../components/Utils/mask.js'

import Master from '../Master/index.js'

import background from '../../Assets/images/NotFound.jpg'

export default function NotFound() {
    alterarTituloPagina("Não Encontrada")
    return (
        <Master>
            <ComponentNotFound>
                <h1>Pagina não encontrada</h1>
            </ComponentNotFound>
        </Master>
    );
}

export const ComponentNotFound = styled.div`
    height: 100vh;
    width: 100%;
    background-color: white;  
    
    background-image : url(${background});   
    background-attachment: fixed;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: center;

    & > h1 {
        position : fixed;
        top: 65px;
        padding : 10px;
    }
`;