using System;
using Microsoft.AspNetCore.Http;
namespace backend.Models.Request
{
    public class ClienteRequest
    {
        public class CadastroCliente 
        {
            public string usuario { get; set; }
            public string email { get; set; }
            public string senha { get; set; }
            public string cpf { get; set; }
            public string nome { get; set; }
            public string celular { get; set; }
            public IFormFile foto { get; set; }
            public string genero { get; set; }
        }


        public class Cliente
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