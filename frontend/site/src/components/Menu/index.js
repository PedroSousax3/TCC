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
                <Link to = "/">
                    <img src={logo} alt = "Next Geen Books" className="LogoMenu"/> 
                </Link>

                <ConteinerItensMenu>
                    <li>
                        <Link to = "/Favoritos" className="texto">Favoritos</Link>
                        <Link to = "/Favoritos" className="fas fa-heart"></Link>
                    </li>
                    <li>
                        <Link to = "/Carrinho" className="texto">Carrinho</Link>
                        <Link to = "/Carrinho" className="fas fa-shopping-cart"></Link>
                    </li>
                    <li>
                        <Link to = "/MinhasCompras" className="texto">Minhas Compras</Link>
                        <Link to = "/MinhasCompras" className="far fa-handshake"></Link>
                    </li>
                    <li>
                        <Link to = "/Perfil" className="texto">Perfil</Link>
                        <Link to = "/Perfil" className="far fa-user-circle"></Link>
                    </li>
                </ConteinerItensMenu>
            </MenuStyled>
            <MenuSpace theme={{sc_height : "60px"}}/>
        </div>
    );
}