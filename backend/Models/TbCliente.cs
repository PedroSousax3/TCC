﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_cliente")]
    public partial class TbCliente
    {
        public TbCliente()
        {
            TbAvaliacaoLivro = new HashSet<TbAvaliacaoLivro>();
            TbEndereco = new HashSet<TbEndereco>();
            TbVenda = new HashSet<TbVenda>();
        }

        [Key]
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Column("id_login", TypeName = "int(11)")]
        public int IdLogin { get; set; }
        [Required]
        [Column("nm_cliente", TypeName = "varchar(100)")]
        public string NmCliente { get; set; }
        [Required]
        [Column("ds_cpf", TypeName = "varchar(20)")]
        public string DsCpf { get; set; }
        [Required]
        [Column("ds_email", TypeName = "varchar(100)")]
        public string DsEmail { get; set; }
        [Required]
        [Column("ds_celular", TypeName = "varchar(20)")]
        public string DsCelular { get; set; }

        [ForeignKey(nameof(IdLogin))]
        [InverseProperty(nameof(TbLogin.TbCliente))]
        public virtual TbLogin IdLoginNavigation { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbAvaliacaoLivro> TbAvaliacaoLivro { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbEndereco> TbEndereco { get; set; }
        [InverseProperty("IdClienteNavigation")]
        public virtual ICollection<TbVenda> TbVenda { get; set; }
    }
}
