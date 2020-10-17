using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Linq;
namespace backend.Database
{
    public class ClienteDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();
        public async  Task<Models.TbCliente> CadastrarCliente(int idCliente,Models.TbCliente tabelaCliente)
        {
            Models.TbCliente tabela = await ConsultarClientePorId(idCliente);
            tabela.NmCliente = tabelaCliente.NmCliente;
            tabela.DsCelular = tabelaCliente.DsCelular;
            tabela.DsCpf = tabelaCliente.DsCpf;
            tabela.DsFoto = tabelaCliente.DsFoto;
            tabela.TpGenero = tabelaCliente.TpGenero;
            context.SaveChanges();
            return tabela;  
        }
        public Task<Models.TbCliente> ConsultarClientePorId(int id)
        {
            return context.TbCliente.FirstOrDefaultAsync(x => x.IdCliente == id);
        }
    }
}