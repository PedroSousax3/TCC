using System;

namespace backend.Models.Request
{
    public class VendaStatusRequest
    {
        public int venda { get; set; }
        public string status { get; set; }
        public string DsVendaStatus { get; set; }
    }
}