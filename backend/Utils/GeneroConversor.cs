using System.Collections;
using System.Collections.Generic;
using System.Linq;
namespace backend.Utils
{
    public class GeneroConversor
    {
        public Models.Response.GeneroResponse.ListarGeneros ParaResponseListarGenero(Models.TbGenero tabela)
        {
            Models.Response.GeneroResponse.ListarGeneros response = new Models.Response.GeneroResponse.ListarGeneros();
            response.IdGenero = tabela.IdGenero;
            response.Genero = tabela.NmGenero;
            response.Descricao = tabela.DsGenero;

            return response;
        }
        public List<Models.Response.GeneroResponse.ListarGeneros> ParaListaResponseListarGenero(List<Models.TbGenero> tabela)
        {
            return tabela.Select(x => ParaResponseListarGenero(x)).ToList();
        }
    }
}