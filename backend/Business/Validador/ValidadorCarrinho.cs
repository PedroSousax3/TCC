namespace backend.Business.Validador
{
    public class ValidadorCarrinho : ValidadorPadrao
    {
        public void ValidarCarrinho(Models.TbCarrinho tabela)
        {
           ValidarId(tabela.IdCliente);
           ValidarId(tabela.IdLivro);
           ValidarData(tabela.DtAtualizacao,"Data de Atualização");
        }

    }
}