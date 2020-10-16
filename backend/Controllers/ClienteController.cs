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
        [HttpPut("cadastrar/{idcliente}/{idlogin}")]
        public ActionResult<Models.Response.ClienteResponse> CadastrarCliente([FromForm] Models.Request.ClienteRequest.CadastrarCliente request,int idcliente,int idlogin)
        {
          try
          {
            
                Models.TbCliente tabela = conversor.ParaTabelaCadastrarCliente(request);
                tabela.DsFoto = gerenciadorFoto.GerarNovoNome(request.Foto.FileName);
                business.CadastrarCliente(tabela,idcliente,idlogin);
                gerenciadorFoto.SalvarFoto(tabela.DsFoto,request.Foto);
                return conversor.ParaResponseCadastrarCliente(tabela);
          }
          catch (System.Exception ex)
          {
              
              return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
          }   

               
        }
    }
}