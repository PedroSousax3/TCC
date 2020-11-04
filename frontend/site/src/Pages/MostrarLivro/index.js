import React, { useState, useEffect } from 'react'

//Master
import Master from '../Master/index'

import { toast } from "react-toastify";

//Components:
import { BoxContainer } from '../../components/Card/styled.js';
import teste from '../../Assets/images/logo/Logo.jpeg'

import { InserirCarrinhoApi } from '../../Service/carrinhoApi.js';
import { inserirFavoritoApi } from '../../Service/favoritosApi.js';
import { ConsultarPorIdLivro } from '../../Service/LivroApi.js';

export default function MostrarLivro(props) {
    const [ id, setId ] = useState();
    const [nome, setNome] = useState("");
    const [idcliente, setIdCliente] = useState("");
    const [ valor, setValor ] = useState();
    const [ edicao, setEdicao ] = useState();
    const [ acabamento, setAcabamento ] = useState("");
    const [ altura, setAltura ] = useState();
    const [ peso, setpeso ] = useState();
    const [ largura, setLargura ] = useState();
    const [ lancamento, setLancamento ]= useState();
    const [descricao, setDescricao] = useState("");
    const [ paginas, setPaginas ] = useState();
    const [ editora, setEditora ] = useState("");
    const [ autores, setAutores ] = useState([]);
    const [ qtd, setQtd ] = useState(0);

    useEffect(() => {
        async function Consultar (){
            const response = await ConsultarPorIdLivro(1);
            console.log(response.data)
            popularLivro(response.data);
        }
        Consultar(1);
    }, [])

    function popularLivro (dados) {
        setId(dados.idlivro);
        setLancamento(new Date(dados.livro.lancamento).toLocaleDateString());
        setNome(dados.livro.nome);
        setIdCliente(1);
        setValor(dados.livro.venda);
        setAltura(dados.livro.medida.altura)
        setLargura(dados.livro.medida.largura)
        setpeso(dados.livro.medida.peso)
        setEdicao(dados.livro.edicao);
        setAcabamento(dados.livro.encapamento);
        setPaginas(dados.livro.paginas)
        setDescricao(dados.livro.descricao);
        setEditora(dados.livro.editora.nome);
        setQtd(dados.estoque_livro.qtd);
    }

    async function inserirCarrinho(){
        try {
            let request = {
                livro : id,
                cliente : idcliente,
                qtd : 1
            }
            await InserirCarrinhoApi(request);
            toast.success('Livro foi adicionado ao carrinho com sucesso');
        }
        catch (ex) {
            toast.error(ex.response.data.erro);
        }
    }
    
    async function inserirFavorito(){
        try {
            await inserirFavoritoApi({
                livro : id,
                cliente : idcliente
            });
            toast.success('Livro foi adicionado a lista de favoritos com sucesso');
        } catch (ex) {
            toast.error("ex.response.data.erro");    
        }
    }
    
    return (
        <Master>
            <BoxContainer id="livro" theme={{ sc_border : "3.5px solid #00870D", sc_espace : "80px 80px", sc_padding : "10px", sc_direction : "column"}}>
                <BoxContainer id="titulo" theme={{sc_espace : "10px 0px", sc_direction : "row"}}>
                    <h2>{nome}</h2>
                    <i className="fa fa-star estrela" onClick={inserirFavorito}></i>
                </BoxContainer>
                <BoxContainer id="generico" theme={{sc_espace : "10px 0px", sc_direction : "row"}}>
                    <BoxContainer id="imagem" theme={{sc_espace : "10px 0px", sc_direction : "column"}}>
                        <img src={teste} width="220px" alt=""/>
                        <div>
                            <p>Quantidade Disponivel: {qtd}</p>
                        </div>
                    </BoxContainer>
                    <BoxContainer id="itemgenerico" theme={{sc_width: "100%", sc_espace : "10px 0px", sc_direction : "column"}}>                        
                        <div>
                            <div className="style-text-descr">Editora: {editora}</div>
                            <div className="style-text-descr">Autor: Autor A e Autor B</div>
                            <div className="style-text-descr">Generos: Ação, Comedia, Romance e Aventura</div>
                        </div>
                        <div className="style-text-descr finalitem">Valor Unitario: {valor}</div>
                    </BoxContainer>
                </BoxContainer>
                <BoxContainer id="acoes" theme={{sc_espace : "10px 0px"}}>
                    <button type="button" className="btn btn-carrinho" onClick={inserirCarrinho}>
                        Adicionar ao Carrinho
                    </button>
                    <button type="button" className="btn btn-comprar">Comprar</button>
                </BoxContainer>
                <BoxContainer id="descicao" theme={{sc_espace : "10px 0px", sc_direction : "column"}}>
                    <h5 style={{marginTop: "15px", marginBottom: "5px"}}>Descrição do Livro</h5>
                    <div>
                        {descricao}
                    </div>

                    <h5 style={{marginTop: "15px", marginBottom: "5px"}}>Sobre o Escritor</h5>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suo genere perveniant ad extremum; Praeclare enim Plato: Beatum, cui etiam in senectute contigerit, ut sapientiam verasque opiniones assequi possit. Rationis enim perfectio est virtus; Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. 
                        Itaque vides, quo modo loquantur, nova verba fingunt, deserunt usitata. Quod autem ratione actum est, id officium appellamus. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Cuius similitudine perspecta in formarum specie ac dignitate transitum est ad honestatem dictorum atque factorum. Sed quia studebat laudi et dignitati, multum in virtute processerat. Nummus in Croesi divitiis obscuratur, pars est tamen divitiarum. Potius inflammat, ut coercendi magis quam dedocendi esse videantur. Egone quaeris, inquit, quid sentiam? 
                        Conferam tecum, quam cuique verso rem subicias; Egone non intellego, quid sit don Graece, Latine voluptas? Itaque in rebus minime obscuris non multus est apud eos disserendi labor. Nec lapathi suavitatem acupenseri Galloni Laelius anteponebat, sed suavitatem ipsam neglegebat; At tu eadem ista dic in iudicio aut, si coronam times, dic in senatu. Quid in isto egregio tuo officio et tanta fide-sic enim existimo-ad corpus refers? 
                    </div>
                </BoxContainer>
                <h5 style={{marginTop: "15px", marginBottom: "5px"}}>Informações do Livro</h5>
                <BoxContainer id="informacoes" theme={{sc_espace : "10px 0px"}}>
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