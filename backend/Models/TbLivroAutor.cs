using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_livro_autor")]
    public partial class TbLivroAutor
    {
        [Key]
        [Column("id_livro_autor", TypeName = "int(11)")]
        public int IdLivroAutor { get; set; }
        [Column("id_livro", TypeName = "int(11)")]
        public int IdLivro { get; set; }
        [Column("id_autor", TypeName = "int(11)")]
        public int IdAutor { get; set; }

        [ForeignKey(nameof(IdAutor))]
        [InverseProperty(nameof(TbAutor.TbLivroAutor))]
        public virtual TbAutor IdAutorNavigation { get; set; }
        [ForeignKey(nameof(IdLivro))]
        [InverseProperty(nameof(TbLivro.TbLivroAutor))]
        public virtual TbLivro IdLivroNavigation { get; set; }
    }
}
