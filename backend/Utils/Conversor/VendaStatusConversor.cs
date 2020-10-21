using System;
namespace backend.Utils.Conversor
{
    public class VendaStatusConversor
    {
        public Models.TbVendaStatus ConversorTabela(Models.Request.VendaStatusRequest request)
        {
            Models.TbVendaStatus tabela = new Models.TbVendaStatus();
            tabela.DsVendaStatus = request.DsVendaStatus;
            tabela.DtAtualizacao = DateTime.Now;
            tabela.IdVenda = request.venda;
            tabela.NmStatus = request.status;
            return tabela;
        }

        public Models.Response.VendaStatusResponse ConversorResponse(Models.TbVendaStatus tabela)
        {
            Models.Response.VendaStatusResponse response = new Models.Response.VendaStatusResponse();
            response.id = tabela.IdVendaStatus;
            response.DsVendaStatus = tabela.DsVendaStatus;
            response.DtAtualizacao = tabela.DtAtualizacao;
            response.status = tabela.NmStatus;
            response.venda = tabela.IdVenda;
            return response;
        }
    }
}