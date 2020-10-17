using System;

namespace backend.Models.Response
{
    public class EditoraResponse
    {
        public int id { get; set; }
        public string nome { get; set; }
        public DateTime fundacao { get; set; }
        public string logo { get; set; }
        public string sigla { get; set; }
    }
}