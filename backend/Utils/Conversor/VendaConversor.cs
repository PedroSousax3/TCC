namespace backend.Utils.Conversor
{
    public class VendaConversor
    {
        public Models.TbVenda Conversor(Models.Request.VendaRequest request)
        {
            Models.TbVenda tabela = new Models.TbVenda();

            tabela.IdEndereco = request.endereco;
            tabela.IdCliente = request.cliente;
            tabela.NrParcela = request.parcela;
            tabela.TpPagamento = request.metodo_pagamento;
            tabela.VlFrete = request.valor_frete;
            tabela.DsCodigoRastreio = request.codigo_rastreio;
            tabela.DsStatusPagamento = request.status_pagamento;
            tabela.DtPrevistaEntrega = request.previsao_entrega;
            tabela.BtConfirmacaoEntrega = request.comfirmacao_entraga;
            tabela.DsNf = request.nota_fiscal;
            tabela.DtVenda = request.data_venda;

            return tabela;
        }

        public Models.Response.VendaResponse Conversor(Models.TbVenda tabela)
        {
            Models.Response.VendaResponse response = new Models.Response.VendaResponse();

            response.endereco = tabela.IdEndereco;
            response.cliente = tabela.IdCliente;
            response.parcela = tabela.NrParcela;
            response.metodo_pagamento = tabela.TpPagamento;
            response.valor_frete = tabela.VlFrete;
            response.codigo_rastreio = tabela.DsCodigoRastreio;
            response.status_pagamento = tabela.DsStatusPagamento;
            response.previsao_entrega = tabela.DtPrevistaEntrega;
            response.comfirmacao_entraga = tabela.BtConfirmacaoEntrega;
            response.nota_fiscal = tabela.DsNf;
            response.data_venda = tabela.DtVenda;

            return response;
        }
    }
}