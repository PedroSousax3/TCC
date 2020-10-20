using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace backend.Models.Response
{
    public class ArquivoResponse
    {
        public string Nome { get; set; }
        public FileContentResult Arquivo { get; set; }

        public ArquivoResponse(string nome, FileContentResult arquivo)
        {
            this.Nome = nome;
            this.Arquivo = arquivo;
        }
    }
}