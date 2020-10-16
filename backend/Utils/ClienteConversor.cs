namespace backend.Utils
{
    public class ClienteConversor
    {
        public Models.TbCliente ParaTabelaCadastrarCliente(Models.Request.ClienteRequest.CadastrarCliente request)
        {
            Models.TbCliente tabela = new Models.TbCliente();
            tabela.NmCliente = request.Nome + " " + request.Sobrenome;
            tabela.DsCelular = request.Celular;
            tabela.DsCpf = request.Cpf;
            tabela.TpGenero = request.Genero;
            return tabela;
        }
        public Models.Response.ClienteResponse ParaResponseCadastrarCliente(Models.TbCliente tabela)
        {
            Models.Response.ClienteResponse response = new Models.Response.ClienteResponse();
            response.Nome = tabela.NmCliente;
            response.IdCliente = tabela.IdCliente;
            response.Genero = tabela.TpGenero;
            response.Cpf = tabela.DsCpf;
            response.Celular = tabela.DsCelular;
            return response;
        }
    }
}