namespace backend.Storage
{
    public class DevolucaoConversor
    {
        public Models.TbDevolucao Conversor(Models.Request.DevolucaoRequest request)
        {
            Models.TbDevolucao tabela = new Models.TbDevolucao();

            tabela.IdVendaLivro = request.vendalivro;
            tabela.DsCodigoRastreio = request.codigo_ratreio;
            tabela.DsMotivo = request.motivo;
            tabela.DtDevolucao = request.data_devolucao;
            tabela.DtPrevisaoEntrega = request.previsao_entrega;
            tabela.BtDevolvido = request.devolvido;
            tabela.VlDevolvido = request.valor;

            return tabela;
        }

        public Models.Response.DevolucaoResponse Conversor(Models.TbDevolucao tabela)
        {
            Models.Response.DevolucaoResponse response = new Models.Response.DevolucaoResponse();

            tabela.IdDevolucao = response.id;
            tabela.IdVendaLivro = response.vendalivro;
            tabela.DsCodigoRastreio = response.codigo_ratreio;
            tabela.DsMotivo = response.motivo;
            tabela.DtDevolucao = response.data_devolucao;
            tabela.DtPrevisaoEntrega = response.previsao_entrega;
            tabela.BtDevolvido = response.devolvido;
            tabela.VlDevolvido = response.valor;

            return response;
        }
    }
}