using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace backend.Database
{
    public class MedidasDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();
        public async Task<Models.TbMedidas> CadastrarMedidas(Models.TbMedidas tabela)
        {
            await context.TbMedidas.AddAsync(tabela);
            await context.SaveChangesAsync();
            return tabela;
        }

        public Task<List<Models.TbMedidas>> ListarMedidas()
        {
            return context.TbMedidas.ToListAsync();
        }

        public Task<Models.TbMedidas> ConsultarPorIdMedidas(int id)
        {
           return context.TbMedidas.FirstOrDefaultAsync(x => x.IdMedidas == id);
        }

        public async Task<Models.TbMedidas> AlterarMedidas(int id,Models.TbMedidas novaTabela)
        {
            Models.TbMedidas tabela = await ConsultarPorIdMedidas(id);
            tabela.VlAltura = novaTabela.VlAltura;
            tabela.VlLargura = novaTabela.VlLargura;
            tabela.VlPeso = novaTabela.VlPeso;
            tabela.VlProfundidades = novaTabela.VlProfundidades;
            await context.SaveChangesAsync();
            return tabela;
        }
        
        public async Task<Models.TbMedidas> DeletarMedidas(int id)
        {
            Models.TbMedidas tabela = await ConsultarPorIdMedidas(id);
            context.TbMedidas.Remove(tabela);
            await context.SaveChangesAsync();
            return tabela;
        }
    }
}