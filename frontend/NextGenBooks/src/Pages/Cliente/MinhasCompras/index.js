import React, { useState } from "react";
import { Link } from "react-router-dom";
import Master from "../../Master";
import { toast, ToastContainer } from "react-toastify";
import Botoes from "../MinhasCompras/components/Botoes/Botoes.js"
import { ContainerMinhasCompras } from "./style.js";
import { Pesquisa } from "./style.js";
import nextgenBooks from "../../../Service/NextGenBookApi";
import Cookies from 'js-cookie';
import { BuscarFoto } from '../../../Service/fileApi.js'
import { Card, Title, Container, ImagemCard } from '../../../components/Card/index.js'

let api = new nextgenBooks();
export default function MinhasCompras() {
  const [registros, setRegistros] = useState([]);

  const [status, setStatus] = useState("");

  const [motivo, setMotivo] = useState("");
  const [valor, setValor] = useState(0);
  const [codigo_rastreio, setCodigoRastreio] = useState("123");
  const [comprovante, setComprovante] = useState();
  const [previsao_entrega, setPrevisao_entrega] = useState(new Date().toISOString().substr(0, 10));

  const [cliente, setCliente] = useState(Number(Cookies.get('id')));

  const listarAndamento = async () => {
    try {

      let resp = await api.listarComprasndamento(cliente);
      setRegistros([...resp]);

    } catch (e) {
      toast.error("Ainda não ha compras em andamento");
    }
  }
  const listarFinalizadas = async () => {
    try {
      let resp = await api.listarComprasfinalizadas(cliente);
      setRegistros([...resp]);
      setStatus(registros[0].status.status);
    } catch (e) {
      toast.error("Ainda não ha compras finalizadas");
    }
  }
  const listarPendentes = async () => {
    try {
      let resp = await api.listarComprasPendentes(cliente);
      setRegistros([...resp]);
      setStatus(registros[0].status.status);
    } catch (e) {
      toast.error("Ainda não ha compras pendentes");
    }
  }

  const CancelarSim = async (idvenda) => {
    try {
      await api.CancelarCompra(idvenda);
      toast.success("O cancelamento da compra foi solicitado.");
      listarAndamento();
    } catch (e) {
      toast.error(e.response.erro);
    }
  }


  const AdicionarFoto = (arquivo) => {
    setComprovante(arquivo);
  }

  const DevolverSim = async (idvendalivro, v) => {
    try {
      let id = idvendalivro;
      let val = v;
      let request = {
        vendalivro: id,
        motivo,
        valor: val,
        codigo_rastreio,
        comprovante,
        previsao_entrega
      }

      await api.Devolver(request);
      toast.success("Devolução solicitada.");
      listarAndamento();
    } catch (e) {
      toast.error(e.response.data.erro);
    }
  }


  return (
    <div>
      <Master>
        <ContainerMinhasCompras>
          <div className="titulo">
            <label style={{ fontSize: "30px", color: "white", fontWeight: "bolder" }}>
              Minhas Compras
            </label>
            <Pesquisa>
              <button id="btcompra" type="button" className="btn btn-success" onClick={listarPendentes} style={{ width: "200px" }}>Pendentes</button>
              <button id="btcompra" type="button" className="btn btn-success" onClick={listarAndamento} style={{ width: "200px" }}>Em Andamento</button>
              <button id="btcompra" type="button" className="btn btn-success" onClick={listarFinalizadas} style={{ width: "200px" }}>Finalizadas</button>
            </Pesquisa>
            {registros.map(x =>

              <div style={{ marginTop: "35px" }}>
                {x.vendaLivro.map(y =>

                  <div className="card">
                    <Card theme={{ bg_color: "white" }}>
                      <Title theme={{ color: "black", bg_color: "rgba(0, 0, 0, 0.1)" }}>{y.livroInfo.nome}</Title>
                      <Container>
                        <img style={{ height: "300px", width: "180px" }} src={BuscarFoto(y.livroInfo.foto)} alt={"Capa do livro " + y.livroInfo.nome} />
                        <div className="column item" ke={x.id}>
                          <div>
                            <h5>
                              Descrição:
                            </h5>
                            <p>
                              {
                                (y.livroInfo.descricao.length > 300)
                                  ? y.livroInfo.descricao.substr(0, y.livroInfo.descricao.indexOf(".", 300) + 1) + "..." : y.livroInfo.descricao
                              }
                            </p>
                          </div>
                          <div className="button-card" style ={{ padding : "0px"}}>
                            <div>
                              {
                                y.devolvido ?
                                  <>
                                    <h6 className="card-text" style={{ color: "red" }}>Livro Devolvido</h6>
                                  </>
                                  :
                                  <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#modalExemplo2" >Pedir Devolução</button>
                              }
                            </div>
                            
                            <Link  to={{
                              state: {
                                idlivro: x.livro
                              }, 
                              pathname: "/MostrarLivro"
                            }}>Ver detalhes</Link>
                            
                          </div>
                        </div>
                      </Container>
                    </Card>
                    <div className="modal" id="modalExemplo2" tabindex="-1" role="dialog">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Deseja devolver a compra?</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>Porque deseja devolver a compra?</p>
                            <span>
                              Adicione a foto do comprovante
                                        </span>
                            <input type="file" id="img-input" name="image"
                              onChange={e => AdicionarFoto(e.target.files[0])}
                            />
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setMotivo(e.target.value)}></textarea>
                          </div>
                          <div className="modal-footer" Key={y.id}>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                            <button type="button" className="btn btn-primary" onClick={() => DevolverSim(y.id, y.valor)}>Sim </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="modal" id="modalExemplo" tabindex="-1" role="dialog">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Cancelar Compra</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>Você realmente deseja cancelar sua compra?</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        <button type="button" className="btn btn-primary" onClick={() => CancelarSim(x.status.id)}>Sim</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-group" role="group" aria-label="Exemplo básico" style={{ color: "white" }}>
                  <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#modalExemplo" >Cancelar Compra</button>
                 <Link to="/Acompanhar/Pedido"><button className="btn btn-success">Acompanhar Pedido</button></Link>
                </div>
              </div>
            )}
          </div>
        </ContainerMinhasCompras>
        <ToastContainer />
      </Master>
    </div>
  );
}                                   