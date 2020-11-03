import React, { useState, useEffect } from 'react'

//Master
import Master from '../Master/index'

import { toast } from "react-toastify";

//Components:
import { BoxContainer } from './styled.js';
import teste from '../../Assets/images/logo/Logo.jpeg'

import { InserirCarrinhoApi } from '../../Service/carrinhoApi.js';
import { inserirFavorito } from '../../Service/favoritosApi.js';
import { ConsultarPorIdLivro } from '../../Service/LivroApi.js';

export default function MostrarLivro(props) {
    const [ id, setId ] = useState();
    const [nome, setNome] = useState("");
    const [ valor, setValor ] = useState();
    const [descricao, setDescricao] = useState("");
    const [ editora, setEditora ] = useState("");
    const [ autores, setAutores ] = useState([]);
    const [ qtd, setQtd ] = useState(0);

    function popularLivro (dados) {
        setId(dados.id);
        setNome(dados.livro.nome);
        setValor(dados.livro.venda);
        setDescricao(dados.livro.descricao);
        setEditora(dados.livro.editora.nome);
        setQtd(dados.estoque_livro.qtd);
    }

    async function Consultar(id = 1){
        try {
            let response = await ConsultarPorIdLivro(id);
            popularLivro(response.data);
            console.log("Ok");
        } catch (ex) {
            toast.error(ex.response.data.erro);
        }
    }

    async function inserirCarrinho(){
        let request = {
            livro : 2,
            cliente : 1,
            qtd : 1
        }
        await InserirCarrinhoApi(request);
    }

    useEffect(() => Consultar(), []);
    return (
        <Master>
            <BoxContainer id="livro" theme={{ sc_border : "3.5px solid #00870D", sc_espace : "80px 80px", sc_padding : "10px", sc_direction : "column"}}>
                <BoxContainer id="titulo" theme={{sc_espace : "10px 0px", sc_direction : "row"}}>
                    <h2>{nome}</h2>
                    <i class="fa fa-star estrela" onClick={
                        async () => await inserirFavorito({
                            livro : 1,
                            cliente : 2
                        })
                    }></i>
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
                        <div className="style-text-descr finalitem">Valor Unitario: 25.75</div>
                    </BoxContainer>
                </BoxContainer>
                <BoxContainer id="acoes" theme={{sc_espace : "10px 0px"}}>
                    <button type="button" class="btn btn-carrinho" onClick={inserirCarrinho}>
                        Adicionar ao Carrinho
                    </button>
                    <button type="button" class="btn btn-comprar">Comprar</button>
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
                        <li>Número de paginas: 320</li>
                        <li>Edição: 1º</li>
                        <li>Tipo de Acabamento: Couro</li>
                        <li>ISBN: 123456789</li>
                        <li>Data de Lançamento: 2020-02-15</li>
                    </ul>
                    <ul>
                        <li>Altura: 12.5</li>
                        <li>Largura: 4.2</li>
                        <li>Peso: 500g</li>
                        <li></li>
                    </ul>
                </BoxContainer>
            </BoxContainer>
        </Master>
    )
}