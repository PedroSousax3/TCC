using System;
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

            return await database.ConsultarUsuario(user, senha);            
        }
    }
}