import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { ContainerCadastro } from './style.js';
import logo from '../../Assets/images/logo/logo-pequena.png';
import {LoginCaixa} from "../../components/LoginCaixa/LoginCaixa";
import nextGenBookAPI from "../../Service/NextGenBookApi";
import { Rodape } from "../../components/Rodape/Rodape";
import { CadastroCaixa } from "../../components/CadastroCaixa/CadastroCaixa";
import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';


const api = new nextGenBookAPI();



export default function Cadastro(props){

    const [infos, setInfos] = useState(props.location.state);

    const [foto, setFoto] = useState();
    const [nome, setNome] = useState(props.location.state.nome);
    const [nascimento, setNascimento] = useState("");
    const [genero, setGenero] = useState("");
    const [masculino, setMasculino] = useState("");
    const [feminino, setFeminino] = useState("");
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarsenha, setConfirmarSenha] = useState("");
    const [cpf, setCPF] = useState("");
    const [celular, setCelular] = useState("");

    const navegacao = useHistory();


    const salvarClick = async () => {
        try{
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
        navegacao.push("/", resp.data);
        }catch(e){
            toast.error(e.response.data.erro);
        }
    }

    const handleReset = () => {
        setNome();
        setNascimento(new Date());
        setGenero();
        setMasculino();
        setFeminino();
        
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
            <div className="Menu-Top">
                <Link to = "/Master">
                    <img src={logo} alt = "Next Geen Books" className="LogoMenu"/> 
                </Link>
            </div>
            
            <CadastroCaixa>
                <div className="Caixa-Infomacoes">
                    
                    <div className="Informacoes">
                        <label className="Nome">Nome completo:</label>
                        <label className="Nascimento">Nascimento:</label>
                        <label className="Genero">Genero:</label>
                        
                        <label className="Usuario">Usuario:</label>
                        <label className="Senha">Senha:</label>
                        <label className="Confirmar-Senha">Confirmar Senha:</label>
                        <label className="CPF">CPF:</label>
                        <label className="Celular">Celular:</label>
                    </div>

                    <div className="Inputs">
                        <input type="text" className="Nome" onChange={(n) => setNome(n.target.value)} ></input>
                        <input type="date" className="Nascimento" onChange={(n) => setNascimento(n.target.value)}></input>
                        <select name="Genero" className="Genero" onChange={(n) => setGenero(n.target.value)} >
                            
                            <option value="Masculino" onChange={(n) => setMasculino(n.target.value)}>Masculino</option>
                            <option value="Feminuno" onChange={(n) => setFeminino(n.target.value)}>Feminino</option>
                        </select>
                        
                        <input type="text" className="Usuario" onChange={(n) => setUsuario(n.target.value)}></input>
                        <input type="password" className="Senha" onChange={(n) => setSenha(n.target.value)}></input>
                        <input type="password" className="Confirmar-Senha" onChange={(n) => setConfirmarSenha(n.target.value)}></input>
                        <input type="text" className="CPF" onChange={(n) => setCPF(n.target.value)}></input>
                        <input type="text" className="Celular" onChange={(n) => setCelular(n.target.value)}></input>
                        
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