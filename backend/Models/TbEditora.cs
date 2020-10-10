using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_editora")]
    public partial class TbEditora
    {
        public TbEditora()
        {
            TbLivro = new HashSet<TbLivro>();
        }

        [Key]
        [Column("id_editora", TypeName = "int(11)")]
        public int IdEditora { get; set; }
        [Required]
        [Column("nm_editora", TypeName = "varchar(100)")]
        public string NmEditora { get; set; }
        [Required]
        [Column("dt_fundacao", TypeName = "varchar(45)")]
        public string DtFundacao { get; set; }

        [InverseProperty("IdEditoraNavigation")]
        public virtual ICollection<TbLivro> TbLivro { get; set; }
    }
}
