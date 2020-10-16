﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_endereco")]
    public partial class TbEndereco
    {
        public TbEndereco()
        {
            TbVenda = new HashSet<TbVenda>();
        }

        [Key]
        [Column("id_endereco", TypeName = "int(11)")]
        public int IdEndereco { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Required]
        [Column("nm_endereco", TypeName = "varchar(50)")]
        public string NmEndereco { get; set; }
        [Required]
        [Column("ds_endereco", TypeName = "varchar(70)")]
        public string DsEndereco { get; set; }
        [Required]
        [Column("ds_cep", TypeName = "varchar(10)")]
        public string DsCep { get; set; }
        [Column("nr_endereco", TypeName = "int(11)")]
        public int NrEndereco { get; set; }
        [Required]
        [Column("ds_complemento", TypeName = "varchar(35)")]
        public string DsComplemento { get; set; }
        [Column("ds_celular", TypeName = "varchar(20)")]
        public string DsCelular { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbEndereco))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [InverseProperty("IdEnderecoNavigation")]
        public virtual ICollection<TbVenda> TbVenda { get; set; }
    }
}