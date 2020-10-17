using System;

namespace backend.Models.Response
{
    public class AutorResponse
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public DateTime Nascimento { get; set; }
        public string  Descricao { get; set; }
        public string Foto { get; set; }
    }
}