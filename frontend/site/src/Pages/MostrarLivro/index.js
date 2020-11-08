import React, { useState, useEffect } from 'react'

//Master
import Master from '../Master/index'

import { toast } from "react-toastify";

//Components:
import { BoxContainer } from '../../components/Card/styled.js';

import { InserirCarrinhoApi } from '../../Service/carrinhoApi.js';
import { inserirFavoritoApi } from '../../Service/favoritosApi.js';
import { ConsultarPorIdLivro } from '../../Service/LivroApi.js';
import { BuscarFoto } from '../../Service/fileApi.js'

export default function MostrarLivro(props) {
    const [id] = useState(props.location.state.idlivro);
    const [nome, setNome] = useState("");
    const [idcliente, setIdCliente] = useState(1);
    const [valor, setValor] = useState();
    const [edicao, setEdicao] = useState();
    const [acabamento, setAcabamento] = useState("");
    const [altura, setAltura] = useState();
    const [peso, setpeso] = useState();
    const [largura, setLargura] = useState();
    const [lancamento, setLancamento] = useState();
    const [descricao, setDescricao] = useState("");
    const [paginas, setPaginas] = useState();
    const [editora, setEditora] = useState("");
    const [autor, setAutor] = useState([]);
    const [genero, setGenero] = useState("");
    const [qtd, setQtd] = useState(0);
    const [foto, setFoto] = useState("");


    function popularLivro(dados) {
        if (dados.livro != null && dados.livro != undefined) {
            setLancamento(new Date(dados.livro.lancamento).toLocaleDateString());
            setNome(dados.livro.nome);
            setValor(dados.livro.venda);
            setEdicao(dados.livro.edicao);
            setAcabamento(dados.livro.encapamento);
            setPaginas(dados.livro.paginas)
            setDescricao(dados.livro.descricao);
            setFoto(dados.livro.foto);
            if (dados.livro.editora != null && dados.livro.editora != undefined)
                setEditora(dados.livro.editora.nome);
            if (dados.livro.medida != null && dados.livro.editora != undefined) {
                setAltura(dados.livro.medida.altura)
                setLargura(dados.livro.medida.largura)
                setpeso(dados.livro.medida.peso)
            }
        }
        if (dados.estoque_livro != null && dados.estoque_livro != undefined)
            setQtd(dados.estoque_livro.qtd);
        if (dados.generos != null && dados.generos != undefined)
            setGenero(dados.generos.map(x => x.genero + " ").toString());
        setAutor([...dados.autores]);
    }

    async function inserirCarrinho() {
        try {
            let request = {
                livro: id,
                cliente: idcliente,
                qtd: 1
            }
            await InserirCarrinhoApi(request);
            toast.success('Livro foi adicionado ao carrinho com sucesso');
        }
        catch (ex) {
            toast.error(ex.response.data.erro);
        }
    }

    async function inserirFavorito() {
        try {
            await inserirFavoritoApi({
                livro: id,
                cliente: idcliente
            });
            toast.success('Livro foi adicionado a lista de favoritos com sucesso');
        } catch (ex) {
            toast.error("ex.response.data.erro");
        }
    }

    async function Consultar() {
        const response = await ConsultarPorIdLivro(id);
        console.log(response);
        popularLivro(response.data);
    }

    useEffect(() => {
        Consultar();
    }, [])

    return (
        <Master>
            <BoxContainer id="livro" theme={{ sc_border: "3.5px solid #00870D", sc_espace: "80px 80px", sc_padding: "10px", sc_direction: "column" }}>
                <BoxContainer id="titulo" theme={{ sc_espace: "10px 0px", sc_direction: "row" }}>
                    <h2>{nome}</h2>
                    <i className="fa fa-star estrela" onClick={inserirFavorito} style={{cursor:"pointer"}}></i>
                </BoxContainer>
                <BoxContainer id="generico" theme={{ sc_espace: "10px 0px", sc_direction: "row" }}>
                    <BoxContainer id="imagem" theme={{ sc_espace: "10px 0px", sc_direction: "column" }}>
                        <img src={BuscarFoto(foto)} width="220px" alt="" />
                        <div>
                            <p>Quantidade Disponivel: {qtd}</p>
                        </div>
                    </BoxContainer>
                    <BoxContainer id="itemgenerico" theme={{ sc_width: "100%", sc_espace: "10px 0px", sc_direction: "column" }}>
                        <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>Descrição do Livro</h5>
                        <div>
                            {descricao}
                        </div>
                    </BoxContainer>
                </BoxContainer>
                <BoxContainer id="acoes" theme={{ sc_espace: "10px 0px" }}>
                    <button type="button" className="btn btn-carrinho" onClick={inserirCarrinho}>
                        Adicionar ao Carrinho
                    </button>
                    <button type="button" className="btn btn-comprar">Comprar</button>
                </BoxContainer>
                <BoxContainer id="descicao" theme={{ sc_espace: "10px 0px", sc_direction: "column" }}>

                    <div>
                        <div className="style-text-descr">Editora: {editora}</div>
                        <div className="style-text-descr">Autor: {autor.map(x => x.nome).toString()}</div>
                        <div className="style-text-descr">Generos: {genero}</div>
                    </div>
                    <div className="style-text-descr finalitem">Valor Unitario: {valor}</div>

                    <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>Sobre o Escritor</h5>
                    <div>
                        {autor.map(x =>
                            <div>
                                <h6>
                                    {x.nome}
                                </h6>
                                <div>
                                    {x.descricao}
                                </div>
                            </div>
                        )}
                    </div>
                </BoxContainer>
                <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>Informações do Livro</h5>
                <BoxContainer id="informacoes" theme={{ sc_espace: "10px 0px" }}>
                    <ul>
                        <li>Número de paginas: {paginas}</li>
                        <li>Edição: {edicao}º</li>
                        <li>Tipo de Acabamento: {acabamento}</li>
                        <li>ISBN: 123456789</li>
                        <li>Data de Lançamento: {lancamento}</li>
                    </ul>
                    <ul>
                        <li>Altura: {altura}</li>
                        <li>Largura: {largura}</li>
                        <li>Peso: {peso}g</li>
                    </ul>
                </BoxContainer>
            </BoxContainer>
        </Master>
    )
}