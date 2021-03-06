import React, { useState, useEffect, useRef } from 'react';

//Master
import Master from '../Master/index';
import { Link, useHistory } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import LoadingBar from 'react-top-loading-bar'

//Components:
import { BoxContainer } from '../../components/Card/styled.js';
import Cookies from 'js-cookie'

import { InserirCarrinhoApi } from '../../Service/carrinhoApi.js';
import { inserirFavoritoApi, removerFav } from '../../Service/favoritosApi.js';
import { ConsultarPorIdLivro } from '../../Service/LivroApi.js';
import { BuscarFoto } from '../../Service/fileApi.js';
import { listarAvaliacaoLivroApi } from '../../Service/AvaliacaoLivro.js'
import { alterarTituloPagina } from '../../components/Utils/mask.js'

export default function MostrarLivro(props) {
    const [id] = useState(props.location.state.idlivro);
    const [nome, setNome] = useState("");
    const [idcliente, setIdCliente] = useState(Number(Cookies.get('id')));
    const [valor, setValor] = useState();
    const [edicao, setEdicao] = useState();
    const [acabamento, setAcabamento] = useState("");
    const [altura, setAltura] = useState();
    const [peso, setpeso] = useState();
    const [largura, setLargura] = useState();
    const [lancamento, setLancamento] = useState();
    const [descricao, setDescricao] = useState("");
    const [paginas, setPaginas] = useState();
    const [isbn, SetIsbn] = useState("");
    const [editora, setEditora] = useState("");
    const [autor, setAutor] = useState([]);
    const [genero, setGenero] = useState("");
    const [qtd, setQtd] = useState(0);
    const [foto, setFoto] = useState("");
    const [avaliacoes, setAvaliacoes] = useState([]);
    const [favoritos, setFavoritos] = useState();
    const [idFavorito, setIdFavoritos] = useState();
    const [Favoritoobj, setFavoritoobj] = useState();

    const ref = useRef(null);

    const navegacao = useHistory();

    function popularLivro(dados) {
        if (dados.livro != null && dados.livro !== undefined) {
            setLancamento(new Date(dados.livro.lancamento).toLocaleDateString());
            SetIsbn(String(dados.livro.isbn));
            setNome(dados.livro.nome);
            alterarTituloPagina(dados.livro.nome);
            setValor(dados.livro.venda);
            setEdicao(dados.livro.edicao);
            setAcabamento(dados.livro.encapamento);
            setPaginas(dados.livro.paginas)
            setDescricao(dados.livro.descricao);
            setFoto(dados.livro.foto);
            if (dados.livro.editora != null && dados.livro.editora !== undefined)
                setEditora(dados.livro.editora.nome);
            if (dados.livro.medida != null && dados.livro.editora !== undefined) {
                setAltura(dados.livro.medida.altura)
                setLargura(dados.livro.medida.largura)
                setpeso(dados.livro.medida.peso)
            }
            if (dados.estoque_livro != null && dados.estoque_livro !== undefined)
                setQtd(dados.estoque_livro.qtd);
            if (dados.generos != null && dados.generos !== undefined && dados.generos.length > 0)
                setGenero(dados.generos.map(x => x.genero + " ").toString());
            if (dados.autores != null && dados.autores !== undefined && dados.autores.length > 0)
                setAutor([...dados.autores]);
            setFavoritos(dados.livro.favorito);
            setIdFavoritos(dados.favorito.id);
            setFavoritoobj(dados.favorito);
        }
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
            await Consultar();
        }
        catch (ex) {
            toast.error(ex.response.data.erro);
        }
    }

    async function inserirFavorito() {
        try {
            if (idcliente <= 0 || idcliente === undefined || idcliente == null || isNaN(idcliente)) {
                toast.error("Usúario não encotrado, nescessário a realização de login.");
            }
            else {
                await inserirFavoritoApi({
                    livro: id,
                    cliente: idcliente
                });
                await ConsultarPorIdLivro(id, idcliente)
                toast.success(' 🥇 Livro foi adicionado a lista de favoritos com sucesso');
                setFavoritos(true);
                await Consultar();
            }
        } catch (ex) {
            toast.info(' 🏁 ' + ex.response.data.erro);
        }
    }

    async function removerFavorito() {
        try {
            if (idcliente <= 0 || idcliente === undefined || idcliente == null) {
                toast.error("Usúario não encotrado, nescessário a realização de login.");
            }
            else {
                await removerFav(idFavorito);
                toast.success(' 🥇 Livro foi removido da lista de favoritos com sucesso');
                setFavoritos(false);
            }
        } catch (ex) {
            toast.info(' 🏁 ' + ex.response.data.erro);
        }
    }

    async function Consultar() {
        try {
            ref.current.continuousStart();
            let response;
            if (isNaN(idcliente))
                response = await ConsultarPorIdLivro(id, 0);
            else
                response = await ConsultarPorIdLivro(id, idcliente);
            popularLivro(response.data)
            const listAvaliacao = await listarAvaliacaoLivroApi(id);
            if (listAvaliacao != null && listAvaliacao !== undefined && listAvaliacao.length > 0)
                setAvaliacoes([...listAvaliacao]);
        }
        catch (ex) {
            //toast.error(ex.response.data.erro);
        }
        finally {
            ref.current.complete();
        }
    }

    useEffect(() => {
        Consultar();
        window.scrollTo(-1000000, 0);
    }, [])

    return (
        <Master>
            <ToastContainer />
            <LoadingBar
                color='#f11946'
                ref={ref}
            />
            <BoxContainer id="livro" style={{ borderRadius: "0px" }} theme={{ sc_border: "none", sc_espace: "0px", sc_padding: "10px", sc_direction: "column" }}>
                <i className="fas fa-angle-left" style={{ fontSize: "40px", padding: "0px 15px 5px 0px", cursor: "pointer", width: "0px" }} onClick={() => { navegacao.goBack() }}></i>
                <BoxContainer id="titulo" theme={{ sc_espace: "10px 0px", sc_direction: "row" }}>
                    <h2>{nome}</h2>
                    {
                        idcliente <= 0 || idcliente === undefined || idcliente == null || isNaN(idcliente)
                            ?
                            <></>
                            : !favoritos ?
                                <i className="far fa-star estrela" onClick={inserirFavorito} style={{ cursor: "pointer" }} id="Icone"></i>
                                :
                                <i className="fas fa-star estrela" onClick={removerFavorito} style={{ cursor: "pointer" }} id="Icone"></i>
                    }
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
                {
                    idcliente <= 0 || idcliente === undefined || idcliente == null || isNaN(idcliente) ?
                        <>Valor Unitário: {valor}</>
                        :
                        <BoxContainer id="acoes" theme={{ sc_espace: "10px 0px" }}>
                            <button type="button" className="btn btn-carrinho" onClick={inserirCarrinho}>
                                Adicionar ao Carrinho - R$ {valor}
                            </button>
                        </BoxContainer>
                }
                <BoxContainer id="descicao" theme={{ sc_espace: "10px 0px", sc_direction: "column" }}>

                    <div>
                        <div className="style-text-descr">Editora: {editora}</div>
                        <div className="style-text-descr">Autor: {autor.map(x => x.nome).toString()}</div>
                        <div className="style-text-descr">Gêneros: {genero}</div>
                    </div>
                    <h5 style={{ marginTop: "15px", marginBottom: "5px" }}>Sobre o Escritor(a):</h5>
                    <div>
                        {autor.map(x =>
                            <div key={x.id} >
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
                        <li>Número de páginas: {paginas}</li>
                        <li>Edição: {edicao}º</li>
                        <li>Tipo de Acabamento: {acabamento}</li>
                        <li>ISBN: {isbn}</li>
                        <li>Data de Lançamento: {lancamento}</li>
                    </ul>
                    <ul>
                        <li>Altura: {altura} cm</li>
                        <li>Largura: {largura} cm</li>
                        <li>Peso: {peso} g</li>
                    </ul>
                </BoxContainer>

                <BoxContainer id="comentarios" theme={{ sc_direction: "column", sc_espace: "10px 0px" }}>
                    {
                        avaliacoes.map(x =>
                            <div key={x.id} className="coment">
                                <div style={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                                    <h6>Nome do usuario</h6>
                                    <p>{x.avaliacao}</p>
                                </div>
                                <p>
                                    {x.comentario}
                                </p>
                            </div>
                        )
                    }
                </BoxContainer>
            </BoxContainer>
        </Master>
    )
}