import React from 'react';
import Menu from '../../components/Menu/index'
import { MasterPage, ContainerPage } from './style.js';

import { MenuSpace } from '../../components/Utils/index.js'

export default function Master(props) {
    return (
        <MasterPage>
            <MenuSpace theme={{sc_height : "60px"}}/>
            <Menu />
            
            <ContainerPage>
                {props.children}
            </ContainerPage>
            <MenuSpace id="menu-baixo" theme={{sc_height : "60px"}}/>
        </MasterPage>
    );
}