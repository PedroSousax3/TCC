using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace api.Business
{
    public class CarrinhoBusiness : Validador.ValidadorCarrinho
    {
        Database.CarrinhoDatabase database = new Database.CarrinhoDatabase();
        public async Task<Models.TbCarrinho> ValidarInserirCarrinho(Models.TbCarrinho tabela)
        {
            ValidarCarrinho(tabela);
            return await database.InserirCarrinhoDatabase(tabela);
        }

        public async Task<Models.TbCarrinho> ValidarConsultaPorId(int id)
        {
            ValidarId(id);
            return await database.ConsultarCarrinhoPorId(id);
        } 

        public async Task<Models.TbCarrinho> ValidarAlteracaoCarrinho(int id, Models.TbCarrinho tabela)
        {
           ValidarCarrinho(tabela);
           ValidarId(id);
           return await database.AlterarCarrinhoPorId(id,tabela);
        }

        public List<Models.TbCarrinho> ValidarListarCarrinhoCliente(int id)
        {
            ValidarId(id);
            return database.ListarCarrinhoCliente(id);
        }

        public async Task<Models.TbCarrinho> ValidarAlterarCarrinho(int id,Models.TbCarrinho tabela)
        {
            ValidarCarrinho(tabela);
            ValidarId(id);
            return await database.AlterarCarrinhoPorId(id,tabela);
        }

        public async Task<Models.TbCarrinho> ValidarDeletarCarrinho(int id)
        {
            ValidarId(id);
            return await database.RemoverCarrinhoPorId(id);
        }
    }
}