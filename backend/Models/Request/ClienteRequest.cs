using System;
using Microsoft.AspNetCore.Http;
namespace backend.Models.Request
{
    public class ClienteRequest
    {
        public class CadastrarCliente
        {
            public string Nome { get; set; }
            public string Sobrenome { get; set; }
            public string Genero { get; set; }
            public string Cpf { get; set; }
            public string Celular { get; set; }
            public IFormFile Foto { get; set; }
        }
    }
}