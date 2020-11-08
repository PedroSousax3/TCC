using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace api.Models.Response
{
    public class ArquivoResponse
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string NomeArquivo { get; set; }
        public ArquivoResponse(int id, string nome, string nomearquivo)
        {   
            this.Id = id;
            this.Nome = nome;
            this.NomeArquivo = nomearquivo;
        }
    }
}