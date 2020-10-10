using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_avaliacao_livro")]
    public partial class TbAvaliacaoLivro
    {
        [Column("id_cliente")]
        public int IdCliente { get; set; }
        [Column("id_venda_livro")]
        public int IdVendaLivro { get; set; }
        [Column("vl_avaliacao", TypeName = "decimal(10,0)")]
        public decimal VlAvaliacao { get; set; }
        [Column("ds_comentario", TypeName = "varchar(300)")]
        public string DsComentario { get; set; }
        [Column("dt_comentario", TypeName = "datetime")]
        public DateTime DtComentario { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbAvaliacaoLivro))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [ForeignKey(nameof(IdVendaLivro))]
        [InverseProperty(nameof(TbVendaLivro.TbAvaliacaoLivro))]
        public virtual TbVendaLivro IdVendaLivroNavigation { get; set; }
    }
}
