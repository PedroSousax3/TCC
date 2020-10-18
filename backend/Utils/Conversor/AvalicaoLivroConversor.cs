namespace backend.Utils.Conversor
{
    public class AvalicaoLivroConversor
    {
        public Models.TbAvaliacaoLivro Conversor(Models.Request.AvaliacaoLivro request)
        {
            Models.TbAvaliacaoLivro tabela = new Models.TbAvaliacaoLivro();

            tabela.VlAvaliacao = request.avaliacao;
            tabela.IdCliente = request.cliente;
            tabela.IdVendaLivro = request.venda_livro;
            tabela.DsComentario = request.comentario;
            tabela.DtComentario = request.data_publicacao;

            return tabela;
        }

        public Models.Response.AvaliacaoLivroResponse Conversor(Models.TbAvaliacaoLivro tabela)
        {
            Models.Response.AvaliacaoLivroResponse response = new Models.Response.AvaliacaoLivroResponse();

            response.avaliacao = tabela.VlAvaliacao;
            response.cliente = tabela.IdCliente;
            response.venda_livro = tabela.IdVendaLivro;
            response.comentario = tabela.DsComentario;
            response.data_publicacao = tabela.DtComentario;

            return response;
        }
    }
}