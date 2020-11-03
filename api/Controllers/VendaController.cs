using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
namespace api.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class VendaController:ControllerBase
    {
        Utils.Conversor.VendaConversor conversor = new Utils.Conversor.VendaConversor();
        Business.VendaBusiness business = new Business.VendaBusiness();
        [HttpPost("cadastrar")]
        public async Task<ActionResult<Models.Response.VendaResponse>> CadastrarVenda(Models.Request.VendaRequest request)
        {
            try
            {
                Models.TbVenda tabela = conversor.ConversorTabela(request);
                tabela = await business.InserirBusiness(tabela);
                return conversor.ConversorResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
        }

        [HttpPut("alterar/{idvenda}")]
        public async Task<ActionResult<Models.Response.VendaResponse>> AlterarVenda(int idvenda,Models.Request.VendaRequest request)
        {
            try
            {
                Models.TbVenda tabela = conversor.ConversorTabela(request);
                tabela = await business.AlterarBusinesss(idvenda,tabela);
                return conversor.ConversorResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return new NotFoundObjectResult(new Models.Response.ErroResponse(404,ex.Message));
            }
        }
        
    }
}