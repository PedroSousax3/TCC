using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_livro")]
    public partial class TbLivro
    {
        public TbLivro()
        {
            TbEstoque = new HashSet<TbEstoque>();
            TbLivroAutor = new HashSet<TbLivroAutor>();
            TbLivroGenero = new HashSet<TbLivroGenero>();
            TbVendaLivro = new HashSet<TbVendaLivro>();
        }

        [Key]
        [Column("id_livro")]
        public int IdLivro { get; set; }
        [Column("id_editora")]
        public int IdEditora { get; set; }
        [Required]
        [Column("nm_livro", TypeName = "varchar(100)")]
        public string NmLivro { get; set; }
        [Required]
        [Column("ds_livro", TypeName = "varchar(800)")]
        public string DsLivro { get; set; }
        [Column("dt_lancamento", TypeName = "datetime")]
        public DateTime DtLancamento { get; set; }
        [Required]
        [Column("ds_idioma", TypeName = "varchar(50)")]
        public string DsIdioma { get; set; }
        [Required]
        [Column("tp_acabamento", TypeName = "varchar(50)")]
        public string TpAcabamento { get; set; }
        [Required]
        [Column("ds_capa", TypeName = "varchar(150)")]
        public string DsCapa { get; set; }
        [Column("nr_paginas")]
        public int? NrPaginas { get; set; }
        [Required]
        [Column("ds_isbn_10", TypeName = "varchar(20)")]
        public string DsIsbn10 { get; set; }
        [Required]
        [Column("ds_isbn_13", TypeName = "varchar(20)")]
        public string DsIsbn13 { get; set; }
        [Column("nr_edicao")]
        public int NrEdicao { get; set; }
        [Column("vl_preco_compra", TypeName = "decimal(10,5)")]
        public decimal VlPrecoCompra { get; set; }
        [Column("vl_preco_venda", TypeName = "decimal(10,5)")]
        public decimal VlPrecoVenda { get; set; }

        [ForeignKey(nameof(IdEditora))]
        [InverseProperty(nameof(TbEditora.TbLivro))]
        public virtual TbEditora IdEditoraNavigation { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual TbFavoritos TbFavoritos { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual TbMedidas TbMedidas { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual ICollection<TbEstoque> TbEstoque { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual ICollection<TbLivroAutor> TbLivroAutor { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual ICollection<TbLivroGenero> TbLivroGenero { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual ICollection<TbVendaLivro> TbVendaLivro { get; set; }
    }
}
