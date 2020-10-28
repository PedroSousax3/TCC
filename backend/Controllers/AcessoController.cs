using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class AcessoController : ControllerBase
    {
        Business.Acesso.AcessoBusiness business = new Business.Acesso.AcessoBusiness();
        Utils.Conversor.AcessoConversor acessoConversor = new Utils.Conversor.AcessoConversor();
        [HttpPost]
        public async Task<ActionResult<Models.Response.AcessoResponse>> Acessar(Models.Request.AcessoRequest request)
        {
            try
            {
                Models.TbLogin login = await business.ConsultarLoginBusiness(request.user, request.senha);
                string token = business.GerarToken(login, login.TbCliente.FirstOrDefault(x => x.IdLogin == login.IdLogin) != null ? 
                                                                                                                                    login.TbCliente.FirstOrDefault(x => x.IdLogin == login.IdLogin).IdCliente 
                                                                                                                                  : 
                                                                                                                                    login.TbFuncionario.FirstOrDefault(x => x.IdLogin == login.IdLogin).IdFuncionario);
                
                Models.Response.AcessoResponse response = acessoConversor.Conversor(login, token);

                return response;
            }
            catch (System.Exception ex)
            {
                return NotFound(
                    new Models.Response.ErroResponse(404, ex.Message)
                );
            }
        }
    }
}