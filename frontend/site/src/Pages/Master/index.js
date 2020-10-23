import React from 'react';
import Menu from '../../components/Menu/index'
import { MasterPage, ContainerPage } from './style.js';

import { MenuSpace } from '../../components/Utils/index.js';

export default function Master(props) {
    return (
        <MasterPage>
            <Menu />
            
            <ContainerPage >
                {props.children}
            </ContainerPage>
        </MasterPage>
    );
}