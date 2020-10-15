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
    }
}