namespace backend.Utils.Conversor
{
    public class LivroAutorConversor
    {
        public Models.TbLivroAutor Conversor(Models.Request.LivroAutorRequest request)
        {
            Models.TbLivroAutor tabela = new Models.TbLivroAutor();

            tabela.IdLivro = request.livro;
            tabela.IdAutor = request.autor;

            return tabela;
        }

        public Models.Response.LivroAutorResponse Conversor(Models.TbLivroAutor tabela)
        {
            Models.Response.LivroAutorResponse response = new Models.Response.LivroAutorResponse();

            response.id = tabela.IdLivroAutor;
            response.livro = tabela.IdLivro;
            response.autor = tabela.IdAutor;

            return response;
        }
    }
}