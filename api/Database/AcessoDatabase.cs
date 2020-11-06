using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace api.Database
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
            
            login.DtUltimoLogin = DateTime.Now;

            await db.SaveChangesAsync();

            return login;
        }

        public async Task<Models.TbLogin> ConsultarPerfil(string user, string perfil)
        {
            Models.TbLogin login = new Models.TbLogin();

            if(perfil == "cliente")
            {
                login = await db.TbLogin.Include(x => x.TbCliente)
                                        .FirstOrDefaultAsync(x => x.NmUsuario == user);    
            }
            else if (perfil == "funcionario")
            {
                login = await db.TbLogin.Include(x => x.TbFuncionario)
                                        .FirstOrDefaultAsync(x => x.NmUsuario == user);
            }
            login.DtUltimoLogin = Convert.ToDateTime(login.DtUltimoLogin);
            return login;
        }
    }
}