namespace backend.Models.Response
{
    public class VendaLivroResponse
    {
        public int id { get; set; }
        public int venda { get; set; }
        public int livro { get; set; }
        public int qtd { get; set; }
        public decimal valor { get; set; }
    }
}