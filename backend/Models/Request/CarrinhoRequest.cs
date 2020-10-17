namespace backend.Models.Request
{
    public class CarrinhoRequest
    {
        public int livro { get; set; }
        public int cliente { get; set; }
        public string qtd { get; set; }
    }
}