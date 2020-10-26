using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class AcessoDatabase
    {
        Models.db_next_gen_booksContext db = new Models.db_next_gen_booksContext();
        public async Task<Models.TbLogin> ConsultarUsuario(string user, string senha)
        {
            Models.TbLogin login = await db.TbLogin.Include(x => x.TbCliente)
                                                    .Include(x => x.TbFuncionario)
                                                    .FirstOrDefaultAsync(x => x.NmUsuario == user
                                                                            && x.DsSenha == senha);
            if(login == null)
                throw new ArgumentException("Usuario não cadastrado.");

            return login;
        }
    }
}