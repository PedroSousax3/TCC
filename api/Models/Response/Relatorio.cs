using System;

namespace api.Models.Response
{
    public class RelatorioVendaLivro 
    {
        public int id { get; set; }
        public int idlivro { get; set; }
        public int qtd { get; set; }
        public double total_vendido { get; set; }
        public string nome_livro { get; set; }
        public DateTime lancamento { get; set; }
        public double valor_compra { get; set; }
        public double valor_venda { get; set; }
    }
}