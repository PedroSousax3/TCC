using System;
using System.Collections.Generic;

namespace backend.Models.Response
{
    public class CarrinhoResponse
    {
        public int id { get; set; }
        public int cliente { get; set; }
        public DateTime atualizacao { get; set; }
        public string qtd { get; set; }
        public Models.Response.LivroResponse livro { get; set; }
        public Models.Response.EstoqueResponce estoque { get; set; }
    }
}