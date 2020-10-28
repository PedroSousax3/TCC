using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class EmailController : ControllerBase
    {
        Business.EnviarEmailBusiness gerenciadorEmail = new Business.EnviarEmailBusiness();
        [HttpPost]
        public ActionResult EnviarEmailController(Models.Request.EmailRequest.EnvioEmailRequest request)
        {
            try
            {
                gerenciadorEmail.EnvioEmail(request.destinatario, request.titulo, request.msn);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return NotFound(
                    new Models.Response.ErroResponse(404, ex.Message)
                );
            }
        }

        [HttpPost("resetar")]
        public ActionResult ResetarSenha(Models.Request.EmailRequest.EmailRecuperarSenha request)
        {
            try
            {
                 gerenciadorEmail.EnviarCodigoRecuperarSenha(request);
                 return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
        }

    }
}