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
        public Models.Response.LivroResponse informacoes { get; set; }
        public List<Models.Response.AutorResponse> autores { get; set; }
        public Models.Response.EstoqueResponce estoque { get; set; }
    }
}