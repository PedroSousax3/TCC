﻿using System;
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
            TbVendaStatus = new HashSet<TbVendaStatus>();
        }

        [Key]
        [Column("id_venda", TypeName = "int(11)")]
        public int IdVenda { get; set; }
        [Column("id_cliente", TypeName = "int(11)")]
        public int IdCliente { get; set; }
        [Column("id_endereco", TypeName = "int(11)")]
        public int IdEndereco { get; set; }
        [Required]
        [Column("ds_nf", TypeName = "varchar(150)")]
        public string DsNf { get; set; }
        [Column("dt_venda", TypeName = "datetime")]
        public DateTime? DtVenda { get; set; }
        [Required]
        [Column("tp_pagamento", TypeName = "varchar(50)")]
        public string TpPagamento { get; set; }
        [Column("nr_parcela", TypeName = "int(11)")]
        public int? NrParcela { get; set; }
        [Required]
        [Column("ds_status", TypeName = "varchar(100)")]
        public string DsStatus { get; set; }
        [Column("ds_codigo_rastreio", TypeName = "varchar(40)")]
        public string DsCodigoRastreio { get; set; }
        [Column("dt_prevista_entrega", TypeName = "datetime")]
        public DateTime? DtPrevistaEntrega { get; set; }
        [Column("bt_confirmacao_entrega", TypeName = "tinyint(4)")]
        public sbyte? BtConfirmacaoEntrega { get; set; }

        [ForeignKey(nameof(IdCliente))]
        [InverseProperty(nameof(TbCliente.TbVenda))]
        public virtual TbCliente IdClienteNavigation { get; set; }
        [ForeignKey(nameof(IdEndereco))]
        [InverseProperty(nameof(TbEndereco.TbVenda))]
        public virtual TbEndereco IdEnderecoNavigation { get; set; }
        [InverseProperty("IdVendaNavigation")]
        public virtual ICollection<TbVendaLivro> TbVendaLivro { get; set; }
        [InverseProperty("IdVendaNavigation")]
        public virtual ICollection<TbVendaStatus> TbVendaStatus { get; set; }
    }
}
