using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_estoque")]
    public partial class TbEstoque
    {
        [Key]
        [Column("id_estoque", TypeName = "int(11)")]
        public int IdEstoque { get; set; }
        [Column("id_livro", TypeName = "int(11)")]
        public int IdLivro { get; set; }
        [Column("nr_quantidade", TypeName = "int(11)")]
        public int NrQuantidade { get; set; }
        [Column("dt_atualizacao", TypeName = "datetime")]
        public DateTime DtAtualizacao { get; set; }

        [ForeignKey(nameof(IdLivro))]
        [InverseProperty(nameof(TbLivro.TbEstoque))]
        public virtual TbLivro IdLivroNavigation { get; set; }
    }
}
