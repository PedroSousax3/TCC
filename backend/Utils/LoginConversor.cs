using System;
namespace backend.Utils
{
    public class LoginConversor
    {
        public Models.TbLogin ParaTabela(Models.Request.LoginRequest.CadastrarLogin request)
        {
            Models.TbLogin tabela = new Models.TbLogin();
            tabela.NmUsuario = request.Usuario;
           
           if(request.Senha == request.ConfirmarSenha)
              tabela.DsSenha = request.Senha;
            else
              throw new ArgumentException("Confirmação de senha incorreta");
            
           return tabela;
        }

        public Models.Response.LoginResponse.CadastrarLogin ParaResponse(Models.TbLogin tabela)
        {
             Models.Response.LoginResponse.CadastrarLogin response = new Models.Response.LoginResponse.CadastrarLogin();
             response.Id = tabela.IdLogin;
             response.Usuario = tabela.NmUsuario;

             return response;
        }
    }
}