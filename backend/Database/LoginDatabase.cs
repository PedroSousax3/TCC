using System.Collections.Generic;
using System.Collections;
using System.Linq;
namespace backend.Database
{
    public class LoginDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();

        public Models.TbLogin CadastrarLogin(Models.TbLogin tabela)
        {
            context.TbLogin.Add(tabela);
            context.SaveChanges();
            return tabela;
        }
        public bool VerificarSeOUsuarioExiste(string usuario)
        {
            Models.TbLogin tabela = context.TbLogin.FirstOrDefault(x => x.NmUsuario == usuario);
            if(tabela == null)
               return false;
            else
               return true;
        }
    }
}