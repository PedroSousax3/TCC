using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_funcionario")]
    public partial class TbFuncionario
    {
        [Key]
        [Column("id_funcionario", TypeName = "int(11)")]
        public int IdFuncionario { get; set; }
        [Column("id_login", TypeName = "int(11)")]
        public int IdLogin { get; set; }
        [Column("id_endereco", TypeName = "int(11)")]
        public int IdEndereco { get; set; }
        [Required]
        [Column("nm_funcionario", TypeName = "varchar(100)")]
        public string NmFuncionario { get; set; }
        [Required]
        [Column("ds_carteira_trabalho", TypeName = "varchar(20)")]
        public string DsCarteiraTrabalho { get; set; }
        [Required]
        [Column("ds_cpf", TypeName = "varchar(20)")]
        public string DsCpf { get; set; }
        [Required]
        [Column("ds_email", TypeName = "varchar(100)")]
        public string DsEmail { get; set; }
        [Column("dt_nascimento", TypeName = "date")]
        public DateTime DtNascimento { get; set; }
        [Column("dt_admissao", TypeName = "datetime")]
        public DateTime DtAdmissao { get; set; }
        [Required]
        [Column("ds_cargo", TypeName = "varchar(50)")]
        public string DsCargo { get; set; }

        [ForeignKey(nameof(IdEndereco))]
        [InverseProperty(nameof(TbEndereco.TbFuncionario))]
        public virtual TbEndereco IdEnderecoNavigation { get; set; }
        [ForeignKey(nameof(IdLogin))]
        [InverseProperty(nameof(TbLogin.TbFuncionario))]
        public virtual TbLogin IdLoginNavigation { get; set; }
    }
}
