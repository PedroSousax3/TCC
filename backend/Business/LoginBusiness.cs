namespace backend.Business
{
  public class LoginBusiness
    {
      Business.Validador.ValidadorLogin validador = new Business.Validador.ValidadorLogin();
      Database.LoginDatabase database = new Database.LoginDatabase();
      
      public Models.TbLogin ValidarCadastrarLogin(Models.TbLogin tabela)
      {
          bool jaexiste = database.VerificarSeOUsuarioExiste(tabela.NmUsuario);
          validador.ValidarCadastroLogin(jaexiste,tabela.DsSenha);
          database.CadastrarLogin(tabela);
          return tabela;
      }  
      public Models.TbLogin ValidarConfirmarLogin(Models.Request.LoginRequest.ConfirmarLogin request)
      {
         validador.ValidarConfirmarLogin(request.Usuario,request.Senha);
         return database.confirmarLogin(request);
      }
    }
}