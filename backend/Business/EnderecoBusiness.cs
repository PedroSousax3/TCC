using System.Collections.Generic;
using System.Threading.Tasks;
using backend.Models;

namespace backend.Business
{
    public class EnderecoBusiness : Business.Validador.ValidadorPadrao
    {
        Database.EnderecoDatabase business = new Database.EnderecoDatabase();
        public async Task<TbEndereco> InserirEnderecoDatabase(TbEndereco endereco)
        {
            ValidarId(endereco.IdCliente);
            ValidarTexto(endereco.DsComplemento, "endereço");
            ValidarTexto(endereco.NmCidade, "cidade");
            ValidarTexto(endereco.NmEstado, "estado");
            ValidarTexto(endereco.NmEndereco, "nome do endereço");
            ValidarTexto(endereco.DsEndereco, "endereço");
            ValidarTexto(endereco.DsCep, "cep");

            return await business.InserirEnderecoDatabase(endereco);
        }

        public async Task<Models.TbEndereco> ConsultarEnderecoPorId(int idendereco)
        {
            ValidarId(idendereco);

            return await business.ConsultarEnderecoPorId(idendereco);
        }

        public async Task<List<Models.TbEndereco>> ListarEnderecoClienteDatabase(int cliente)
        {
            ValidarId(cliente);
            return await business.ListarEnderecoClienteDatabase(cliente);
        }

        public async Task<Models.TbEndereco> AlterarEndereco(int idendereco, Models.TbEndereco novo)
        {
            ValidarId(idendereco);
            ValidarId(novo.IdCliente);
            ValidarTexto(novo.DsComplemento, "endereço");
            ValidarTexto(novo.NmCidade, "cidade");
            ValidarTexto(novo.NmEstado, "estado");
            ValidarTexto(novo.NmEndereco, "nome do endereço");
            ValidarTexto(novo.DsEndereco, "endereço");
            ValidarTexto(novo.DsCep, "cep");
            
            return await business.AlterarEndereco(idendereco, novo);
        }
        
        public async Task<Models.TbEndereco> RemoverEnderecoPorId(int idendereco)
        {
            ValidarId(idendereco);

            return await business.RemoverEnderecoPorId(idendereco);
        }   

    }
}