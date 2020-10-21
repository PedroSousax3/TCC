using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class LivroController : ControllerBase
    {
        Utils.Conversor.LivroConversor ConversorLivro = new Utils.Conversor.LivroConversor();
        Business.LivroBusiness business = new Business.LivroBusiness();
        Business.GerenciadorFoto gerenciadorFoto = new Business.GerenciadorFoto();
        
        [HttpPost]
        public async Task<ActionResult<Models.Response.LivroResponse>> Inserir([FromForm] Models.Request.LivroRequest request)
        {
            try
            {
                Models.TbLivro livro = ConversorLivro.Conversor(request);
                livro.DsCapa = gerenciadorFoto.GerarNovoNome(request.foto.FileName);
                Models.TbLivro result = await business.InserirBusinesa(livro);
                gerenciadorFoto.SalvarFoto(livro.DsCapa, request.foto);
                Models.Response.LivroResponse response = ConversorLivro.Conversor(result);

                return response;
            }
            catch(System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(400, ex.Message)
                );
            }
        }
    }
}