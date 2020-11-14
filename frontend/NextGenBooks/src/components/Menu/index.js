import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import { Link, useHistory } from 'react-router-dom'
import logo from '../../Assets/images/logo/logo-pequena.png';
import { MenuStyled, ConteinerItensMenu } from './style.js';

import './menu.css';

export default function Menu() {

    const navegacao = useHistory();

    const sairPerfil = () => {
        Cookies.remove('id');
        Cookies.remove('token');
        Cookies.remove('usuario');
        Cookies.remove('perfil');
        navegacao.push("/");
    }

    return (
        <div className="menu">
            <header id="cima">
                <div className="itens">
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="NEXT-GEN-BOOKS" />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">
                                Inicio
                             </Link>
                        </li>
                        <li>
                            <Link to="/Favoritos">
                                Minha Lista
                             </Link>
                        </li>
                        <li>
                            <Link to="/Carrinho">
                                Carrinho
                             </Link>
                        </li>
                        <li>
                            <Link to="/MinhasCompras">
                                Compras
                             </Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown">
                    <i className="far fa-user-circle" data-toggle="dropdown"></i>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Link className="dropdown-item" to="/Acesso">Acessar</Link>
                        <Link className="dropdown-item" to="/Perfil">Minha Area</Link>
                        <button className="dropdown-item" onClick={sairPerfil}>Sair</button>
                    </div>
                </div>
            </header>

            {/*Menu Responsivo*/}
            <header id="baixo">
                <ul>
                    <li>
                        <Link to="/">
                            <i className="fas fa-home"></i>
                            <div className="titulo-icone">Inicio</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/filme">
                            <i className="fas fa-film"></i>
                            <div className="titulo-icone">Filmes</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fas fa-play-circle"></i>
                            <div className="titulo-icone">Favoritos</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fas fa-heart"></i>
                            <div className="titulo-icone">Carrinho</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <i className="fas fa-bars"></i>
                            <div className="titulo-icone">Compras</div>
                        </Link>
                    </li>
                </ul>
            </header>
            {/*Menu Responsivo*/}
        </div>
    );


    /*const [ perfil, setPerfil ] = useState(false);
    useEffect(
        () => setPerfil(Cookies.get('token') !== null && Cookies.get('token') !== undefined && Cookies.get("token") !== ""), []
    );
    return (
        <div>
            <MenuStyled> 
                <Link to = "/">
                    <img src={logo} alt = "Next Geen Books" className="LogoMenu"/> 
                </Link>

                <ConteinerItensMenu>
                    {
                        perfil  ?
                                    <li>
                                        <Link to = "/Favoritos" className="texto">Favoritos</Link>
                                        <Link to = "/Favoritos" className="fas fa-heart"></Link>
                                    </li>
                                :
                                    <>
                                    </>
                    }
                     {
                        perfil  ?
                                    <li>
                                        <Link to = "/Carrinho" className="texto">Carrinho</Link>
                                        <Link to = "/Carrinho" className="fas fa-shopping-cart"></Link>
                                    </li>
                                :
                                    <>
                                    </>
                    }
                     {
                        perfil  ?
                                    <li>
                                        <Link to = "/MinhasCompras" className="texto">Minhas Compras</Link>
                                        <Link to = "/MinhasCompras" className="far fa-handshake"></Link>
                                    </li>
                                :
                                    <>
                                    </>
                    }
                    <li>
                        {
                            perfil  ?
                                        <>
                                            <Link to = "/Perfil" className="texto">Meu Perfil</Link>
                                            <Link to = "/Perfil" className="far fa-user-circle"></Link>
                                        </>
                                    :
                                        <>
                                            <Link to = "/Acesso" className="texto">Acessar</Link>
                                            <Link to = "/Acesso" className="far fa-user-circle"></Link>
                                        </>
                        }
                    </li>
                </ConteinerItensMenu>
            </MenuStyled>
        </div>
    );*/
}