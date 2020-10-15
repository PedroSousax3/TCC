using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_venda_status")]
    public partial class TbVendaStatus
    {
        [Key]
        [Column("id_venda_status", TypeName = "int(11)")]
        public int IdVendaStatus { get; set; }
        [Column("id_venda", TypeName = "int(11)")]
        public int IdVenda { get; set; }
        [Required]
        [Column("nm_status", TypeName = "varchar(70)")]
        public string NmStatus { get; set; }
        [Column("ds_venda_statuscol", TypeName = "varchar(45)")]
        public string DsVendaStatuscol { get; set; }
        [Column("dt_atualizacao", TypeName = "datetime")]
        public DateTime DtAtualizacao { get; set; }

        [ForeignKey(nameof(IdVenda))]
        [InverseProperty(nameof(TbVenda.TbVendaStatus))]
        public virtual TbVenda IdVendaNavigation { get; set; }
    }
}
