using System;

namespace api.Utils.Conversor
{
    public class RelatorioConversor
    {
        public Models.Response.RelatorioVendaLivro ConversorRelatorioVendaLivro(Models.TbVendaLivro tabela)
        {
            Models.Response.RelatorioVendaLivro response = new Models.Response.RelatorioVendaLivro();
        
            response.id = tabela.IdVendaLivro;
            response.idlivro = tabela.IdLivro;
            response.nome_livro = tabela.IdLivroNavigation.NmLivro;
            response.qtd = tabela.NrLivros;
            response.lancamento = tabela.IdLivroNavigation.DtLancamento;
            
            response.valor_venda = Convert.ToDouble(tabela.IdLivroNavigation.VlPrecoVenda);
            response.total_vendido = Convert.ToDouble(tabela.VlVendaLivro);

            return response;
        }
    }
}