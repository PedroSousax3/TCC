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
    public class FavoritosController:ControllerBase
    {
        Utils.Conversor.FavoritoConversor conversor = new Utils.Conversor.FavoritoConversor();
        Business.FavoritosBusiness business = new Business.FavoritosBusiness();
        [HttpPost("cadastrar")]
        public async Task<ActionResult<Models.Response.FavoritoResponse>> CadastrarFavorito(Models.Request.FavoritoRequest request)
        {
            try
            {
                Models.TbFavoritos tabela = conversor.ConversorTabela(request);
                tabela = await business.InserirBusiness(tabela);
                return conversor.ConversorResponse(tabela); 
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
        }

        [HttpPut("alterar/{idfavorito}")]
        public async Task<ActionResult<Models.Response.FavoritoResponse>> AlterarResponse(int idfavorito,Models.Request.FavoritoRequest request)
        {
            try
            {
                Models.TbFavoritos tabela = conversor.ConversorTabela(request);
                tabela = await business.AlterarFavoritosPorId(idfavorito,tabela);
                return conversor.ConversorResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return new NotFoundObjectResult(new Models.Response.ErroResponse(404,ex.Message));
            }
        }
        
    }
}