using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_carrinho")]
    public partial class TbCarrinho
    {
        [Key]
        [Column("id_carrinho", TypeName = "int(11)")]
        public int IdCarrinho { get; set; }
        [Column("id_livro", TypeName = "int(11)")]
        public int IdLivro { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Column("dt_atualizacao", TypeName = "datetime")]
        public DateTime DtAtualizacao { get; set; }
        [Column("nr_livro", TypeName = "int(11)")]
        public int NrLivro { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbCarrinho))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [ForeignKey(nameof(IdLivro))]
        [InverseProperty(nameof(TbLivro.TbCarrinho))]
        public virtual TbLivro IdLivroNavigation { get; set; }
    }
}
