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
    public class LoginController:ControllerBase
    {
        Business.LoginBusiness business = new Business.LoginBusiness();
        Utils.LoginConversor conversor = new Utils.LoginConversor();
        [HttpPost("cadastrar")]
        public ActionResult<Models.Response.LoginResponse.CadastrarLogin> CadastrarLogin(Models.Request.LoginRequest.CadastrarLogin request)
        {
            try
            {
                Models.TbLogin tabela = conversor.ParaTabela(request);
                business.ValidarCadastrarLogin(tabela);
                return conversor.ParaResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
        }
    }
}