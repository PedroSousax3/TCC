using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace backend.Database
{
    public class DevolucaoDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();

        public async Task<Models.TbDevolucao> CadastrarDevolucao(Models.TbDevolucao tabela)
        {
            await context.TbDevolucao.AddAsync(tabela);
            await context.SaveChangesAsync();
            return tabela;
        }

        public Task<Models.TbDevolucao> ConsultarDevolucaoPorId(int id)
        {
            return context.TbDevolucao.FirstOrDefaultAsync(x => x.IdDevolucao == id);
        }

        public async Task<Models.TbDevolucao> AlterarDevolucao(int id,Models.TbDevolucao novaTabela)
        {
            Models.TbDevolucao  tabela = await ConsultarDevolucaoPorId(id);
            tabela.IdVendaLivro = novaTabela.IdVendaLivro;
            tabela.VlDevolvido = novaTabela.VlDevolvido;
            tabela.BtDevolvido = novaTabela.BtDevolvido;
            tabela.DsCodigoRastreio = novaTabela.DsCodigoRastreio;
            tabela.DsComprovante = novaTabela.DsComprovante;
            tabela.DtDevolucao = novaTabela.DtDevolucao;
            tabela.DtPrevisaoEntrega = novaTabela.DtPrevisaoEntrega;
            await context.SaveChangesAsync();
            
            return tabela;
        }

        public Task<List<Models.TbDevolucao>> ListarDevolucao()
        {
            return context.TbDevolucao.ToListAsync();
        }
        
        public async Task<Models.TbDevolucao> DeletarDevolucao(int id)
        {
            Models.TbDevolucao tabela = await ConsultarDevolucaoPorId(id);
            context.TbDevolucao.Remove(tabela);
            await context.SaveChangesAsync();
            return tabela;
        }
        
    }
}