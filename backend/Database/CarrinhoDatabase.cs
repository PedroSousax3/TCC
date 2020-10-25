using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class CarrinhoDatabase
    {
        Models.db_next_gen_booksContext db = new Models.db_next_gen_booksContext();
        public async Task<Models.TbCarrinho> InserirCarrinho (Models.TbCarrinho tabela)
        {
            await db.TbCarrinho.AddAsync(tabela);
            await db.SaveChangesAsync();

            return tabela;
        }

        public async Task<Models.TbCarrinho> ConsultarCarrinhoPorId (int idcarrinho)
        {
            Models.TbCarrinho carrinho = await db.TbCarrinho.FirstOrDefaultAsync(x => x.IdCarrinho == idcarrinho);

            return carrinho;
        }

        public List<Models.TbCarrinho> ListarCarrinhoCliente (int idcliente)
        {
            List<Models.TbCarrinho> carrinhos = db.TbCarrinho.Include(x => x.IdLivroNavigation)
                                                                .Include(x => x.IdLivroNavigation.IdEditoraNavigation)
                                                                .Include(x => x.IdLivroNavigation.TbEstoque)
                                                                .Include(x => x.IdLivroNavigation.TbLivroAutor)
                                                                .ThenInclude(x => x.IdAutorNavigation)
                                                                .Where(x => x.IdCliente == idcliente)
                                                                .ToList();

            return carrinhos;
        }

        public async Task<Models.TbCarrinho> AlterarCarrinhoPorId(int idcarrinho, Models.TbCarrinho novo)
        {
            Models.TbCarrinho carrinho = await this.ConsultarCarrinhoPorId(idcarrinho);
        
            carrinho.IdCliente = novo.IdCarrinho;
            carrinho.IdLivro = novo.IdLivro;
            carrinho.NrLivro = novo.NrLivro;
            carrinho.DtAtualizacao = novo.DtAtualizacao;

            await db.SaveChangesAsync();
            return carrinho;
        }

        public async Task<Models.TbCarrinho> RemoverCarrinhoPorId(int idcarrinho)
        {
            Models.TbCarrinho carrinho = await this.ConsultarCarrinhoPorId(idcarrinho);
            db.TbCarrinho.Remove(carrinho);
            await db.SaveChangesAsync();

            return carrinho;
        }
    }
}