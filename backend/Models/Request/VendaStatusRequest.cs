using System;

namespace backend.Models.Request
{
    public class VendaStatusRequest
    {
        public int id { get; set; }
        public int venda { get; set; }
        public string status { get; set; }
        public string DsVendaStatus { get; set; }
        public DateTime DtAtualizacao { get; set; }
    }
}