using System.Collections.Generic;
using System.Collections;
using System.Linq;
namespace api.Utils.Conversor
{
    public class VendaConversor
    {
        public Models.TbVenda ConversorTabela(Models.Request.VendaRequest request)
        {
            Models.TbVenda tabela = new Models.TbVenda();

            tabela.IdEndereco = request.endereco;
            tabela.IdCliente = request.cliente;
            tabela.NrParcela = request.parcela;
            tabela.TpPagamento = request.metodo_pagamento;
            tabela.VlFrete = request.valor_frete;
            tabela.DsCodigoRastreio = request.codigo_rastreio;
            tabela.DsStatusPagamento = request.status_pagamento;
            tabela.DtPrevistaEntrega = request.previsao_entrega;
            tabela.BtConfirmacaoEntrega = request.comfirmacao_entraga;
            tabela.DsNf = request.nota_fiscal;
            tabela.DtVenda = request.data_venda;

            return tabela;
        }

        public Models.Response.VendaResponse ConversorResponse(Models.TbVenda tabela)
        {
            Models.Response.VendaResponse response = new Models.Response.VendaResponse();

            response.endereco = tabela.IdEndereco;
            response.cliente = tabela.IdCliente;
            response.parcela = tabela.NrParcela;
            response.metodo_pagamento = tabela.TpPagamento;
            response.valor_frete = tabela.VlFrete;
            response.codigo_rastreio = tabela.DsCodigoRastreio;
            response.status_pagamento = tabela.DsStatusPagamento;
            response.previsao_entrega = tabela.DtPrevistaEntrega;
            response.comfirmacao_entraga = tabela.BtConfirmacaoEntrega;
            response.nota_fiscal = tabela.DsNf;
            response.data_venda = tabela.DtVenda;

            return response;
        }
        public Models.Response.RelatorioQuantidadeVenda RelatorioVendaPorDiaResponse(Models.TbVenda tabela)
        {
            Models.Response.RelatorioQuantidadeVenda response = new Models.Response.RelatorioQuantidadeVenda();
            response.DiaDaVenda = tabela.DtVenda.Value.Day + "/" + tabela.DtVenda.Value.Month + "/" + tabela.DtVenda.Value.Year;
            response.EnderecoDeEntrega = tabela.IdEnderecoNavigation.NmEndereco;
            response.NomeCliente = tabela.IdClienteNavigation.NmCliente;
            decimal total = 0;
            response.Livros = new  List<Models.Response.Livro>();
            foreach (Models.TbVendaLivro livro in tabela.TbVendaLivro)
            {
                        total += (livro.VlVendaLivro * livro.NrLivros); 
                        response.QtdTotalDeProdutos += livro.NrLivros;
                response.Livros.Add( new Models.Response.Livro()
                    {
                        NomeLivro = livro.IdLivroNavigation.NmLivro,
                        QtdUnitaria = livro.NrLivros,
                        ValorUnitario = livro.IdLivroNavigation.VlPrecoVenda
                    }
                );
            }

            response.QtdProdutosDiferentes = tabela.TbVendaLivro.Count;
            response.TotalCompra = total;
            response.Hora = tabela.DtVenda.ToString().Substring(10,9);

            return response;
        }
    }
}