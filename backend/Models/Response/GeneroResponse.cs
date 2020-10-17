namespace backend.Models.Response
{
    public class GeneroResponse
    {
        public class ListarGeneros
        {
            public int IdGenero { get; set; }
            public string Genero { get; set; }
            public string Descricao { get; set; }
            public string Foto { get; set; }
        }
    }
}