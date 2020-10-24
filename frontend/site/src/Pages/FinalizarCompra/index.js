import React from "react";
import Master from "../Master"
import {CaixaFinalizarCompra} from "./style.js";

export default function FinalizarCompra(props){
    return(
        <div>
            <Master children={
                    <div style={{justifyContent:"center",alignItems:"center",paddingTop:"4%",display:"flex",flexDirection:"column"}}>
                        <div style={{width:"60%",display:"flex",justifyContent:"flex-start",fontSize:"25px",fontWeight:"bold"}}>
                            <span>Finalizar Compra</span>
                        </div>
                 <CaixaFinalizarCompra>
                       <div className="produtos">
                           <div className="nome-livro">
                              <span>Livro</span>
                           </div>
                           <div className="valor">
                              <span>Preço Unitario:</span>
                               R$:
                           </div>
                       </div>
                       <div className="decisoes">
                            <div className="decisoes-metodo">
                                    <span>Metodo de Pagamento:</span>
                                <select>
                                    <option value="cartao">cartao</option>
                                    <option value="dinheiro">dinheiro</option>
                                </select>
                            </div>
                            <div className="decisoes-numero-parcela">
                                  <span>Numero de Parcelas</span>
                                  <input type="number"></input>
                                  <span>Valor das Parcelas :</span>
                            </div>
                            <div className="informacoes-finais">
                                  <div className="total-livros">
                                      <span>Valor Total dos Livros:</span>
                                      Valor
                                  </div>
                                  <div className="total-frete">
                                      <span>Valor Total dos Livros:</span>
                                      Valor
                                  </div>
                                  <div className="total-compra">
                                      <span>Valor Total dos Livros:</span>
                                      Valor
                                  </div>
                            </div>
                       </div>
                 </CaixaFinalizarCompra>
                 </div>
            }/>
        </div>
    )
}