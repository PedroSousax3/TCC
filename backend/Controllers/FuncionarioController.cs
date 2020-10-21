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
    public class FuncionarioController:ControllerBase
    {
        Utils.Conversor.FuncionarioConversor conversor = new Utils.Conversor.FuncionarioConversor();
        Business.FuncionarioBusiness business = new Business.FuncionarioBusiness();

        [HttpPut("alterar/{idfuncionario}")]
        public async Task<ActionResult<Models.Response.FuncionarioResponse>> AlterarFuncionario(int idfuncionario,Models.Request.FuncionarioRequest request)
        {
            try
            {
                Models.TbFuncionario tabela = conversor.ConversorFuncionarioTabela(request);
                tabela = await business.AlterarBusiness(idfuncionario,tabela);
                return conversor.ConversorFuncionarioResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return new NotFoundObjectResult(new Models.Response.ErroResponse(404,ex.Message));
            }
        }
        
    }
}