using System;
using System.Linq;
using System.Threading.Tasks;

namespace api.Business.Acesso
{
    public class AcessoBusiness : GerenciadorToken
    {
        Database.AcessoDatabase database = new Database.AcessoDatabase();
        public async Task<Models.TbLogin> ConsultarLoginBusiness (string user, string senha)
        {
            if(string.IsNullOrEmpty(user))
                throw new ArgumentException("Úsuario não foi informado.");
            if(string.IsNullOrEmpty(senha))
                throw new ArgumentException("Senha não foi informado.");

            Models.TbLogin login = await database.ConsultarUsuario(user, senha);      

            if(login == null)
                throw new ArgumentException("Usuario não identificado.");
            else
                return login;      
        }

        public async Task<Models.TbLogin> ConsultarUserBusiness (string user, string perfil)
        {
            if(string.IsNullOrEmpty(user))
                throw new ArgumentException("Úsuario não foi informado.");
            if(string.IsNullOrEmpty(perfil))
                throw new ArgumentException("Perfil não foi informado.");

            Models.TbLogin login = await database.ConsultarPerfil(user, perfil);      

            if(login == null)
                throw new ArgumentException("Usuario não identificado.");
            else
                return login;      
        }
        
        public async Task<Models.TbLogin> ValidarUser(Models.Response.AcessoResponse acesso)
        {
            Models.TbLogin login = await database.ConsultarPerfil(acesso.nome, acesso.perfil);

            string descript = LerToken(login, acesso.token);
            string [] dados = descript.Split("#$|#$");

            if(dados[1] == login.NmUsuario && System.Convert.ToInt32(dados[2]) == login.IdLogin)
            {
                int idpessoa = login.TbCliente.FirstOrDefault(x => x.IdLogin == login.IdLogin) == null 
                                                                                                    ? 
                                                                                                        login.TbFuncionario.FirstOrDefault(x => x.IdLogin == login.IdLogin).IdFuncionario
                                                                                                    : 
                                                                                                        login.TbCliente.FirstOrDefault(x => x.IdLogin == login.IdLogin).IdCliente;

                if(System.Convert.ToInt32(dados[0]) != idpessoa)
                    return null;
                else 
                    return login;
            }   
            else 
                throw new System.ArgumentException("Usuario invalido.");
        }
    }
}