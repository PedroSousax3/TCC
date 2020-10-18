namespace backend.Utils.Conversor
{
    public class RecebimentoDevolucaoConversor
    {
        public Models.TbRecebimentoDevolucao Conversor (Models.Request.ReciboDevolucaoRequest request)
        {
            Models.TbRecebimentoDevolucao tabela = new Models.TbRecebimentoDevolucao();

            tabela.IdDevolucao = request.devolucao;
            tabela.DsStatusLivro = request.descricao;
            tabela.DtRecebimentoLivro = request.data_recebido;

            return tabela;
        }

        public Models.Response.ReciboDevolucaoResponse Conversor (Models.TbRecebimentoDevolucao tabela)
        {
            Models.Response.ReciboDevolucaoResponse response = new Models.Response.ReciboDevolucaoResponse();

            response.id = tabela.IdLivroDevolvido;
            response.devolucao = tabela.IdDevolucao;
            response.descricao = tabela.DsStatusLivro;
            response.data_recebido = tabela.DtRecebimentoLivro;

            return response;
        }
    }
}