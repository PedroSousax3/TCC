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
            TbAvaliacaoLivro = new HashSet<TbAvaliacaoLivro>();
            TbLivroAutor = new HashSet<TbLivroAutor>();
            TbLivroGenero = new HashSet<TbLivroGenero>();
            TbVendaLivro = new HashSet<TbVendaLivro>();
        }

        [Key]
        [Column("id_livro", TypeName = "int(11)")]
        public int IdLivro { get; set; }
        [Column("id_editora", TypeName = "int(11)")]
        public int IdEditora { get; set; }
        [Required]
        [Column("nm_livro", TypeName = "varchar(100)")]
        public string NmLivro { get; set; }
        [Column("id_autor", TypeName = "int(11)")]
        public int IdAutor { get; set; }
        [Required]
        [Column("ds_genero", TypeName = "varchar(60)")]
        public string DsGenero { get; set; }
        [Column("dt_lancamento", TypeName = "datetime")]
        public DateTime DtLancamento { get; set; }
        [Required]
        [Column("ds_idioma", TypeName = "varchar(50)")]
        public string DsIdioma { get; set; }
        [Required]
        [Column("tp_acabamento", TypeName = "varchar(50)")]
        public string TpAcabamento { get; set; }
        [Column("vl_preco", TypeName = "decimal(10,0)")]
        public decimal VlPreco { get; set; }
        [Column("nr_paginas", TypeName = "int(11)")]
        public int? NrPaginas { get; set; }
        [Column("ds_isbn_10", TypeName = "varchar(20)")]
        public string DsIsbn10 { get; set; }
        [Column("ds_isbn_13", TypeName = "varchar(20)")]
        public string DsIsbn13 { get; set; }
        [Column("nr_edicao", TypeName = "varchar(45)")]
        public string NrEdicao { get; set; }
        [Column("tb_livrocol", TypeName = "varchar(45)")]
        public string TbLivrocol { get; set; }

        [ForeignKey(nameof(IdEditora))]
        [InverseProperty(nameof(TbEditora.TbLivro))]
        public virtual TbEditora IdEditoraNavigation { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual ICollection<TbAvaliacaoLivro> TbAvaliacaoLivro { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual ICollection<TbLivroAutor> TbLivroAutor { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual ICollection<TbLivroGenero> TbLivroGenero { get; set; }
        [InverseProperty("IdLivroNavigation")]
        public virtual ICollection<TbVendaLivro> TbVendaLivro { get; set; }
    }
}
