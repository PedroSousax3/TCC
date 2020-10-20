using System.Linq;
using System;
namespace backend.Business.Validador
{
    public class ValidadorCliente : Business.Validador.ValidadorPadrao
    {
        public void ValidarCliente(int idCliente,Models.TbCliente tabela)
        {
            ValidarTexto(tabela.DsCelular,"Celular");
            ValidarTexto(tabela.DsCpf,"Cpf");
            ValidarTexto(tabela.NmCliente,"Nome");
            ValidarTexto(tabela.TpGenero,"Genero");
            ValidarId(idCliente);
        }
        public void ValidarClienteExiste(int id)
        {
            ValidarId(id);
            Models.db_next_gen_booksContext context = new Models.db_next_gen_booksContext();
            Models.TbCliente tabela = context.TbCliente.FirstOrDefault(x => x.IdCliente == id);
            if(tabela == null)
            throw new ArgumentException("Cliente nao encontrado");
        }
    }
}