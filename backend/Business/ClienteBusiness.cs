using System.Threading.Tasks;
using System.Collections.Generic;
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
        public async Task<Models.TbCliente> ValidarDeletarCliente(int id)
        {
            ValidarClienteExiste(id);
            return await database.DeletarCliente(id);
        }
        public async Task<Models.TbCliente> ValidarConsultaPorId(int id)
        {
            ValidarClienteExiste(id);
            return await database.ConsultarClientePorId(id);
        }
        public async Task<List<Models.TbCliente>> ValidarListarClientes()
        {
            return await database.ListarClientes();
        }
    }
}