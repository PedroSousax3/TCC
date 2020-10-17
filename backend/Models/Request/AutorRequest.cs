using System;
using Microsoft.AspNetCore.Http;

namespace backend.Models.Request
{
    public class AutorRequest
    {
        public string nome { get; set; }
        public DateTime nascimento { get; set; }
        public string  descricao { get; set; }
        public FormFile foto { get; set; }
    }
}