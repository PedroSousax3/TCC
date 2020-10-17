namespace backend.Utils.Conversor
{
    public class CarrinhoConversor
    {
        public Models.TbCarrinho Conversor (Models.Request.CarrinhoRequest request)
        {
            Models.TbCarrinho tabela = new Models.TbCarrinho();
            
            tabela.IdCliente = request.cliente;
            tabela.IdLivro = request.livro;
            tabela.NrLivro = request.qtd;

            return tabela;
        }

        public Models.Response.CarrinhoResponse Conversor (Models.TbCarrinho tabela)
        {
            Models.Response.CarrinhoResponse response = new Models.Response.CarrinhoResponse();
            
            response.id = tabela.IdCarrinho;
            response.cliente = tabela.IdCliente;
            response.livro = tabela.IdLivro;
            response.qtd = tabela.NrLivro;
            response.atualizacao = tabela.DtAtualizacao;

            return response;
        }
    }
}