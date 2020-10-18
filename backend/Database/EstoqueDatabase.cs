using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class EstoqueDatabase
    {
        Models.db_next_gen_booksContext db = new Models.db_next_gen_booksContext();
        public async Task<Models.TbEstoque> InserirEstoque (Models.TbEstoque tabela)
        {
            await db.TbEstoque.AddAsync(tabela);
            await db.SaveChangesAsync();

            return tabela;
        }

        public async Task<Models.TbEstoque> ConsultarEstoquePorId (int idestoque)
        {
            Models.TbEstoque estoque = await db.TbEstoque.FirstOrDefaultAsync(x => x.IdEstoque == idestoque);

            return estoque;
        }

        public async Task<List<Models.TbEstoque>> ListarEstoquePorLivro (int idlivro)
        {
            List<Models.TbEstoque> estoques = await db.TbEstoque.Where(x => x.IdLivro == idlivro).ToListAsync();

            return estoques;
        }

        public async Task<Models.TbEstoque> AlterarEstoquePorId(int idestoque, Models.TbEstoque novo)
        {
            Models.TbEstoque estoque = await this.ConsultarEstoquePorId(idestoque);
        
            estoque.IdLivro = novo.IdLivro;
            estoque.NrQuantidade = novo.NrQuantidade;
            estoque.DtAtualizacao = novo.DtAtualizacao;

            await db.SaveChangesAsync();
            return estoque;
        }

        public async Task<Models.TbEstoque> RemoverEstoquePorId(int idestoque)
        {
            Models.TbEstoque estoque = await this.ConsultarEstoquePorId(idestoque);
            
            db.TbEstoque.Remove(estoque);
            await db.SaveChangesAsync();
            return estoque;
        }
    }
}