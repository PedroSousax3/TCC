import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import {Menu} from "../../components/Menu/Menu";
import { ContainerCadastro } from './style.js';
import {LoginCaixa} from "../../components/LoginCaixa/LoginCaixa";
import nextGenBookAPI from "../../Service/NextGenBookApi";
import { Rodape } from "../../components/Rodape/Rodape";
import { CadastroCaixa } from "../../components/CadastroCaixa/CadastroCaixa";


export default function Cadastro(props){

    const [infos, setInfos] = useState(props.location.state);

    const [foto, setFoto] = useState();

    return(
        <div id="cadastro">
            <Menu> <img src="logo-pequena.png" className="LogoMenu"/> </Menu>
            <ContainerCadastro>
            <CadastroCaixa>
                <div className="Caixa-Infomacoes">
                    
                    <div className="Informacoes">
                        <label className="Nome">Nome:</label>
                        <label className="Nascimento">Nascimento:</label>
                        <label className="Genero">Genero:</label>
                        <label className="Email">Email:</label>
                        <label className="Usuario">Usuario:</label>
                        <label className="Senha">Senha:</label>
                        <label className="Confirmar-Senha">Confirmar Senha:</label>
                        <label className="CPF">CPF:</label>
                        <label className="Celular">Celular:</label>
                    </div>

                    <div className="Inputs">
                        <input type="text" className="Nome"></input>
                        <input type="text" className="Nascimento"></input>
                        <select name="Genero" className="Genero">
                            
                            <option value="Masculino">Masculino</option>
                            <option value="Feminuno">Feminino</option>
                            
                        </select>
                        <input type="text" className="Email"></input>
                        <input type="text" className="Usuario"></input>
                        <input type="text" className="Senha"></input>
                        <input type="text" className="Confirmar-Senha"></input>
                        <input type="text" className="CPF"></input>
                        <input type="text" className="Celular"></input>
                        
                    </div>
                </div>     
                <div className="Caixa-Imagem">
                <label for='input-file'>
                    Selecionar uma imagem de perfil
                </label>
                    <input id="input-file" type="file" value="" onChange={e => setFoto(e.target.value.files[0])}></input>
                </div>
            </CadastroCaixa>
            </ContainerCadastro>
            <Rodape/>
        </div>
    );
}