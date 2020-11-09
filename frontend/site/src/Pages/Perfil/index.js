import React, { useState, useEffect, useRef } from 'react'

import { Link } from "react-router-dom";
import { ToastContainer, toast, useToast } from "react-toastify"
import Cookies from 'js-cookie';


import { BuscarFoto } from '../../Service/fileApi.js'


import { CaixaPerfil } from './style';
import Master from '../Master/index.js';


import nextGenBookAPI from "../../Service/NextGenBookApi"
const api = new nextGenBookAPI();


export default function Perfil(props) {
    const [infos, setInfos] = useState(props.location.state);
    const [informacoes, setInformacoes] = useState([]);

    const consultarPerfil = async () => {
        let response = await api.mostrarPerfil(Number(Cookies.get('id')));
        setInformacoes(response);
    }

    useEffect(() => {
        consultarPerfil();

        console.log(informacoes);
    }, [])

    return (
        <Master>
            <div>
                <div style={{ justifyContent: "center", alignItems: "center", paddingTop: "3%", display: "flex", flexDirection: "column" }}>
                    <div style={{ width: "80%", display: "flex", justifyContent: "flex-start", fontSize: "25px", fontWeight: "bold" }}>
                    </div>
                    <CaixaPerfil>
                        <div style={{ width: "100%", backgroundColor: "#98F0BB", display: "flex", borderRadius: "10px" }}>
                            <div className="foto" style={{ width: "20%" }}>
                                <div style={{ width: "80%" }}>
                                    <img src={BuscarFoto(informacoes.foto)} alt={`Foto de Perfil de ${informacoes.nome}`} style={{ borderRadius: "300px", height: "300px" }} />
                                </div>
                            </div>
                            <div className="informacoes" style={{ width: "60%", height: "35vh" }} >
                                <div style={{ marginTop: "10px" }}>NOME:{informacoes.nome} </div>
                                <div>DATA NASCIMENTO: {informacoes.nascimento} </div>
                                <div>GENERO: {informacoes.genero} </div>

                            </div>

                            <div className="botoes" style={{ width: "20%", height: "35vh" }}>
                                <div style={{ marginTop: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                    <Link to="/Alterar-Dados" className="btn btn-success" style={{ marginTop: "5px" }}>ALTERAR DADOS DA CONTA</Link>
                                    <Link to="/Endereco" className="btn btn-success" style={{ marginTop: "7px" }}>CADASTRAR ENDEREÇO</Link>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "50vh", borderRadius: "10px" }}></div>
                    </CaixaPerfil>
                    <ToastContainer />
                </div>
            </div>
        </Master>
    );
}