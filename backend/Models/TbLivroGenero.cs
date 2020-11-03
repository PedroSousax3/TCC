using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_livro_genero")]
    public partial class TbLivroGenero
    {
        [Key]
        [Column("id_livro_genero", TypeName = "int(11)")]
        public int IdLivroGenero { get; set; }
        [Column("id_livro", TypeName = "int(11)")]
        public int IdLivro { get; set; }
        [Column("id_genero", TypeName = "int(11)")]
        public int IdGenero { get; set; }

        [ForeignKey(nameof(IdGenero))]
        [InverseProperty(nameof(TbGenero.TbLivroGenero))]
        public virtual TbGenero IdGeneroNavigation { get; set; }
        [ForeignKey(nameof(IdLivro))]
        [InverseProperty(nameof(TbLivro.TbLivroGenero))]
        public virtual TbLivro IdLivroNavigation { get; set; }
    }
}
