using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class LivroDatabase
    {
        Models.db_next_gen_booksContext db = new Models.db_next_gen_booksContext();
        public async Task<List<Models.TbLivro>> LitarLivrosDatabase()
        {
            List<Models.TbLivro> livros = await db.TbLivro.Include(x => x.IdEditoraNavigation).ToListAsync();
            return livros;
        }
    }
}