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
    public class VendaLivroController:ControllerBase
    {
        Utils.Conversor.VendaLivroConversor conversor = new Utils.Conversor.VendaLivroConversor();
        Business.VendaLivro business = new Business.VendaLivro();

        [HttpPost("cadastrar")]
        public async Task<ActionResult<Models.Response.VendaLivroResponse>> CadastrarVendaLivro(Models.Request.VendaLivroRequest request)
        {
            try
            {
                Models.TbVendaLivro tabela = conversor.ConversorTabela(request);
                tabela = await business.CadastrarBusiness(tabela);
                return conversor.ConversorResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
        }

        [HttpPut("alterar/{idvendalivro}")]
        public async Task<ActionResult<Models.Response.VendaLivroResponse>> AlterarVendaLivro(int idvendalivro,Models.Request.VendaLivroRequest request)
        {
            try
            {
                Models.TbVendaLivro tabela = conversor.ConversorTabela(request);
                tabela = await business.AlterarVendaLivroBusiness(idvendalivro,tabela);
                return conversor.ConversorResponse(tabela);
            }
            catch (System.Exception ex)
            {
                return new NotFoundObjectResult(new Models.Response.ErroResponse(404,ex.Message));
            }
        }
        
    }
}