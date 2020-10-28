using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class EmailController : ControllerBase
    {
        Business.EnviarEmailBusiness gerenciadorEmail = new Business.EnviarEmailBusiness();
        [HttpPost]
        public ActionResult EnviarEmailController(Models.Request.EmailRequest request)
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
    }
}