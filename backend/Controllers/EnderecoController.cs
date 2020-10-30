using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backend.Models.Response;
using backend.Models.Request;
using backend.Models;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers
{
    [ApiController]
    [Route("Controller")]
    public class EnderecoController : ControllerBase
    {
        Utils.Conversor.EnderecoConversor ConversorEndereco = new Utils.Conversor.EnderecoConversor();
        Business.EnderecoBusiness business = new Business.EnderecoBusiness();
        [HttpPost]
        public async Task<ActionResult<EnderecoResponse>> InserirEnderecoController(Models.Request.EnderecoRequest novo)
        {
            try
            {
                TbEndereco endereco = ConversorEndereco.Conversor(novo);
                TbEndereco result = await business.InserirEnderecoDatabase(endereco);
                EnderecoResponse response = ConversorEndereco.Conversor(result);

                return response;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new ErroResponse(400, ex.Message)
                );
            }
        }

        public async Task<ActionResult<EnderecoResponse>> ConsultarEnderecoPorId(int idendereco)
        {
            try
            {
                TbEndereco endereco = await business.ConsultarEnderecoPorId(idendereco);
                return ConversorEndereco.Conversor(endereco);
            }
            catch (System.Exception ex)
            {
                return NotFound(
                    new ErroResponse(400, ex.Message)
                );
            }
        }

        public async Task<List<EnderecoResponse>> ListarEnderecoClienteDatabase(int cliente)
        {
            List<TbEndereco> enderecos = await business.ListarEnderecoClienteDatabase(cliente);
            return enderecos.Select(x => ConversorEndereco.Conversor(x)).ToList();
        }

        public async Task<ActionResult<EnderecoResponse>> AlterarEnderecoController(int idendereco, EnderecoRequest novo)
        {
            try
            {
                TbEndereco endereco = ConversorEndereco.Conversor(novo);
                TbEndereco result = await business.AlterarEndereco(idendereco, endereco);
                EnderecoResponse response = ConversorEndereco.Conversor(result);

                return response;
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new ErroResponse(400, ex.Message)
                );
            }
        }

        public async Task<ActionResult<EnderecoResponse>> RemoverEndereco(int idendereco)
        {
            try
            {
                TbEndereco result = await business.RemoverEnderecoPorId(idendereco);
                EnderecoResponse response = ConversorEndereco.Conversor(result);

                return response;
            }
            catch (System.Exception ex)
            {
                return NotFound(
                    new ErroResponse(400, ex.Message)
                );
            }
        }
    }
}