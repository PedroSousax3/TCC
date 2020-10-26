import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import Master from '../Master/index.js';


//import {LoginCaixa} from "../../components/LoginCaixa/LoginCaixa";
import nextGenBookAPI from "../../Service/NextGenBookApi";
import { CaixaImage, CaixaInformacoes, CadastroCaixa } from './style.js';

import UploadPhoto from '../../components/UploadPhoto/UploadPhoto';

const api = new nextGenBookAPI();



export default function Cadastro(props) {

    const [infos, setInfos] = useState(props.location.state);

    const navegacao = useHistory();

    const [foto, setFoto] = useState();
    const [nome, setNome] = useState("");
    const [nascimento, setNascimento] = useState("");
    const [genero, setGenero] = useState('');
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarsenha, setConfirmarSenha] = useState("");
    const [cpf, setCPF] = useState("");
    const [celular, setCelular] = useState("");
    const [ file, setFile ] = useState();
    

    const AdicionarFoto = (arquivo) => {
        setFoto(arquivo);
        setFile(URL.createObjectURL(arquivo));
    }

    const salvarClick = async () => {
        try {
            const resp = await api.cadastrar({
                nome: nome,
                nascimento: nascimento,
                genero: genero,
                usuario: usuario,
                senha: senha,
                confirmarsenha: confirmarsenha,
                cpf: cpf,
                celular: celular,
                foto: foto
            });
                toast.dark("Cadastro completo");
                handleReset();
                navegacao.push("/Login", resp.data);;
        }
        catch(e) {
            toast.error(e.response.data.erro);
        }
    }

    const handleReset = () => {
        setNome("");
        setNascimento(new Date());    
        setGenero('');   
        setUsuario("");
        setSenha("");
        setConfirmarSenha("");
        setCPF("");
        setCelular("");
        setFoto();
    };           

    return(
        <Master>
            <h2>Cadastro de Funcionario</h2>
            <CadastroCaixa>
                <CaixaInformacoes>
                    <div className="form-group">
                        <label className="Nome">Nome completo:</label>
                        <input className="form-control" type="text" onChange={(n) => setNome(n.target.value)} />
                    </div>
                    
                    <div className="form-group">
                        <label className="Nascimento">Nascimento:</label>
                        <input className="form-control" type="date" onChange={(n) => setNascimento(n.target.value)}/>
                    </div>
                    
                    <div className="form-group">
                        <label for="genero">Genero:</label>
                        <input className="form-control" onChange={(x) => setGenero(x.target.value)} list="generos" name="genero" id="genero" />
                        <datalist id="generos">
                            <option value="Masculino"  />
                            <option value="Feminuno" />
                            <option value="Outro" />
                        </datalist>
                    </div>
                    
                    <div className="form-group">
                        <label className="Usuario">Usuario:</label>
                        <input className="form-control" type="text" onChange={(n) => setUsuario(n.target.value)}/>
                    </div>
                    
                    <div className="form-group">
                        <label className="Senha">Senha:</label>
                        <input className="form-control" type="password" onChange={(n) => setSenha(n.target.value)}/>
                    </div>
                    
                    <div className="form-group">
                        <label className="Confirmar-Senha">Confirmar Senha:</label>
                        <input className="form-control" type="password" onChange={(n) => setConfirmarSenha(n.target.value)}/>
                    </div>
                    
                    <div className="form-group">
                        <label className="CPF">CPF:</label>
                        <input className="form-control" type="text" onChange={(n) => setCPF(n.target.value)}/>
                    </div>
                    
                    <div className="form-group">
                        <label className="Celular">Celular:</label>
                        <input className="form-control" type="text" onChange={(n) => setCelular(n.target.value)}/>
                    </div>
                </CaixaInformacoes>  

                <CaixaImage>
                    <label for='input-file'>
                        <span>Selecionar uma imagem de perfil</span>
                        <br />
                        <input type="file" id="img-input" name="image"
                            onChange={e => AdicionarFoto(e.target.files[0])}
                        />
                    </label>
                    
                    <div className="image-preview" id="img-container">
                        <img src={file} alt="" id="preview"></img>
                    </div>
                    <div className="button1">
                        <button type="button" className="btn btn-success" onClick={salvarClick} >Confirmar cadastro</button>
                    </div>
                </CaixaImage>              
            </CadastroCaixa>
        </Master>
    );
}