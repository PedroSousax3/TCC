namespace backend.Models.Response
{
    public class MedidaResponse
    {
        public int id { get; set; }
        public int livro { get; set; }
        public decimal altura { get; set; }
        public decimal largura { get; set; }
        public decimal profundidade { get; set; }
        public decimal peso { get; set; }
    }
}