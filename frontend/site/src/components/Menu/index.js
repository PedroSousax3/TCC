import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../Assets/images/logo/logo-pequena.png';
import { MenuStyled, ConteinerItensMenu } from './style.js';

import { MenuSpace } from '../Utils/index.js';

export default function Menu(props){
    return (
        <div>
            <MenuSpace theme={{sc_height : "60px"}}/>
            <MenuStyled> 
                <Link to = "/Master">
                    <img src={logo} alt = "Next Geen Books" className="LogoMenu"/> 
                </Link>

                <ConteinerItensMenu>
                    <li>
                        <Link to = "/Favoritos" class="texto">Favoritos</Link>
                        <Link to = "/Master" class="fas fa-heart"></Link>
                    </li>
                    <li>
                        <Link to = "/Carrinho" class="texto">Carrinho</Link>
                        <Link to = "/Master" class="fas fa-shopping-cart"></Link>
                    </li>
                    <li>
                        <Link to = "/MinhasCompras" class="texto">Minhas Compras</Link>
                        <Link to = "/Master" class="far fa-handshake"></Link>
                    </li>
                    <li>
                        <Link to = "/Perfil" class="texto">Perfil</Link>
                        <Link to = "/Perfil" class="far fa-user-circle"></Link>
                    </li>
                </ConteinerItensMenu>
            </MenuStyled>
        </div>
    );
}