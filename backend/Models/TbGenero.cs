using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_genero")]
    public partial class TbGenero
    {
        public TbGenero()
        {
            TbLivroGenero = new HashSet<TbLivroGenero>();
        }

        [Key]
        [Column("id_genero")]
        public int IdGenero { get; set; }
        [Required]
        [Column("nm_genero", TypeName = "varchar(70)")]
        public string NmGenero { get; set; }
        [Column("ds_genero", TypeName = "varchar(200)")]
        public string DsGenero { get; set; }

        [InverseProperty("IdGeneroNavigation")]
        public virtual ICollection<TbLivroGenero> TbLivroGenero { get; set; }
    }
}
