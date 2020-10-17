using System;
using System.Linq;
using backend.Models.Response;
using backend.Models.Request;
using System.Threading.Tasks;
using backend.Utils.Conversor;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class EditoraController : ControllerBase
    {
        EditoraConversor ConvertEditora = new EditoraConversor();
        Business.EditoraBusiness business = new Business.EditoraBusiness();
        Business.GerenciadorFoto gerenciadorFoto = new Business.GerenciadorFoto();
        
        [HttpPost]
        public async Task<ActionResult<EditoraResponse>> InserirEditoraController([FromForm] EditoraRequest editora)
        {
            try
            {     
                Models.TbEditora nova = ConvertEditora.Conversor(editora);
                nova.DsLogo = gerenciadorFoto.GerarNovoNome(editora.logo.FileName);
                Models.TbEditora result = await business.InserirEditoraBuseness(nova);
                gerenciadorFoto.SalvarFoto(nova.DsLogo, editora.logo);
                EditoraResponse response = ConvertEditora.Conversor(result);

                return response;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new ErroResponse(400, ex.Message)
                );
            }
        }
        
                
    }
}