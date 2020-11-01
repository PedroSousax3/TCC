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
            AutorConversor AutorConvert = new AutorConversor();
            EstoqueConvert EstoqueConvert = new EstoqueConvert();
            EditoraConversor EditoraConvert = new EditoraConversor();
            
            response.informacoes = LivroConvert.Conversor(tabela.IdLivroNavigation);
            response.autores = tabela.IdLivroNavigation.TbLivroAutor.Select(x => AutorConvert.ConversorResponse(x.IdAutorNavigation)).ToList();
            response.estoque = EstoqueConvert.ConversorResponse(tabela.IdLivroNavigation.TbEstoque.FirstOrDefault(x => x.IdLivro == response.informacoes.id));
            response.informacoes.editora = EditoraConvert.Conversor(tabela.IdLivroNavigation.IdEditoraNavigation);
            
            return response;
        }
    }
}