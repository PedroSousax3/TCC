namespace backend.Utils.Conversor
{
    public class EstoqueConvert
    {
        public Models.TbEstoque Conversor(Models.Request.EstoqueRequest request)
        {
            Models.TbEstoque tabela = new Models.TbEstoque();

            tabela.IdLivro = request.livro;
            tabela.NrQuantidade = request.qtd;
            tabela.DtAtualizacao = request.atualizacao;

            return tabela;
        }

        public Models.Response.EstoqueResponce Conversor(Models.TbEstoque tabela)
        {
            Models.Response.EstoqueResponce responce = new Models.Response.EstoqueResponce();

            responce.id = tabela.IdEstoque;
            responce.livro = tabela.IdLivro;
            responce.qtd = tabela.NrQuantidade;
            responce.atualizacao = tabela.DtAtualizacao;

            return responce;
        }
    }
}