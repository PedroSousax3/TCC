using System.Collections.Generic;
using System.Collections;
using System.Linq;
namespace backend.Database
{
    public class ClienteDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();
        public Models.TbCliente CadastrarCliente(int idCliente,int idLogin,Models.TbCliente tabelaCliente)
        {
             Models.TbCliente tabela = context.TbCliente.FirstOrDefault(x => x.IdCliente == idCliente);
             tabela.IdLogin = idLogin;
             tabela.NmCliente = tabelaCliente.NmCliente;
             tabela.DsCelular = tabelaCliente.DsCelular;
             tabela.DsFoto = tabelaCliente.DsFoto;
             tabela.TpGenero = tabelaCliente.TpGenero;
             context.SaveChanges();
             return tabela;
        }
    }
}