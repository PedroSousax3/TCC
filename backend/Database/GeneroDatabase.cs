using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System;
namespace backend.Database
{
    public class GeneroDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();
        public List<Models.TbGenero> ListarGeneros()
        {
           List<Models.TbGenero> tabela = context.TbGenero.ToList();
            if(tabela.Count == 0)
                throw new ArgumentException("Ainda não há registros");
            
            return tabela;
        }
    }
}