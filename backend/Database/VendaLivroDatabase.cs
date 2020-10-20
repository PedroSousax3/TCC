using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace backend.Database
{
    public class VendaLivroDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();

        public async Task<Models.TbVendaLivro> CadastrarVendaLivro(Models.TbVendaLivro tabela)
        {
            await context.TbVendaLivro.AddAsync(tabela);
            await context.SaveChangesAsync();
            return tabela;
        }

        public async Task<Models.TbVendaLivro> ConsultarVendaLivroPorId(int id)
        {
            return await context.TbVendaLivro.FirstOrDefaultAsync(x => x.IdVendaLivro == id);
        }
        
        public Task<List<Models.TbVendaLivro>> ConsultarVendaLivroPorIdVenda(int id)
        {
            return context.TbVendaLivro.Include(x => x.IdVendaNavigation).Include(x => x.IdLivroNavigation)
                                       .Where(x => x.IdVendaNavigation.IdVenda == id).ToListAsync();
        }

        public async Task<List<Models.TbVendaLivro>> ConsultarVendaLivroPorIdLivro(int id)
        {
            return await context.TbVendaLivro.Include(x => x.IdVendaNavigation).Include(x => x.IdLivroNavigation)
                                       .Where(x => x.IdLivroNavigation.IdLivro == id).ToListAsync();
        }
        public async Task<Models.TbVendaLivro> DeletarVendaLivro(int id)
        {
            Models.TbVendaLivro tabela = await ConsultarVendaLivroPorId(id);
            context.TbVendaLivro.Remove(tabela);
            await context.SaveChangesAsync();
            return tabela;
        }
        
        public async Task<Models.TbVendaLivro> AlterarVendaLivro(int id, Models.TbVendaLivro novaTabela)
        {
            Models.TbVendaLivro tabela = await ConsultarVendaLivroPorId(id);
            tabela.IdLivro = novaTabela.IdLivro;
            tabela.IdVenda = novaTabela.IdVenda;
            tabela.NrLivros = novaTabela.NrLivros;
            tabela.VlVendaLivro = novaTabela.VlVendaLivro;
            await context.SaveChangesAsync();
            return tabela;
        }

    }
}