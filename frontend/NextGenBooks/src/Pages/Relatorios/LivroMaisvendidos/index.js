import React from 'react'
import styled from 'styled-components'

import Master from '../../Master/index.js';

export default function LivroMaisvendidos () {
    return (
        <Master>
            <ContainerLivroMaisvendidos>
                
            </ContainerLivroMaisvendidos>
        </Master>
    )
}

const ContainerLivroMaisvendidos = styled.div`
    display:flex;
    min-height : calc(100vh - 45px);
    width : 100vw;
    background-color:white;
`;