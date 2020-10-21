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
    public class LoginController:ControllerBase
    {
        Business.LoginBusiness business = new Business.LoginBusiness();
        Utils.LoginConversor conversor = new Utils.LoginConversor();
        Business.GerenciadorFoto gerenciadorFoto = new Business.GerenciadorFoto();
        [HttpPost("cadastrar")]
        public async Task<ActionResult<Models.Response.LoginResponse.ConfirmarLogin>> CadastrarLogin(Models.Request.LoginRequest.CadastrarLogin request)
        {
            try
            {
                Models.TbLogin tabela = conversor.ParaTabelaCadastrarLogin(request);
                tabela = await business.ValidarCadastrarLogin(tabela,request);
                Models.TbCliente cliente = conversor.ParaTabelaClienteCadastroParcial(tabela.IdLogin,request);
                await business.cadastrarCliente(cliente);
                return conversor.ParaResponseCadastrarLogin(tabela);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
        }
        [HttpPost("funcionario")]
        public async Task<ActionResult<Models.Response.LoginResponse.CadastrarLoginFuncionario>> CadastrarFuncionario(Models.Request.LoginRequest.CadastrarLoginFuncionario request)
        {
            try
            {
                Models.TbLogin tabela = conversor.ParaTabelaCadastrarFuncionarioLogin(request);
                tabela = await business.ValidarCadastrarLoginFuncionario(tabela,request);
                return conversor.ParaResponseCadastrarLoginResponse(tabela,request);
            }
           catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
         
        }
        
        [HttpPost]
        public async Task<ActionResult<Models.Response.LoginResponse.ConfirmarLogin>> ConfirmarLogin(Models.Request.LoginRequest.ConfirmarLogin request)
        {
            try
            {
                Models.TbLogin tabela = await business.ValidarConfirmarLogin(request);
                return conversor.ParaResponseConfirmarLogin(tabela);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(400,ex.Message));
            }
        }

        [HttpGet("foto/{nome}")]
        public ActionResult BuscarFoto(string nome)
        {
            try 
            {
                byte[] foto = gerenciadorFoto.LerFoto(nome);
                string contentType = gerenciadorFoto.GerarContentType(nome);
                return File(foto, contentType);
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(404, ex.Message));
            }
        }
    }
}