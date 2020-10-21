using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class LivroDatabase
    {
        Models.db_next_gen_booksContext db = new Models.db_next_gen_booksContext();
        public async Task<Models.TbLivro> InserirDatabaseAsync (Models.TbLivro livro)
        {
            await db.TbLivro.AddAsync(livro);
            await db.SaveChangesAsync();

            return livro;
        }

        public async Task<List<Models.TbLivro>> LitarLivrosDatabase()
        {
            List<Models.TbLivro> livros = await db.TbLivro.Include(x => x.IdEditoraNavigation).Include(x => x.IdMedidaNavigation).ToListAsync();
            return livros;
        }

        public async Task<List<Models.TbLivro>> ListarLivrosFiltro(Models.Request.LivrosFiltrosRequest filtros)
        {
            List<Models.TbLivro> livros = await db.TbLivro.Include(x => x.IdEditoraNavigation).ToListAsync();
            
            if(string.IsNullOrEmpty(filtros.acabamento))
                livros = livros.Where(x => x.TpAcabamento.Contains(filtros.acabamento))
                                .ToList();
            if(string.IsNullOrEmpty(filtros.nome))
                livros = livros.Where(x => x.IdEditoraNavigation.NmEditora.Contains(filtros.nome) || 
                                            x.NmLivro.Contains(filtros.nome))
                                            .ToList();
            if(filtros.valor_maximo >= 0 || filtros.valor_minimo >= 0)
                livros = livros.Where(x => x.VlPrecoVenda >= Convert.ToDecimal(filtros.valor_minimo) || 
                                            x.VlPrecoVenda <= Convert.ToDecimal(filtros.valor_maximo))
                                            .ToList(); 
            if(filtros.data_publicacao != null)
                livros = livros.Where(x => x.DtLancamento == filtros.data_publicacao)
                                .ToList();
            
            return livros;
        }
    }
}