using System;
using System.Collections.Generic;
using System.Linq;

namespace api.Utils.Conversor
{
    public class DevolucaoConversor
    {
        public Models.TbDevolucao ConversorTabela(Models.Request.DevolucaoRequest request)
        {
            Models.TbDevolucao tabela = new Models.TbDevolucao();

            tabela.IdVendaLivro = request.vendalivro;
            tabela.DsCodigoRastreio = "....";
            tabela.DsMotivo = request.motivo;
            tabela.DtDevolucao = DateTime.Now;
            tabela.DtPrevisaoEntrega = request.previsao_entrega;
            tabela.BtDevolvido = 1;
            tabela.VlDevolvido = request.valor;

            return tabela;
        }

        public Models.Response.DevolucaoResponse ConversorResponse(Models.TbDevolucao tabela)
        {
            Models.Response.DevolucaoResponse response = new Models.Response.DevolucaoResponse();

            response.id = tabela.IdDevolucao;
            response.vendalivro = tabela.IdVendaLivro;
            response.codigo_ratreio = tabela.DsCodigoRastreio;
            response.motivo = tabela.DsMotivo;
            response.data_devolucao = tabela.DtDevolucao;
            response.previsao_entrega = tabela.DtPrevisaoEntrega;
            response.devolvido = tabela.BtDevolvido;
            response.valor = tabela.VlDevolvido;

            return response;
        }

        public List<Models.Response.RelatorioDevolucoaResponse> ConversorRelarotioResponse(List<Models.TbDevolucao> tabela)
        {
            List<Models.Response.RelatorioDevolucoaResponse> response = new List<Models.Response.RelatorioDevolucoaResponse>();
            
            Models.Response.RelatorioDevolucoaResponse adiciona = new Models.Response.RelatorioDevolucoaResponse();

            tabela.ForEach(x => {
                adiciona.devolucao = x.IdDevolucao;
                adiciona.nome_livro = x.IdVendaLivroNavigation.IdLivroNavigation.NmLivro;
                adiciona.idlivro = x.IdVendaLivroNavigation.IdLivro;
                adiciona.qtd = x.IdVendaLivroNavigation.TbDevolucao.Count;
                
                double valor = 0;
                tabela.ForEach(x => {
                    if(adiciona.idlivro == x.IdVendaLivroNavigation.IdLivro)
                    {
                        valor += Convert.ToDouble(x.VlDevolvido);
                    }
                });

                adiciona.valor_total = valor;

                response.Add(adiciona);
            });

            return response;
        }
    }
}