using backend.Models.Response;
using System.Collections.Generic;

namespace backend.Models.Response
{
    public class LivroCompleto
    {
        public int idlivro { get; set; }
        public LivroResponse livro { get; set; }
        public List<LivroAutorResponse> autores { get; set; }
        public List<LivroGeneroResponse> generos { get; set; }
        public EstoqueResponce estoque_livro { get; set; }
    }
}