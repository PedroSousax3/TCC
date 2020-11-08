using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using api.Models.Response;
using System.Linq;

namespace api.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class ArquivoController : ControllerBase
    {
        Business.LivroBusiness business = new Business.LivroBusiness();
        Business.GerenciadorFile gerenciadorFile = new Business.GerenciadorFile();

        [HttpGet("listar/postes-livros/{posicao}")]
        public async Task<ActionResult<List<Models.Response.PosterResponse>>> ListarLogoController(int posicao)
        {
            try
            {
                List<Models.Response.PosterResponse> fotos = new List<Models.Response.PosterResponse>();
                List<Models.TbLivro> livros = await business.ListarLivroBusiness(posicao);
                foreach(Models.TbLivro item in livros)
                {
                    fotos.Add(new Models.Response.PosterResponse(item.IdLivro, item.NmLivro, item.DsCapa, item.TbLivroGenero.Select(x => x.IdGeneroNavigation.NmGenero).ToList()));
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

        [HttpGet]
        public ActionResult ConsultarImagem(string nome)
        {
            try
            {

                byte[] arquivo = gerenciadorFile.LerFile(nome);
                string extensao = gerenciadorFile.GerarContentType(nome);

                return File(arquivo, extensao);
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