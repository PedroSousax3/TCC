using System;
using System.Linq;

namespace backend.Utils.Conversor
{
    public class FavoritoConversor
    {
        public Models.TbFavoritos ConversorTabela(Models.Request.FavoritoRequest request)
        {
            Models.TbFavoritos tabela = new Models.TbFavoritos();

            tabela.IdLivro = request.livro;
            tabela.IdCliente = request.cliente;
            tabela.DtInclusao = DateTime.Now;
            
            return tabela;
        }

        public Models.Response.FavoritoResponse ConversorResponse(Models.TbFavoritos tabela)
        {
            Models.Response.FavoritoResponse response = new Models.Response.FavoritoResponse();

            response.id = tabela.IdFavoritos;
            response.livro = tabela.IdLivro;
            response.nome = tabela.IdLivroNavigation.NmLivro;
            response.descricao = tabela.IdLivroNavigation.DsLivro;
            response.editora = tabela.IdLivroNavigation.IdEditoraNavigation.NmEditora;
            response.lancamento = tabela.IdLivroNavigation.DtLancamento;
            response.atores = tabela.IdLivroNavigation.TbLivroAutor.Select(x => x.IdAutorNavigation.NmAutor).ToList();
            response.qtd = tabela.IdLivroNavigation.TbEstoque.FirstOrDefault(x => x.IdLivro == response.livro).NrQuantidade;

            return response;
        }
    }
}