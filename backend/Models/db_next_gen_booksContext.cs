using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace backend.Models
{
    public partial class db_next_gen_booksContext : DbContext
    {
        public db_next_gen_booksContext()
        {
        }

        public db_next_gen_booksContext(DbContextOptions<db_next_gen_booksContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TbAutor> TbAutor { get; set; }
        public virtual DbSet<TbAvaliacaoLivro> TbAvaliacaoLivro { get; set; }
        public virtual DbSet<TbCliente> TbCliente { get; set; }
        public virtual DbSet<TbDevolucao> TbDevolucao { get; set; }
        public virtual DbSet<TbEditora> TbEditora { get; set; }
        public virtual DbSet<TbEndereco> TbEndereco { get; set; }
        public virtual DbSet<TbEstoque> TbEstoque { get; set; }
        public virtual DbSet<TbFavoritos> TbFavoritos { get; set; }
        public virtual DbSet<TbFuncionario> TbFuncionario { get; set; }
        public virtual DbSet<TbGenero> TbGenero { get; set; }
        public virtual DbSet<TbLivro> TbLivro { get; set; }
        public virtual DbSet<TbLivroAutor> TbLivroAutor { get; set; }
        public virtual DbSet<TbLivroGenero> TbLivroGenero { get; set; }
        public virtual DbSet<TbLogin> TbLogin { get; set; }
        public virtual DbSet<TbMedidas> TbMedidas { get; set; }
        public virtual DbSet<TbRecebimentoDevolucao> TbRecebimentoDevolucao { get; set; }
        public virtual DbSet<TbVenda> TbVenda { get; set; }
        public virtual DbSet<TbVendaLivro> TbVendaLivro { get; set; }
        public virtual DbSet<TbVendaStatus> TbVendaStatus { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseMySql("server=localhost;user id=root;password=1234;database=db_next_gen_books", x => x.ServerVersion("5.7.31-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TbAutor>(entity =>
            {
                entity.HasKey(e => e.IdAutor)
                    .HasName("PRIMARY");

                entity.Property(e => e.DsAutor)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsFoto)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.NmAutor)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");
            });

            modelBuilder.Entity<TbAvaliacaoLivro>(entity =>
            {
                entity.HasKey(e => e.IdAvaliacaoLivro)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCliente)
                    .HasName("id_cliente_idx");

                entity.HasIndex(e => e.IdVendaLivro)
                    .HasName("id_venda_livro_idx");

                entity.Property(e => e.DsComentario)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TbAvaliacaoLivro)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_avaliacao_livro_ibfk_1");

                entity.HasOne(d => d.IdVendaLivroNavigation)
                    .WithMany(p => p.TbAvaliacaoLivro)
                    .HasForeignKey(d => d.IdVendaLivro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_avaliacao_livro_ibfk_2");
            });

            modelBuilder.Entity<TbCliente>(entity =>
            {
                entity.HasKey(e => e.IdCliente)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.DsFoto)
                    .HasName("ds_foto_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.IdLogin)
                    .HasName("id_login_idx");

                entity.Property(e => e.DsCelular)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsCpf)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsEmail)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsFoto)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.NmCliente)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.TpGenero)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.HasOne(d => d.IdLoginNavigation)
                    .WithMany(p => p.TbCliente)
                    .HasForeignKey(d => d.IdLogin)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_cliente_ibfk_1");
            });

            modelBuilder.Entity<TbDevolucao>(entity =>
            {
                entity.HasKey(e => e.IdDevolucao)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdVendaLivro)
                    .HasName("id_venda_livro");

                entity.Property(e => e.DsCodigoRastreio)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsComprovante)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsMotivo)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.HasOne(d => d.IdVendaLivroNavigation)
                    .WithMany(p => p.TbDevolucao)
                    .HasForeignKey(d => d.IdVendaLivro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("id_venda_livro");
            });

            modelBuilder.Entity<TbEditora>(entity =>
            {
                entity.HasKey(e => e.IdEditora)
                    .HasName("PRIMARY");

                entity.Property(e => e.DsLogo)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsSigla)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DtFundacao)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.NmEditora)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");
            });

            modelBuilder.Entity<TbEndereco>(entity =>
            {
                entity.HasKey(e => e.IdEndereco)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCliente)
                    .HasName("id_cliente_idx");

                entity.Property(e => e.DsCelular)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsCep)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsComplemento)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsEndereco)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.NmEndereco)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TbEndereco)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_endereco_ibfk_1");
            });

            modelBuilder.Entity<TbEstoque>(entity =>
            {
                entity.HasKey(e => e.IdEstoque)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdLivro)
                    .HasName("id_livro_idx");

                entity.HasOne(d => d.IdLivroNavigation)
                    .WithMany(p => p.TbEstoque)
                    .HasForeignKey(d => d.IdLivro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_estoque_ibfk_1");
            });

            modelBuilder.Entity<TbFavoritos>(entity =>
            {
                entity.HasKey(e => e.IdFavoritos)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCliente)
                    .HasName("id_cliente_idx");

                entity.HasIndex(e => e.IdLivro)
                    .HasName("id_livro_UNIQUE")
                    .IsUnique();

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TbFavoritos)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_favoritos_ibfk_1");

                entity.HasOne(d => d.IdLivroNavigation)
                    .WithOne(p => p.TbFavoritos)
                    .HasForeignKey<TbFavoritos>(d => d.IdLivro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_favoritos_ibfk_2");
            });

            modelBuilder.Entity<TbFuncionario>(entity =>
            {
                entity.HasKey(e => e.IdFuncionario)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdLogin)
                    .HasName("fk_tb_funcionario_tb_login1_idx");

                entity.Property(e => e.DsCargo)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsCarteiraTrabalho)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsCep)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsComplemento)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsCpf)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsEmail)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsEndereco)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.NmFuncionario)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.HasOne(d => d.IdLoginNavigation)
                    .WithMany(p => p.TbFuncionario)
                    .HasForeignKey(d => d.IdLogin)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_funcionario_ibfk_1");
            });

            modelBuilder.Entity<TbGenero>(entity =>
            {
                entity.HasKey(e => e.IdGenero)
                    .HasName("PRIMARY");

                entity.Property(e => e.DsFoto)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsGenero)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.NmGenero)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");
            });

            modelBuilder.Entity<TbLivro>(entity =>
            {
                entity.HasKey(e => e.IdLivro)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.DsCapa)
                    .HasName("ds_capa_UNIQUE")
                    .IsUnique();

                entity.HasIndex(e => e.IdEditora)
                    .HasName("id_editora_idx");

                entity.Property(e => e.DsCapa)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsIdioma)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsIsbn10)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsIsbn13)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsLivro)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.NmLivro)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.TpAcabamento)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.HasOne(d => d.IdEditoraNavigation)
                    .WithMany(p => p.TbLivro)
                    .HasForeignKey(d => d.IdEditora)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_livro_ibfk_1");
            });

            modelBuilder.Entity<TbLivroAutor>(entity =>
            {
                entity.HasKey(e => e.IdLivroAutor)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdAutor)
                    .HasName("id_autor_idx");

                entity.HasIndex(e => e.IdLivro)
                    .HasName("id_livro_idx");

                entity.HasOne(d => d.IdAutorNavigation)
                    .WithMany(p => p.TbLivroAutor)
                    .HasForeignKey(d => d.IdAutor)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_livro_autor_ibfk_2");

                entity.HasOne(d => d.IdLivroNavigation)
                    .WithMany(p => p.TbLivroAutor)
                    .HasForeignKey(d => d.IdLivro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_livro_autor_ibfk_1");
            });

            modelBuilder.Entity<TbLivroGenero>(entity =>
            {
                entity.HasKey(e => e.IdLivroGenero)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdGenero)
                    .HasName("id_genero_idx");

                entity.HasIndex(e => e.IdLivro)
                    .HasName("id_livro_idx");

                entity.HasOne(d => d.IdGeneroNavigation)
                    .WithMany(p => p.TbLivroGenero)
                    .HasForeignKey(d => d.IdGenero)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_livro_genero_ibfk_2");

                entity.HasOne(d => d.IdLivroNavigation)
                    .WithMany(p => p.TbLivroGenero)
                    .HasForeignKey(d => d.IdLivro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_livro_genero_ibfk_1");
            });

            modelBuilder.Entity<TbLogin>(entity =>
            {
                entity.HasKey(e => e.IdLogin)
                    .HasName("PRIMARY");

                entity.Property(e => e.DsCodigoVerificacao)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsSenha)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.NmUsuario)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");
            });

            modelBuilder.Entity<TbMedidas>(entity =>
            {
                entity.HasKey(e => e.IdMedidas)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdLivro)
                    .HasName("id_livro_UNIQUE")
                    .IsUnique();

                entity.HasOne(d => d.IdLivroNavigation)
                    .WithOne(p => p.TbMedidas)
                    .HasForeignKey<TbMedidas>(d => d.IdLivro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_medidas_ibfk_1");
            });

            modelBuilder.Entity<TbRecebimentoDevolucao>(entity =>
            {
                entity.HasKey(e => e.IdLivroDevolvido)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdDevolucao)
                    .HasName("id_devolucao_idx");

                entity.Property(e => e.DsStatusLivro)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.HasOne(d => d.IdDevolucaoNavigation)
                    .WithMany(p => p.TbRecebimentoDevolucao)
                    .HasForeignKey(d => d.IdDevolucao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_recebimento_devolucao_ibfk_1");
            });

            modelBuilder.Entity<TbVenda>(entity =>
            {
                entity.HasKey(e => e.IdVenda)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdCliente)
                    .HasName("id_cliente_idx");

                entity.HasIndex(e => e.IdEndereco)
                    .HasName("id_endereco_idx");

                entity.Property(e => e.DsCodigoRastreio)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsNf)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.DsStatusPagamento)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.TpPagamento)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.HasOne(d => d.IdClienteNavigation)
                    .WithMany(p => p.TbVenda)
                    .HasForeignKey(d => d.IdCliente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_venda_ibfk_1");

                entity.HasOne(d => d.IdEnderecoNavigation)
                    .WithMany(p => p.TbVenda)
                    .HasForeignKey(d => d.IdEndereco)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_venda_ibfk_2");
            });

            modelBuilder.Entity<TbVendaLivro>(entity =>
            {
                entity.HasKey(e => e.IdVendaLivro)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdLivro)
                    .HasName("id_livro_idx");

                entity.HasIndex(e => e.IdVenda)
                    .HasName("id_venda_idx");

                entity.HasOne(d => d.IdLivroNavigation)
                    .WithMany(p => p.TbVendaLivro)
                    .HasForeignKey(d => d.IdLivro)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_venda_livro_ibfk_2");

                entity.HasOne(d => d.IdVendaNavigation)
                    .WithMany(p => p.TbVendaLivro)
                    .HasForeignKey(d => d.IdVenda)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_venda_livro_ibfk_1");
            });

            modelBuilder.Entity<TbVendaStatus>(entity =>
            {
                entity.HasKey(e => e.IdVendaStatus)
                    .HasName("PRIMARY");

                entity.HasIndex(e => e.IdVenda)
                    .HasName("id_venda_idx");

                entity.Property(e => e.DsVendaStatuscol)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.Property(e => e.NmStatus)
                    .HasCharSet("latin1")
                    .HasCollation("latin1_swedish_ci");

                entity.HasOne(d => d.IdVendaNavigation)
                    .WithMany(p => p.TbVendaStatus)
                    .HasForeignKey(d => d.IdVenda)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("tb_venda_status_ibfk_1");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
