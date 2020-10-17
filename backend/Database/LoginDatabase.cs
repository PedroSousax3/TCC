using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System;
namespace backend.Database
{
    public class LoginDatabase
    {
        Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();

        public Models.TbLogin CadastrarLogin(Models.TbLogin tabela)
        {
            context.TbLogin.Add(tabela);
            context.SaveChanges();
            return tabela;
        }

        public Models.TbCliente CadastrarClienteParcial(Models.TbCliente tabela)
        {
            context.TbCliente.Add(tabela);
            context.SaveChanges();
            return tabela;
        }

        public bool VerificarSeOUsuarioExiste(string usuario)
        {
            Models.TbLogin tabela = context.TbLogin.FirstOrDefault(x => x.NmUsuario == usuario);
            bool resposta = true;
            if(tabela == null)
                  resposta = false;
               return resposta;
        }
        public bool VerificarSeEmailExiste(string usuario)
        {
            Models.TbCliente tabelaCliente = context.TbCliente.FirstOrDefault(x => x.DsEmail == usuario);
            bool resposta = true;
            if(tabelaCliente  == null)
              resposta = false;
            return resposta;
        }
      public Models.Response.LoginResponse.ConfirmarLogin VerificarPerfil(int idlogin,Models.Response.LoginResponse.ConfirmarLogin response)
        {
            Models.TbCliente cliente = context.TbCliente.FirstOrDefault(x => x.IdLogin == idlogin);
            Models.TbFuncionario funcionario = context.TbFuncionario.FirstOrDefault(x => x.IdLogin == idlogin);
            if(cliente != null)
               {
                   response.DescricaoPerfil = "Cliente";
                   response.Nome = cliente.NmCliente;
                   response.Id = cliente.IdCliente;
                   response.NomeFoto = cliente.DsFoto;
                   response.Email = cliente.DsEmail;
               }
            else if(funcionario != null)
            {
               response.DescricaoPerfil = "Funcionario";
               response.Nome = funcionario.NmFuncionario;
               response.Id = funcionario.IdFuncionario;
               response.NomeFoto = "user.jpg";
               response.Email = funcionario.DsEmail;
            }
            else
            {
                response.DescricaoPerfil = "O cadastro ainda não esta completo";
            }
            return response;
        }

        public Models.TbLogin confirmarLogin(Models.Request.LoginRequest.ConfirmarLogin request)
        {
           Models.TbLogin tabela = context.TbLogin.FirstOrDefault(x => x.NmUsuario == request.Usuario
                                                                  &&   x.DsSenha == request.Senha);
            
            if(tabela == null)
            {
                Models.TbCliente cliente = context.TbCliente.FirstOrDefault(x => x.DsEmail == request.Usuario);
                tabela = context.TbLogin.FirstOrDefault(x =>x.IdLogin == cliente.IdLogin &&
                                                         x.DsSenha == request.Senha);
                if(tabela == null)
                    throw new ArgumentException("Usuario ou senha incorretos");
            }
             
             tabela.DtUltimoLogin = DateTime.Now;
             context.SaveChanges();
            
            return tabela;
        }
        
    }
}