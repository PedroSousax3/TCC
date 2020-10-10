using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_avaliacao_livro")]
    public partial class TbAvaliacaoLivro
    {
        [Key]
        [Column("id_avaliacao_livro", TypeName = "int(11)")]
        public int IdAvaliacaoLivro { get; set; }
        [Column("id_livro", TypeName = "int(11)")]
        public int IdLivro { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Column("vl_avaliacao", TypeName = "decimal(10,0)")]
        public decimal VlAvaliacao { get; set; }
        [Column("ds_comentario", TypeName = "varchar(300)")]
        public string DsComentario { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbAvaliacaoLivro))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [ForeignKey(nameof(IdLivro))]
        [InverseProperty(nameof(TbLivro.TbAvaliacaoLivro))]
        public virtual TbLivro IdLivroNavigation { get; set; }
    }
}
