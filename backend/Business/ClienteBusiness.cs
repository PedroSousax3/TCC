using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace backend.Business
{
    public class ClienteBusiness:Validador.ValidadorCliente
    {
          Database.ClienteDatabase database = new Database.ClienteDatabase(); 
        public async Task<Models.TbCliente> CadastrarCliente(Models.TbCliente tabela,int idcliente)
        {
            ValidarCliente(idcliente,tabela);
            return  await database.CadastrarCliente(idcliente,tabela);
        }
    }
}