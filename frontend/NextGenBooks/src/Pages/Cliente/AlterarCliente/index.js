import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import Cookies from 'js-cookie';
import InputMask from "react-input-mask";
import MaterialInput from '@material-ui/core/Input';
import { toast, ToastContainer } from "react-toastify";

import { alterarTituloPagina } from '../../../components/Utils/mask.js'


import { CaixaImage, CaixaInformacoes, CadastroCaixa } from './style.js';
import Master from '../../Master/index.js';

import { BuscarFoto } from '../../../Service/fileApi';
import nextGenBookAPI from "../../../Service/NextGenBookApi";

const api = new nextGenBookAPI();

export default function AlterarCliente(props) {

    let idcliente = Number(Cookies.get('id'));
    const navegacao = useHistory();
    const [foto, setFoto] = useState();
    const [nome, setNome] = useState(props.location.state.informacoes.nome);
    const [email, setEmail] = useState(props.location.state.informacoes.email);
    const [genero, setGenero] = useState(props.location.state.informacoes.genero);
    const [celular, setCelular] = useState(props.location.state.informacoes.celular);
    const [file, setFile] = useState();


    const AdicionarFoto = (arquivo) => {
        setFoto(arquivo);
        setFile(URL.createObjectURL(arquivo));
    }


    const salvarClick = async () => {
        try {
            let file = null;
            if (foto === undefined) {
                file = null;
            }
            else {
                file = foto;
            }
            setFoto(file);
            let request = {
                email,
                nome,
                celular,
                genero,
                foto: file
            }
            console.log(file);
            const response = await api.alterar(request, idcliente);
            toast.dark("Dados alterados com Sucesso," + response.data.Nome);
            navegacao.push("/Perfil");
        }
        catch (e) {
            toast.error(e.response.erro);
        }
    }

    alterarTituloPagina('Altera Dados');
    return (
        <Master>
            <h2 style={{ color: "white", margin: "0px auto", width: "max-content" }}>Alterar Dados da Conta</h2>
            <CadastroCaixa>
                <CaixaInformacoes>
                    <div className="form-group">
                        <label className="Nome">Nome completo:</label>
                        <input className="form-control" type="text" value={nome} onChange={(n) => setNome(n.target.value)} />
                    </div>

                    <div className="form-group">
                        <label className="">E-mail:</label>
                        <input className="form-control" type="email" value={email} onChange={(n) => setEmail(n.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Gênero:</label>
                        <input className="form-control" placeholder="Digite qual seu genero" value={genero} onChange={(x) => setGenero(x.target.value)} list="generos" />
                        <datalist id="generos">
                            <option value="Masculino" />
                            <option value="Feminino" />
                            <option value="Outro" />
                        </datalist>
                    </div>

                    <div>
                        <label className="Celular">Celular:</label>
                        <InputMask
                            className="form-control"
                            mask="(99) 9 9999-9999"
                            value={celular}
                            onChange={x => setCelular(x.target.value)}
                        >
                            {(cel) => <MaterialInput className="form-group" {...cel} disableUnderline />}
                        </InputMask>
                    </div>
                </CaixaInformacoes>

                <CaixaImage>
                    <label>
                        <span>Selecionar uma imagem de perfil</span>
                    </label>
                    <br />
                    <input type="file" id="img-input" name="image"
                        onChange={e => AdicionarFoto(e.target.files[0])}
                    />

                    <div className="image-preview" id="img-container">
                        <img src={file} alt="" id="preview"></img>
                    </div>
                    <div className="button1">
                        <button type="button" className="btn btn-success" onClick={salvarClick} >Confirmar Alteração</button>
                    </div>
                </CaixaImage>
            </CadastroCaixa>
            <ToastContainer />
        </Master>
    );
}