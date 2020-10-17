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
    }
}