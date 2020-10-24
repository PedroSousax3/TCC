using System;

using System.Linq;
using System.Collections.Generic;

namespace backend.Utils.Conversor
{
    public class CarrinhoConversor
    {
        public Models.TbCarrinho ConversorTabela (Models.Request.CarrinhoRequest request)
        {
            Models.TbCarrinho tabela = new Models.TbCarrinho();
            
            tabela.IdCliente = request.cliente;
            tabela.IdLivro = request.livro;
            tabela.NrLivro = request.qtd;
            tabela.DtAtualizacao = DateTime.Now;

            return tabela;
        }

        public Models.Response.CarrinhoResponse ConversorResponse (Models.TbCarrinho tabela)
        {
            Models.Response.CarrinhoResponse response = new Models.Response.CarrinhoResponse();            

            response.id = tabela.IdCarrinho;
            response.cliente = tabela.IdCliente;
            response.qtd = tabela.NrLivro;
            response.atualizacao = tabela.DtAtualizacao;
            
            LivroConversor LivroConvert = new LivroConversor();
            EstoqueConvert EstoqueConversor = new EstoqueConvert();

            if(tabela.IdLivroNavigation.TbEstoque.FirstOrDefault(x => x.IdLivro == tabela.IdLivro) != null)
                response.estoque = EstoqueConversor.ConversorResponse(tabela.IdLivroNavigation.TbEstoque.FirstOrDefault(x => x.IdLivro == tabela.IdLivro));
            if(tabela.IdLivroNavigation != null)
                response.livro = LivroConvert.Conversor(tabela.IdLivroNavigation);

            return response;
        }
    }
}