using System;

namespace backend.Models.Response
{
    public class CarrinhoResponse
    {
        public int id { get; set; }
        public int livro { get; set; }
        public int cliente { get; set; }
        public DateTime atualizacao { get; set; }
        public string qtd { get; set; }
    }
}