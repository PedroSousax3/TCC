using System;
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

        public Models.Response.RelatorioDevolucoaResponse ConversorRelarotioResponse(Models.TbDevolucao tabela)
        {
            Models.Response.RelatorioDevolucoaResponse response = new Models.Response.RelatorioDevolucoaResponse();
            LivroConversor LivroConvert = new LivroConversor();
            VendaLivroConversor VendaLivroConvert = new VendaLivroConversor();

            Models.Response.DevolucaoResponse devolucao = this.ConversorResponse(tabela);
            if (tabela.IdVendaLivroNavigation.IdLivroNavigation == null)
                response.livros = null;
            else
            {
                Models.Response.LivroCompleto livros = LivroConvert.ConversorCompleto(tabela.IdVendaLivroNavigation.IdLivroNavigation);
                response.livros = livros;
            }
            if(tabela.IdVendaLivroNavigation == null)
                response.vendalivro = null;
            else 
            {
                Models.Response.VendaLivroResponse vendaLivro = VendaLivroConvert.ConversorResponse(tabela.IdVendaLivroNavigation);
                response.vendalivro = vendaLivro;
            }
            response.devolucao = devolucao;

            return response;
        }
    }
}