using System;

namespace backend.Models.Response
{
    public class FavoritoResponse
    {
        public int id { get; set; }
        public int livro { get; set; }
        public int cliente { get; set; }
        public DateTime inclusao { get; set; }
    }
}