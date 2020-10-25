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
    public class RealizarVendaController:ControllerBase
    {
        Business.VendaBusiness business = new Business.VendaBusiness();
        Utils.Conversor.RealizarCompraConversor conversor = new Utils.Conversor.RealizarCompraConversor();
        [HttpPost]
        public async Task<ActionResult<Models.Response.RealizarVendaResponse>> RealizarVenda(Models.Request.RealizarVendaRequest.RealizarVendaPersonalizado request)
        {
            try
            {
                Models.TbVenda tabela = conversor.ParaTabelaVenda(request);
                tabela = await business.InserirBusiness(tabela);
                return conversor.ParaResponseRealizarVenda(tabela);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }

        }
        
    }
}