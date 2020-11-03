using System.Linq;
using System.Threading.Tasks;

namespace api.Business.Acesso
{
    public class ValidadorToken : GerenciadorToken
    {

        public async Task<Models.TbLogin> ValidarUser(Models.Response.AcessoResponse acesso)
        {
            Database.AcessoDatabase FunctionAcessoDatabase = new Database.AcessoDatabase();
            Models.TbLogin login = await FunctionAcessoDatabase.ConsultarPerfil(acesso.nome);

            string descript = LerToken(login, acesso.token);
            string [] dados = descript.Split("#$|#$");

            if(dados[2] == login.DtUltimoLogin.ToString() && dados[1] == login.NmUsuario)
            {
                int idpesso = login.TbCliente.FirstOrDefault(x => x.IdLogin == login.IdLogin) != null 
                                                                                                    ? 
                                                                                                        login.TbCliente.FirstOrDefault(x => x.IdLogin == login.IdLogin).IdCliente 
                                                                                                    : 
                                                                                                        login.TbFuncionario.FirstOrDefault(x => x.IdLogin == login.IdLogin).IdFuncionario;

                if(idpesso == acesso.id)
                {
                    return login;
                }
            }   

            return null;
        }
        public void ValidarPermição () 
        {

        }
    }
}