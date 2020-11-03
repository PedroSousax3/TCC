using System.Threading.Tasks;
using System.Collections.Generic;
namespace api.Business
{
    public class DevolucaoBusiness : Validador.ValidadorDevolucao
    {
        Database.DevolucaoDatabase database = new Database.DevolucaoDatabase();
        public async Task<Models.TbDevolucao> ValidarCadastrarDevoucao(Models.TbDevolucao tabela)
        {
            ValidarDevolucao(tabela);
            return await database.CadastrarDevolucao(tabela);
        }

        public async Task<Models.TbDevolucao> ValidarConsultarPorIdDevolucao(int id)
        {
            ValidarId(id);
            return await database.ConsultarDevolucaoPorId(id);
        }

        public async Task<Models.TbDevolucao> ValidarConsultarPorIdVendaLivro(int id)
        {
            ValidarId(id);
            return await database.ConsultarDevolucaoPorIdVendaLivro(id);
        }

        public async Task<Models.TbDevolucao> ValidarAlterarDevolucao(int id,Models.TbDevolucao tabela)
        {
            ValidarId(id);
            ValidarDevolucao(tabela);
            return await database.AlterarDevolucao(id,tabela);
        }

        public async Task<Models.TbDevolucao> DeletarDevolucao(int id)
        {
            ValidarId(id);
            return await database.DeletarDevolucao(id);
        }
        public Task<List<Models.TbDevolucao>> ValidarListarDevolucao()
        {
            return database.ListarDevolucao();
        }
    }
}