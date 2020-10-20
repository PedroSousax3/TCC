using System;

namespace backend.Utils.Conversor
{
    public class LivroConversor
    {
        public Models.TbLivro Converter(Models.Request.LivroRequest livro)
        {
            Models.TbLivro tabela = new Models.TbLivro();

            tabela.IdEditora = livro.editora;
            tabela.IdMedidas = livro.medidas;
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

            return tabela;
        }

        public Models.Response.LivroResponse Converter(Models.TbLivro tabela)
        {
            Models.Response.LivroResponse livro = new Models.Response.LivroResponse();

            livro.id = tabela.IdLivro;
            livro.medida = tabela.IdMedidas;
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

            return livro;
        }
    }
}