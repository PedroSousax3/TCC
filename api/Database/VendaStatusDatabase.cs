using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace api.Database
{
    public class VendaStatusDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();

        public async Task<Models.TbVendaStatus> CadastrarVendaStatus(Models.TbVendaStatus tabela)
        {
            await context.TbVendaStatus.AddAsync(tabela);
            await context.SaveChangesAsync();
            return tabela;
        }

        public Task<Models.TbVendaStatus> ConsultarPorIdVendaStatus(int id)
        {
            return context.TbVendaStatus.FirstOrDefaultAsync(x => x.IdVendaStatus == id);
        }

        public Task<Models.TbVendaStatus> ConsultarVendaStatusPorIdVenda(int id)
        {
            return context.TbVendaStatus.FirstOrDefaultAsync(x => x.IdVendaNavigation.IdVenda == id);
        }

        public async Task<Models.TbVendaStatus> AlterarVendaStatus(int id, Models.TbVendaStatus novaTabela)
        {
            Models.TbVendaStatus tabela = await ConsultarPorIdVendaStatus(id);
            tabela.DsVendaStatus = novaTabela.DsVendaStatus;
            tabela.DtAtualizacao = novaTabela.DtAtualizacao;
            tabela.IdVenda = novaTabela.IdVenda;
            tabela.NmStatus = novaTabela.NmStatus;
            await context.SaveChangesAsync();
            return tabela;
        }

        public async Task<Models.TbVendaStatus> DeletarVendaStatus(int id)
        {
            Models.TbVendaStatus tabela = await ConsultarPorIdVendaStatus(id);
            context.TbVendaStatus.Remove(tabela);
            await context.SaveChangesAsync();
            return tabela;
        }
    }
}