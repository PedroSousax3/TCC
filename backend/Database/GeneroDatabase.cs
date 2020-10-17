using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System;
namespace backend.Database
{
    public class GeneroDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();

        public Models.TbGenero CadastrarGenero(Models.TbGenero tabela)
        {
            context.TbGenero.Add(tabela);
            context.SaveChanges();
            return tabela;
        }
        public Models.TbGenero AlterarGenero(int id,Models.TbGenero novaTabela)
        {
            Models.TbGenero tabela = ConsultarGeneroPorId(id);
            tabela.DsFoto = novaTabela.DsFoto;
            tabela.NmGenero = novaTabela.NmGenero;
            tabela.TbLivroGenero = novaTabela.TbLivroGenero;
            tabela.DsGenero = novaTabela.DsGenero;
            context.SaveChanges();

             return tabela;
        }

        public List<Models.TbGenero> ListarGeneros()
        {
           List<Models.TbGenero> tabela = context.TbGenero.ToList();
            if(tabela.Count == 0)
                throw new ArgumentException("Ainda não há registros");
            
            return tabela;
        }
        public Models.TbGenero ConsultarGeneroPorId(int id)
        {
            return context.TbGenero.FirstOrDefault(x => x.IdGenero == id);
        }
        public Models.TbGenero DeletarGenero(int id)
        {
           Models.TbGenero tabela = ConsultarGeneroPorId(id);
           context.TbGenero.Remove(tabela);
            context.SaveChanges();
            return tabela;
        }
        public bool VerificarGeneroJaExiste(string genero)
        {
            bool resposta = false;
            Models.TbGenero tabela = context.TbGenero.FirstOrDefault(x => x.NmGenero == genero);
            if(tabela != null)
               resposta = true;
            
            return resposta;
        }

    }
}