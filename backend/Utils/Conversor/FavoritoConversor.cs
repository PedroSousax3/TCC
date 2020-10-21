namespace backend.Utils.Conversor
{
    public class FavoritoConversor
    {
        public Models.TbFavoritos ConversorTabela(Models.Request.FavoritoRequest request)
        {
            Models.TbFavoritos tabela = new Models.TbFavoritos();

            tabela.IdLivro = request.livro;
            tabela.IdCliente = request.cliente;
            tabela.DtInclusao = request.inclusao;
            
            return tabela;
        }

        public Models.Response.FavoritoResponse ConversorResponse(Models.TbFavoritos tabela)
        {
            Models.Response.FavoritoResponse response = new Models.Response.FavoritoResponse();

            response.id = tabela.IdFavoritos;
            response.livro = tabela.IdLivro;
            response.cliente = tabela.IdCliente;
            response.inclusao = tabela.DtInclusao;

            return response;
        }
    }
}