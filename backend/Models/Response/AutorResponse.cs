using System;

namespace backend.Models.Response
{
    public class AutorResponse
    {
        public int id { get; set; }
        public string nome { get; set; }
        public DateTime nascimento { get; set; }
        public string descricao { get; set; }
        public string foto { get; set; }
    }
}