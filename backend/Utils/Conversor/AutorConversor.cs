namespace backend.Utils.Conversor
{
    public class AutorConversor
    {
        public Models.TbAutor Conversor(Models.Request.AutorRequest request)
        {
            Models.TbAutor tabela = new Models.TbAutor();

            tabela.NmAutor = request.nome;
            tabela.DtNascimento = request.nascimento;
            tabela.DsAutor = request.descricao;

            return tabela;
        }

        public Models.Response.AutorResponse Conversor(Models.TbAutor tabela)
        {
            Models.Response.AutorResponse response = new Models.Response.AutorResponse();

            response.id = tabela.IdAutor;
            response.nome = tabela.NmAutor;
            response.nascimento = tabela.DtNascimento;
            response.descricao = tabela.DsAutor;
            response.foto = tabela.DsFoto;

            return response;
        }
    }
}