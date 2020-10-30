using System.Linq;

namespace backend.Utils.Conversor
{
    public class AcessoConversor
    {
        public Models.Response.AcessoResponse Conversor (Models.TbLogin tabela, string token)
        {
            Models.Response.AcessoResponse response = new Models.Response.AcessoResponse();
            
            response.nome = tabela.NmUsuario;

            Models.TbCliente cliente = tabela.TbCliente.FirstOrDefault(x => x.IdLogin == tabela.IdLogin);
            if(cliente != null)
            {
                response.id = cliente.IdCliente;
                response.perfil = "cliente";
            }
            else
            {
                Models.TbFuncionario funcionario = tabela.TbFuncionario.FirstOrDefault(x => x.IdLogin == tabela.IdLogin);
                response.id = funcionario.IdFuncionario;
                response.perfil = "funcionario";
            }

            response.token = token;
    
            return response;
        }
    }
}