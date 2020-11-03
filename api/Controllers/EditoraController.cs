using System;
using System.Linq;
using api.Models.Response;
using api.Models.Request;
using System.Threading.Tasks;
using api.Utils.Conversor;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace api.Controllers
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

        [HttpGet]
        public async Task<ActionResult<EditoraResponse>> ConsultarEditoraPorIdController(int ideditora)
        {
            try
            {
                Models.TbEditora editora = await business.ConsultarEditoraPorIdBusiness(ideditora);
                EditoraResponse response = ConvertEditora.Conversor(editora);
                return response;
            }
            catch (System.Exception ex)
            {
                return NotFound(
                    new ErroResponse(404, ex.Message)
                );
            }
        }

        [HttpGet("foto/{nome}")]
        public ActionResult ConsultarArquivoPorNomeController(string nome)
        {
            try
            {
                byte[] arquivo = gerenciadorFoto.LerFoto(nome);
                string extensao = gerenciadorFoto.GerarContentType(nome);
                return File(arquivo, extensao);
            }
            catch (System.Exception ex)
            {
                return NotFound( 
                    new ErroResponse(404, ex.Message)
                );
            }
        }

        [HttpGet("listar-fotos")]
        public async Task<ActionResult<List<ArquivoResponse>>> ListarLogoController()
        {
            try
            {
                List<ArquivoResponse> fotos = new List<ArquivoResponse>();
                List<Models.TbEditora> editoras = await business.ListarEditoras();
                foreach(Models.TbEditora item in editoras)
                {
                    if(string.IsNullOrEmpty(item.DsLogo))
                        continue;
                    else
                    {
                        byte[] arquivo = gerenciadorFoto.LerFoto(item.DsLogo);
                        string extensao = gerenciadorFoto.GerarContentType(item.DsLogo);
                        var foto = File(arquivo, extensao);
                        fotos.Add(new ArquivoResponse(item.DsLogo, foto));
                    }
                }

                return fotos;
            }
            catch (System.Exception ex)
            {
                return NotFound( 
                    new ErroResponse(404, ex.Message)
                );
            }
        }


        [HttpDelete]
        public async Task<ActionResult> RemoverEditoraController(int id)
        {
            try
            {
                Models.TbEditora editora = await business.ConsultarEditoraPorIdBusiness(id);
                await business.RemoverEditoraBusiness(id);
                gerenciadorFoto.RemoverArquivo(editora.DsLogo);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return NotFound(
                    new ErroResponse(404, ex.Message)
                );
            }
        }
    }
}