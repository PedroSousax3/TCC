namespace backend.Utils.Conversor
{
    public class LivroGeneroConversor
    {
        public Models.TbLivroGenero Conversor(Models.Request.LivroGeneroRequest request)
        {
            Models.TbLivroGenero tabela = new Models.TbLivroGenero();

            tabela.IdLivro = request.livro;
            tabela.IdGenero = request.genero;

            return tabela;
        }

        public Models.Response.LivroGeneroResponse Conversor(Models.TbLivroGenero tabela)
        {
            Models.Response.LivroGeneroResponse response = new Models.Response.LivroGeneroResponse();

            tabela.IdLivroGenero = response.id;
            tabela.IdLivro = response.livro;
            tabela.IdGenero = response.genero;

            return response;
        }
    }
}