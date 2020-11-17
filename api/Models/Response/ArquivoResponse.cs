using System.Collections.Generic;
using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace api.Models.Response
{
    public class PosterResponse
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string NomeArquivo { get; set; }
        public PosterResponse(int id, string nome, string nomearquivo)
        {   
            this.Id = id;
            this.Nome = nome;
            this.NomeArquivo = nomearquivo;
        }
    }   

    public class PosterCompletoResponse 
    {
        public int qtd { get; set; }
        public List<PosterResponse> posteres { get; set; }
    }
}