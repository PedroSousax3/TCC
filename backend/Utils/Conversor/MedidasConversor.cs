namespace backend.Utils.Conversor
{
    public class MedidasConversor
    {
        public Models.TbMedidas Conversor(Models.Request.MedidaRequest request)
        {
            Models.TbMedidas tabela = new Models.TbMedidas();

            tabela.VlAltura = request.altura;
            tabela.VlLargura = request.largura;
            tabela.VlPeso = request.peso;
            tabela.VlProfundidades = request.profundidade;

            return tabela;
        }

        public Models.Response.MedidaResponse Conversor(Models.TbMedidas tabela)
        {
            Models.Response.MedidaResponse response = new Models.Response.MedidaResponse();

            response.altura = tabela.VlAltura;
            response.largura = tabela.VlLargura;
            response.peso = tabela.VlPeso;
            response.profundidade = tabela.VlProfundidades;

            return response;
        }
    }
}