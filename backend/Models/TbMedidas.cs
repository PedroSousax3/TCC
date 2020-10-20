using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_medidas")]
    public partial class TbMedidas
    {
        public TbMedidas()
        {
            TbLivro = new HashSet<TbLivro>();
        }

        [Key]
        [Column("id_medidas")]
        public int IdMedidas { get; set; }
        [Column("vl_altura", TypeName = "decimal(10,5)")]
        public decimal VlAltura { get; set; }
        [Column("vl_largura", TypeName = "decimal(10,5)")]
        public decimal VlLargura { get; set; }
        [Column("vl_profundidades", TypeName = "decimal(10,5)")]
        public decimal VlProfundidades { get; set; }
        [Column("vl_peso", TypeName = "decimal(10,5)")]
        public decimal VlPeso { get; set; }

        [InverseProperty("IdMedidasNavigation")]
        public virtual ICollection<TbLivro> TbLivro { get; set; }
    }
}
