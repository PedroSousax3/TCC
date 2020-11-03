using System;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
namespace api.Utils.Conversor
{
    public class RealizarCompraConversor
    {
        public Models.TbVenda ParaTabelaVenda(Models.Request.RealizarVendaRequest.RealizarVendaPersonalizado request)
        {
            Models.TbVenda tabela = new Models.TbVenda();
            tabela.IdCliente = request.IdCliente;
            tabela.IdEndereco = request.IdEndereco;
            tabela.TpPagamento = request.TipoDePagamento;
            tabela.NrParcela = request.NumeroParcela;
            if(request.TipoDePagamento == "Dinheiro")
            {
               tabela.DsStatusPagamento = "Aguardando Pagamento";
            }
            else if(request.TipoDePagamento == "Credito" || request.TipoDePagamento == "Debito"){
                
                tabela.DsStatusPagamento = "Pago";
            }
            tabela.VlFrete = request.ValorFrete;
            tabela.DtVenda = DateTime.Now;
            tabela.DsCodigoRastreio = "a definir";
            tabela.DtPrevistaEntrega = request.DataPrevistaEntrega;
            tabela.BtConfirmacaoEntrega = 0;
            tabela.DsNf = "..";

            tabela.TbVendaStatus = new List<Models.TbVendaStatus>();
            tabela.TbVendaStatus.Add(new Models.TbVendaStatus()
                    {
                        NmStatus = "Aguardando Pagamento",
                        DsVendaStatus = "Pagamento não Identificado",
                        DtAtualizacao = DateTime.Now

                    }
            );

            tabela.TbVendaLivro = request.Livros.Select(x => new Models.TbVendaLivro(){
                IdLivro = x.IdLivro,
                NrLivros = x.NumeroLivro,
                VlVendaLivro = x.VendaLivro,
                BtDevolvido = 0
            }).ToList();
               return tabela;
        }
        public Models.Response.RealizarVendaResponse ParaResponseRealizarVenda(Models.TbVenda tabela)
        {
            Models.Response.RealizarVendaResponse response = new Models.Response.RealizarVendaResponse();
            response.IdVenda = tabela.IdVenda;

            return response;
        }





    }
}