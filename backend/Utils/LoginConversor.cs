using System;
using System.Linq;
namespace backend.Utils
{
    public class LoginConversor
    {
        Database.LoginDatabase database = new Database.LoginDatabase();
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();
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
        public Models.TbCliente ParaTabelaClienteCadastroParcial(int idLogin,Models.Request.LoginRequest.CadastrarLogin request)
        {
            Models.TbCliente tabela = new Models.TbCliente();
            if(request.Email == request.ConfirmarEmail)
            {
              
                    tabela.DsEmail = request.Email;
                    tabela.IdLogin = idLogin;
                    tabela.NmCliente = "ainda não definido";
                    tabela.DsCpf = "ainda não definido";
            }
            else
              throw new ArgumentException("Confirmação de Email incorreta");
              
              return tabela;
        }
        public Models.Response.LoginResponse.ConfirmarLogin ParaResponseCadastrarLogin(Models.TbLogin tabela)
        {
             Models.Response.LoginResponse.ConfirmarLogin response = new Models.Response.LoginResponse.ConfirmarLogin();
             response.IdLogin = tabela.IdLogin;
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