using System;

namespace backend.Utils.Conversor
{
    public class LivroConversor : Utils.Conversor.MedidasConversor
    {
        public Models.TbLivro Conversor(Models.Request.LivroRequest livro)
        {
            Models.TbLivro tabela = new Models.TbLivro();

            tabela.IdEditora = livro.editora;
            tabela.NmLivro = livro.nome;
            tabela.DsLivro = livro.descricao;
            tabela.DtLancamento = livro.lancamento;
            tabela.DsIdioma = livro.idioma;
            tabela.TpAcabamento = livro.encapamento;
            tabela.NrPaginas = livro.paginas;
            tabela.DsIsbn = livro.isbn;
            tabela.NrEdicao = livro.edicao;
            tabela.VlPrecoCompra = Convert.ToDecimal(livro.compra);
            tabela.VlPrecoVenda = Convert.ToDecimal(livro.venda);
            tabela.IdMedidaNavigation = Conversor(livro.medidas);
            return tabela;
        }

        public Models.Response.LivroResponse Conversor(Models.TbLivro tabela)
        {
            Models.Response.LivroResponse livro = new Models.Response.LivroResponse();

            livro.id = tabela.IdLivro;
            livro.editora = tabela.IdEditora;
            livro.nome = tabela.NmLivro;
            livro.descricao = tabela.DsLivro;
            livro.lancamento = tabela.DtLancamento;
            livro.idioma = tabela.DsIdioma;
            livro.encapamento = tabela.TpAcabamento;
            livro.foto = tabela.DsCapa;
            livro.paginas = tabela.NrPaginas;
            livro.isbn = tabela.DsIsbn;
            livro.edicao = tabela.NrEdicao;
            livro.compra = Convert.ToDouble(tabela.VlPrecoCompra);
            livro.venda = Convert.ToDouble(tabela.VlPrecoVenda);
            livro.medidas = Conversor(tabela.IdMedidaNavigation);

            return livro;
        }
    }
}