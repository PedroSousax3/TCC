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

        [HttpPost]
        public async Task<ActionResult<Models.Response.FuncionarioResponse>> InserirController(Models.Request.FuncionarioRequest novo)
        {
            try
            {
                Models.TbFuncionario funcionario = conversor.ConversorFuncionarioTabela(novo);
                Models.TbFuncionario result = await business.CadastrarBusiness(funcionario);
                Models.Response.FuncionarioResponse response = conversor.ConversorFuncionarioResponse(result);
                
                return response;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(400, ex.Message)
                );
            }
        }

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