import React from 'react'
import styled from 'styled-components'

import Master from '../../Master/index.js';

export default function RelatorioDevolucao () {
    return (
        <Master>
            <ContainerRelatorioDevolucao>
                
            </ContainerRelatorioDevolucao>
        </Master>
    )
}

const ContainerRelatorioDevolucao = styled.div`
    display:flex;
    min-height : calc(100vh - 45px);
    width : 100vw;
    background-color:white;
`;