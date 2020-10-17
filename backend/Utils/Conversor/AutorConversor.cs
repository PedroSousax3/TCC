using System.Collections.Generic;
using System.Linq;
namespace backend.Utils.Conversor
{
    public class AutorConversor
    {
        public Models.TbAutor ParaTabelaAutor(Models.Request.AutorRequest.CadastrarAutor request)
        {
            Models.TbAutor tabela = new Models.TbAutor();
            tabela.DsAutor = request.Descricao;
            tabela.NmAutor = request.Nome;
            tabela.DtNascimento = request.Nascimento;
            return tabela;
        }

        public Models.Response.AutorResponse ParaResponseAutor(Models.TbAutor tabela)
        {
            Models.Response.AutorResponse response = new Models.Response.AutorResponse();
            response.Id = tabela.IdAutor;
            response.Nome = tabela.NmAutor;
            response.Descricao = tabela.DsAutor;
            response.Nascimento = tabela.DtNascimento;
            response.Foto = tabela.DsFoto;
            return response;
        }
        public List<Models.Response.AutorResponse> ParaListaResponseAutor(List<Models.TbAutor> tabela)
        {
            return tabela.Select(x =>ParaResponseAutor(x)).ToList();
        }
    }
}