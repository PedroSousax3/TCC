using System;

namespace backend.Models.Request
{
    public class FavoritoRequest
    {
        public int livro { get; set; }
        public int cliente { get; set; }
        public DateTime inclusao { get; set; }
    }
}