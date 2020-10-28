using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClienteController:ControllerBase
    {
        Business.GerenciadorFoto gerenciadorFoto = new Business.GerenciadorFoto();
        Business.EnviarEmailBusiness gerenciadorEmail = new Business.EnviarEmailBusiness();
        Business.ClienteBusiness business = new Business.ClienteBusiness();
        Utils.ClienteConversor conversor = new Utils.ClienteConversor(); 

        [HttpPost]
        public async Task<ActionResult<Models.Response.AcessoResponse>> CadastrarCliente(Models.Request.ClienteRequest.CadastroCliente request)
        {
            try
            {
                Models.TbCliente tabela = conversor.Conversor(request);
                
                Models.TbCliente cliente = await business.CadastrarCliente(tabela);

                string corpo = $"Bem vindo {cliente.NmCliente} a Next Gen Books! Aqui você poderá encontrar a maior variedade de livros para que já viu, para todos os tipos de leitores";
                gerenciadorEmail.EnvioEmail(cliente.DsEmail, "Bem Vindo " +  cliente.NmCliente + " a Next Gen Books!!!", corpo);

                Business.Acesso.AcessoBusiness gerartoken = new Business.Acesso.AcessoBusiness();
                Utils.Conversor.AcessoConversor acessoConversor = new Utils.Conversor.AcessoConversor();

                string token = gerartoken.GerarToken(cliente.IdLoginNavigation);
                return acessoConversor.Conversor(cliente.IdLoginNavigation, token);
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(400, ex.Message)
                );
            }
        }
        
        /*[HttpPut("cadastrar/{idcliente}")]
        public async Task<ActionResult<Models.Response.ClienteResponse>> CadastrarCliente([FromForm] Models.Request.ClienteRequest.Cliente request, int idcliente)
        {
          try
          {
            
                Models.TbCliente tabela = conversor.ParaTabelaCadastrarCliente(request);
                tabela.DsFoto = gerenciadorFoto.GerarNovoNome(request.Foto.FileName);
                tabela = await business.CadastrarCliente(tabela,idcliente);
                gerenciadorFoto.SalvarFoto(tabela.DsFoto,request.Foto);
                return conversor.ParaResponseCadastrarCliente(tabela);
          }
          catch (System.Exception ex)
          {
              
              return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
          }   
        }*/

        [HttpGet("foto/{nome}")]
        public ActionResult ConsultarArquivoPorNomeController(string nome)
        {
            try
            {
                byte[] arquivo = gerenciadorFoto.LerFoto(nome);
                string extensao = gerenciadorFoto.GerarContentType(nome);
                return File(arquivo, extensao);
            }
            catch (System.Exception ex)
            {
                return NotFound( 
                    new Models.Response.ErroResponse(404, ex.Message)
                );
            }
        }
               
    }
}