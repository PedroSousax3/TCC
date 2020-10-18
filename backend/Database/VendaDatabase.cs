using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class VendaDatabase
    {
        Models.db_next_gen_booksContext db = new Models.db_next_gen_booksContext();
        public async Task<Models.TbVenda> InserirVenda(Models.TbVenda tabela)
        {
            await db.TbVenda.AddAsync(tabela);
            await db.SaveChangesAsync();

            return tabela;
        }

        public async Task<List<Models.TbVenda>> ListarVendasPorCliente(int idcliente)
        {
            List<Models.TbVenda> vendas = await db.TbVenda.Include(x => x.IdEnderecoNavigation)
                                                            .Where(y => y.IdCliente == idcliente)
                                                            .OrderByDescending(z => z.DtVenda)
                                                            .ToListAsync();

            return vendas;
        }

        public async Task<Models.TbVenda> ConsultarVendaPorId(int idvenda)
        {
            Models.TbVenda venda = await db.TbVenda.FirstOrDefaultAsync(x => x.IdVenda == idvenda);

            return venda;
        }

        public async Task<Models.TbVenda> RemovervendaPorId(int idvenda)
        {
            Models.TbVenda venda = await this.ConsultarVendaPorId(idvenda);
            db.TbVenda.Remove(venda);
            await db.SaveChangesAsync();

            return venda;
        }
    }
}