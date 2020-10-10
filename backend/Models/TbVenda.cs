using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_venda")]
    public partial class TbVenda
    {
        public TbVenda()
        {
            TbVendaLivro = new HashSet<TbVendaLivro>();
        }

        [Key]
        [Column("id_venda")]
        public int IdVenda { get; set; }
        [Column("id_cliente")]
        public int IdCliente { get; set; }
        [Required]
        [Column("ds_nf", TypeName = "varchar(150)")]
        public string DsNf { get; set; }
        [Column("dt_venda", TypeName = "datetime")]
        public DateTime? DtVenda { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbVenda))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [InverseProperty("IdVendaNavigation")]
        public virtual ICollection<TbVendaLivro> TbVendaLivro { get; set; }
    }
}
