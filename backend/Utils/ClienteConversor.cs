using System;

namespace backend.Utils
{
    public class ClienteConversor
    {
        public Models.TbCliente Conversor (Models.Request.ClienteRequest.CadastroCliente request)
        {
            Models.TbCliente tabela = new Models.TbCliente();
            //Cliente
            tabela.DsCpf = request.cpf;
            tabela.DsEmail = request.email;
            tabela.NmCliente = request.nome;
            tabela.DsCelular =  request.celular;
            tabela.TpGenero = request.genero;

            //Login
            Models.TbLogin login = new Models.TbLogin();
            login.NmUsuario = request.usuario;
            login.DsSenha = request.senha;
            login.DtUltimoLogin = DateTime.Now;

            tabela.IdLoginNavigation = login;

            return tabela;
        }
        public Models.TbCliente ParaTabelaCadastrarCliente(Models.Request.ClienteRequest.Cliente request)
        {
            Models.TbCliente tabela = new Models.TbCliente();
            tabela.NmCliente = request.Nome + " " + request.Sobrenome;
            tabela.DsCelular = request.Celular;
            tabela.DsCpf = request.Cpf;
            tabela.TpGenero = request.Genero;
            return tabela;
        }
        public Models.Response.ClienteResponse ParaResponseCadastrarCliente(Models.TbCliente tabela)
        {
            Models.Response.ClienteResponse response = new Models.Response.ClienteResponse();
            response.IdCliente = tabela.IdCliente;
            response.IdLogin = tabela.IdLogin;
            response.Nome = tabela.NmCliente;
            response.IdCliente = tabela.IdCliente;
            response.Genero = tabela.TpGenero;
            response.Cpf = tabela.DsCpf;
            response.Email = tabela.DsEmail;
            response.Celular = tabela.DsCelular;
            response.Foto = tabela.DsFoto;
            return response;
        }
    }
}