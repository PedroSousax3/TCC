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
    public class DevolucaoController:ControllerBase
    {
        Utils.Conversor.DevolucaoConversor conversor = new Utils.Conversor.DevolucaoConversor();
        Business.DevolucaoBusiness business = new Business.DevolucaoBusiness();
        
        [HttpPost("cadastrar")]
        public async Task<ActionResult<Models.Response.DevolucaoResponse>> CadastrarDevolucao(Models.Request.DevolucaoRequest request)
        {
            try
            {
                Models.TbDevolucao tabela = conversor.ConversorTabela(request);
                tabela = await business.ValidarCadastrarDevoucao(tabela);
                return conversor.ConversorResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
        }

        [HttpPut("alterar/{iddevolucao}")]
        public async Task<ActionResult<Models.Response.DevolucaoResponse>> AlterarDevolucao(int iddevolucao,Models.Request.DevolucaoRequest request)
        {
            try
            {
                Models.TbDevolucao tabela = conversor.ConversorTabela(request);
                tabela = await business.ValidarAlterarDevolucao(iddevolucao,tabela);
                return conversor.ConversorResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return new NotFoundObjectResult(new Models.Response.ErroResponse(404,ex.Message));
            }
        }
    }
}