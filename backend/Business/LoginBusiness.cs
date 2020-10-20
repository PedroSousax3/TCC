using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace backend.Business
{
  public class LoginBusiness
    {
      Business.Validador.ValidadorLogin validador = new Business.Validador.ValidadorLogin();
      Database.LoginDatabase database = new Database.LoginDatabase();
      
      public async Task<Models.TbLogin> ValidarCadastrarLogin(Models.TbLogin tabela ,Models.Request.LoginRequest.CadastrarLogin request)
      {
          bool jaexiste = await database.VerificarSeOUsuarioExiste(tabela.NmUsuario);
          bool jaexisteEmail = await database.VerificarSeEmailExiste(request.Email);
          validador.ValidarCadastroLogin(jaexisteEmail,jaexiste,tabela.DsSenha);
          await database.CadastrarLogin(tabela);
          return tabela;
      } 

      public async Task<Models.TbLogin> ValidarConfirmarLogin(Models.Request.LoginRequest.ConfirmarLogin request)
      {
         validador.ValidarConfirmarLogin(request.Usuario,request.Senha);
         return await database.confirmarLogin(request);
      }
      
      public async Task<Models.TbCliente> cadastrarCliente(Models.TbCliente tabela)
      {
         return await database.CadastrarClienteParcial(tabela);
      }
      public async Task<Models.TbLogin> ValidarDeletarLogin(int id)
      {
         validador.ValidarId(id);
         return await database.DeletarLogin(id);
      }
    }
}