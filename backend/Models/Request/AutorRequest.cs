using System;

namespace backend.Models.Request
{
    public class AutorRequest
    {
        public string nome { get; set; }
        public DateTime nascimento { get; set; }
        public string descricao { get; set; }
    }
}