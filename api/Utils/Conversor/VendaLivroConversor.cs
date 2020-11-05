namespace api.Utils.Conversor
{
    public class VendaLivroConversor
    {
        public Models.TbVendaLivro ConversorTabela(Models.Request.VendaLivroRequest request)
        {
            Models.TbVendaLivro tabela = new Models.TbVendaLivro();

            tabela.IdVenda = request.venda;
            tabela.IdLivro = request.livro;
            tabela.NrLivros = request.qtd;
            tabela.VlVendaLivro = request.valor;

            return tabela;
        }

        public Models.Response.VendaLivroResponse ConversorResponse(Models.TbVendaLivro tabela)
        {
            Models.Response.VendaLivroResponse response = new Models.Response.VendaLivroResponse();
             Utils.Conversor.LivroConversor conversorLivro = new Utils.Conversor.LivroConversor();

            response.id = tabela.IdVendaLivro;
            response.venda = tabela.IdVenda;
            response.livro = tabela.IdLivro;
            response.qtd = tabela.NrLivros;
            response.valor = tabela.VlVendaLivro;
            response.livroInfo = conversorLivro.Conversor(tabela.IdLivroNavigation);

            return response;
        }
    }
}