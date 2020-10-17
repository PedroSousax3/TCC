using System;
using Microsoft.AspNetCore.Http;

namespace backend.Models.Request
{
    public class AutorRequest
    {
        public class CadastrarAutor
        {
            public string Nome { get; set; }
            public DateTime Nascimento { get; set; }
            public string  Descricao { get; set; }
            public FormFile Foto { get; set; }
        }
    }
}