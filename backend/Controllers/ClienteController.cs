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
        Business.ClienteBusiness business = new Business.ClienteBusiness();
        Utils.ClienteConversor conversor = new Utils.ClienteConversor(); 
        [HttpPut("cadastrar/{idcliente}")]
        public async Task<ActionResult<Models.Response.ClienteResponse>> CadastrarCliente([FromForm] Models.Request.ClienteRequest.CadastrarCliente request,int idcliente)
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
        }
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