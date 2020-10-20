namespace backend.Utils.Conversor
{
    public class VendaLivroConversor
    {
        public Models.TbVendaLivro Conversor(Models.Request.VendaLivroRequest request)
        {
            Models.TbVendaLivro tabela = new Models.TbVendaLivro();

            tabela.IdVenda = request.venda;
            tabela.IdLivro = request.livro;
            tabela.NrLivros = request.qtd;
            tabela.VlVendaLivro = request.valor;

            return tabela;
        }

        public Models.Response.VendaLivroResponse Conversor(Models.TbVendaLivro tabela)
        {
            Models.Response.VendaLivroResponse response = new Models.Response.VendaLivroResponse();

            response.id = tabela.IdVendaLivro;
            response.venda = tabela.IdVenda;
            response.livro = tabela.IdLivro;
            response.qtd = tabela.NrLivros;
            response.valor = tabela.VlVendaLivro;

            return response;
        }
    }
}