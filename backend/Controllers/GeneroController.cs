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
    public class GeneroController:ControllerBase
    {
        Business.GeneroBusiness business = new Business.GeneroBusiness();
        Utils.GeneroConversor conversor = new Utils.GeneroConversor(); 
        Business.GerenciadorFoto gerenciador = new Business.GerenciadorFoto();
        
        [HttpPost("cadastrar")]
         public ActionResult<Models.Response.GeneroResponse.ListarGeneros> CadastrarGenero([FromForm] Models.Request.GeneroRequest request)
         {
             try
             {
                 Models.TbGenero tabela = conversor.ParaTabelaGenero(request);
                 tabela.DsFoto = gerenciador.GerarNovoNome(request.Foto.FileName);
                 business.ValidarCadastroGenero(tabela);
                 gerenciador.SalvarFoto(tabela.DsFoto,request.Foto);
                 return conversor.ParaResponseListarGenero(tabela);
             }
             catch (System.Exception ex)
             {
                 return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
             }
         }

         [HttpPut("alterar/{idgenero}")]
         public ActionResult<Models.Response.GeneroResponse.ListarGeneros> AlterarGenero([FromForm] Models.Request.GeneroRequest request,int idgenero)
         {
             try
             {
                 Models.TbGenero tabela = conversor.ParaTabelaGenero(request);
                 tabela.DsFoto = gerenciador.GerarNovoNome(request.Foto.FileName);
                 business.ValidarAlterar(idgenero,tabela);
                 gerenciador.SalvarFoto(tabela.DsFoto,request.Foto);
                 return conversor.ParaResponseListarGenero(tabela);
             }
             catch (System.Exception ex)
             {
                return BadRequest(new Models.Response.ErroResponse( 400,ex.Message));
             }
         }

        [HttpGet("Generos")]
        public ActionResult<List<Models.Response.GeneroResponse.ListarGeneros>> ListarGeneros()
        {
            try
            {
               List<Models.TbGenero> tabela = business.ValidarListarGeneros();
               return conversor.ParaListaResponseListarGenero(tabela); 
            }
            catch (System.Exception ex)
            {
                return new NotFoundObjectResult(new Models.Response.ErroResponse(404,ex.Message));
            }
        }

        [HttpDelete("deletar/{id}")]
        public ActionResult<Models.Response.GeneroResponse.ListarGeneros> DeletarGenero(int id)
        {
            try
            {
                Models.TbGenero tabela = business.DeletarGenero(id);
                return conversor.ParaResponseListarGenero(tabela);
            }
            catch (System.Exception ex)
            {
                return new NotFoundObjectResult(new Models.Response.ErroResponse(404,ex.Message));
            }
        }
    }
}