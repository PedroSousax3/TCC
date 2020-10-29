using System.Linq;

namespace backend.Utils.Conversor
{
    public class AcessoConversor
    {
        public Models.Response.AcessoResponse Conversor (Models.TbLogin tabela, string token)
        {
            Models.Response.AcessoResponse response = new Models.Response.AcessoResponse();

            Models.TbCliente cliente = tabela.TbCliente.FirstOrDefault(x => x.IdLogin == tabela.IdLogin);
            Models.TbFuncionario funcionario = tabela.TbFuncionario.FirstOrDefault(x => x.IdLogin == tabela.IdLogin);
            
            if(cliente != null)
            {
                response.id = cliente.IdCliente;
                response.nome = cliente.NmCliente;
                response.perfil = "cliente";
            }
            else
            {
                response.id = funcionario.IdFuncionario;
                response.nome = funcionario.NmFuncionario;
                response.perfil = "funcionario";
            }

            response.token = token;
    
            return response;
        }
    }
}