import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { ContainerCadastro } from './style.js';
import {LoginCaixa} from "../../components/LoginCaixa/LoginCaixa";
import nextGenBookAPI from "../../Service/NextGenBookApi";
import { Rodape } from "../../components/Rodape/Rodape";
import { CadastroCaixa } from "../../components/CadastroCaixa/CadastroCaixa";
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';


const api = new nextGenBookAPI();

export default function Cadastro(props){

    const [infos, setInfos] = useState(props.location.state);

    const [foto, setFoto] = useState();
    const [nome, setNome] = useState();
    const [nascimento, setNascimento] = useState(new Date().toISOString().substr(0, 10));
    const [genero, setGenero] = useState();
    const [masculino, setMasculino] = useState();
    const [feminino, setFeminino] = useState();
    const [email, setEmail] = useState();
    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();
    const [confirmarsenha, setConfirmarSenha] = useState();
    const [cpf, setCPF] = useState();
    const [celular, setCelular] = useState();

    const salvarClick = async () => {
        const resp = await api.cadastrar({
            
                nome: nome,
                nascimento: nascimento,
                genero: genero,
                masculino: masculino,
                feminino: feminino,
                email: email,
                usuario: usuario,
                senha: senha,
                confirmarsenha: confirmarsenha,
                cpf: cpf,
                celular: celular,
                foto: foto
            
        });
        toast.dark("Cadastro completo");
        handleReset();
    }

    const handleReset = () => {
        setNome();
        setNascimento(new Date());
        setGenero();
        setMasculino();
        setFeminino();
        setEmail();
        setUsuario();
        setSenha();
        setConfirmarSenha();
        setCPF();
        setCelular();
        setFoto();
    };

    return(
        <div id="cadastro">
            <ContainerCadastro>
            <CadastroCaixa>
                <div className="Caixa-Infomacoes">
                    
                    <div className="Informacoes">
                        <label className="Nome">Nome completo:</label>
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
                        <input type="text" className="Nome" value={nome} ></input>
                        <input type="date" className="Nascimento" value={nascimento}></input>
                        <select name="Genero" className="Genero" value={genero} >
                            
                            <option value="Masculino" value={masculino}>Masculino</option>
                            <option value="Feminuno" value={feminino}>Feminino</option>
                        </select>
                        <input type="text" className="Email" value={email}></input>
                        <input type="text" className="Usuario" value={usuario}></input>
                        <input type="password" className="Senha" value={senha}></input>
                        <input type="password" className="Confirmar-Senha" value={confirmarsenha}></input>
                        <input type="text" className="CPF" value={cpf}></input>
                        <input type="text" className="Celular" value={celular}></input>
                        
                    </div>
                        </div>   


                    <div className="Caixa-Imagem">
                        <div>
                            <label for='input-file'>
                                <span>Selecionar uma imagem de perfil</span>
                            </label>
                                <UploadPhoto />
                        </div>
                        <div className="button1">
                            <button type="button" class="btn btn-success" onClick={salvarClick} >Confirmar cadastro</button>
                        </div>
                    </div>

                    
            </CadastroCaixa>
            </ContainerCadastro>
            <Rodape/>
        </div>
    );
}