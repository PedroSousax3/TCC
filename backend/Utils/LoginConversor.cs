using System;
using System.Linq;
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
        public Models.TbLogin ParaTabelaClienteLogin(Models.TbLogin tabela,Models.Request.LoginRequest.CadastrarLogin request)
        {
            if(request.Email == request.ConfirmarEmail)
            {
                tabela.TbCliente.Add(new Models.TbCliente(){
                    DsEmail = request.Email,
                    IdLogin = tabela.IdLogin
                }); 
            }
            else
              throw new ArgumentException("Confirmação de Email incorreta");
              
              return tabela;
        }
        public Models.Response.LoginResponse.ConfirmarLogin ParaResponseCadastrarLogin(Models.TbLogin tabela)
        {
             Models.Response.LoginResponse.ConfirmarLogin response = new Models.Response.LoginResponse.ConfirmarLogin();
             response.Id = tabela.IdLogin;
             response.NomeUsuario = tabela.NmUsuario;
             database.VerificarPerfil(tabela.IdLogin,response);

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