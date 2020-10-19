using System;

namespace backend.Models.Request
{
    public class EstoqueRequest
    {
        public int livro { get; set; }
        public int qtd { get; set; }
    }
}