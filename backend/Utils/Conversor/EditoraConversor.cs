namespace backend.Utils.Conversor
{
    public class EditoraConversor
    {
        public Models.TbEditora Conversor (Models.Request.EditoraRequest editora)
        {
            Models.TbEditora tabela = new Models.TbEditora();

            tabela.NmEditora = editora.nome;
            tabela.DtFundacao = editora.fundacao;
            tabela.DsSigla = editora.sigla;

            return tabela;
        }

        public Models.Response.EditoraResponse Conversor (Models.TbEditora tabela)
        {
            Models.Response.EditoraResponse editora = new Models.Response.EditoraResponse();

            editora.id = tabela.IdEditora;
            editora.nome = tabela.NmEditora;
            editora.fundacao = tabela.DtFundacao;
            editora.sigla = tabela.DsSigla;
            editora.logo = tabela.DsLogo;

            return editora;
        }
    }
}