using System;
using System.Collections.Generic;

namespace api.Models.Response
{
    public class DevolucaoResponse
    {
        public int id { get; set; }
        public int vendalivro { get; set; }
        public string motivo { get; set; }
        public decimal valor { get; set; }
        public DateTime data_devolucao { get; set; }
        public string codigo_ratreio { get; set; }
        public string comprovante { get; set; }
        public DateTime? previsao_entrega { get; set; }
        public sbyte? devolvido { get; set; }
    }

    public class RelatorioDevolucoaResponse 
    {
        public DevolucaoResponse devolucao { get; set; }
        public VendaLivroResponse vendalivro { get; set; }
        public LivroCompleto livros { get; set; }
    }
}