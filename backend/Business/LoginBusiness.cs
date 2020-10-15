namespace backend.Business
{
  public class LoginBusiness
    {
      Business.Validador.ValidadorLogin validador = new Business.Validador.ValidadorLogin();
      Database.LoginDatabase database = new Database.LoginDatabase();
      
      public Models.TbLogin ValidarCadastrarLogin(Models.TbLogin tabela)
      {
          bool jaexiste = database.VerificarSeOUsuarioExiste(tabela.NmUsuario);
          validador.ValidarLogin(jaexiste,tabela.DsSenha);
          database.CadastrarLogin(tabela);
          return tabela;
      }  
    }
}