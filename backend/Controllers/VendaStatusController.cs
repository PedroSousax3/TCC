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
    public class VendaStatusController:ControllerBase
    {
        Utils.Conversor.VendaStatusConversor conversor = new Utils.Conversor.VendaStatusConversor();
        Business.VendaStatusBusiness business = new Business.VendaStatusBusiness();

        [HttpPost("cadastrar")]
        public async Task<ActionResult<Models.Response.VendaStatusResponse>> CadastrarVendaStatus(Models.Request.VendaStatusRequest request)
        {
            try
            {
                Models.TbVendaStatus tabela = conversor.ConversorTabela(request);
                tabela = await business.ValidarCadastrarVendaStatus(tabela);
                return conversor.ConversorResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
        }

        [HttpPut("alterar/{idstatusvenda}")]
        public async Task<ActionResult<Models.Response.VendaStatusResponse>> AlterarStatusVenda(int idstatusvenda,Models.Request.VendaStatusRequest request)
        {
            try
            {
                Models.TbVendaStatus tabela = conversor.ConversorTabela(request);
                tabela = await business.ValidarAlterarVendaStatus(idstatusvenda,tabela);
                return conversor.ConversorResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return new NotFoundObjectResult(new Models.Response.ErroResponse(404,ex.Message));
            }
        }
        
    }
}