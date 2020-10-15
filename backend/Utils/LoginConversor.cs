using System;
namespace backend.Utils
{
    public class LoginConversor
    {
        Database.LoginDatabase database = new Database.LoginDatabase();
        public Models.TbLogin ParaTabelaCadastrarLogin(Models.Request.LoginRequest.CadastrarLogin request)
        {
            Models.TbLogin tabela = new Models.TbLogin();
            tabela.NmUsuario = request.Usuario;
           
           if(request.Senha == request.ConfirmarSenha)
              tabela.DsSenha = request.Senha;
            else
              throw new ArgumentException("Confirmação de senha incorreta");
            
           return tabela;
        }

        public Models.Response.LoginResponse.CadastrarLogin ParaResponseCadastrarLogin(Models.TbLogin tabela)
        {
             Models.Response.LoginResponse.CadastrarLogin response = new Models.Response.LoginResponse.CadastrarLogin();
             response.Id = tabela.IdLogin;
             response.Usuario = tabela.NmUsuario;

             return response;
        }

        public Models.Response.LoginResponse.ConfirmarLogin ParaResponseConfirmarLogin(Models.TbLogin tabela)
        {
            Models.Response.LoginResponse.ConfirmarLogin response = new Models.Response.LoginResponse.ConfirmarLogin();
            response.IdLogin = tabela.IdLogin;
            response.NomeUsuario = tabela.NmUsuario;
            database.VerificarPerfil(tabela.IdLogin,response);
            
            return response;
        }
    }
}