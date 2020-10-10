-- -----------------------------------------------------
-- Mapear banco de dados:
-- dotnet ef dbcontext scaffold "server=localhost;user id=root;password=45923617xx;database=db_next_gen_books" Pomelo.EntityFrameworkCore.MySql -o Models --data-annotations --force
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_next_gen_books
-- -----------------------------------------------------

DROP DATABASE IF EXISTS `db_next_gen_books`;
CREATE DATABASE IF NOT EXISTS `db_next_gen_books`;
USE `db_next_gen_books`;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_login`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_login` (
  `id_login` INT NOT NULL AUTO_INCREMENT,
  `nm_usuario` VARCHAR(50) NOT NULL,
  `ds_senha` VARCHAR(64) NOT NULL,
  `dt_ultimo_login` DATETIME NOT NULL,
  `ds_codigo_verificacao` VARCHAR(15) NULL,
  `dt_codigo_verificacao` DATETIME NULL,
  PRIMARY KEY (`id_login`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_funcionario`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_funcionario` (
	`id_funcionario` INT NOT NULL AUTO_INCREMENT,
	`id_login` INT NOT NULL,
	`nm_funcionario` VARCHAR(100) NOT NULL,
	`ds_carteira_trabalho` VARCHAR(20) NOT NULL,
	`ds_cpf` VARCHAR(20) NOT NULL,
	`ds_email` VARCHAR(100) NOT NULL,
	`dt_nascimento` DATE NOT NULL,
	`dt_admissao` DATETIME NOT NULL,
	`ds_cargo` VARCHAR(50) NOT NULL,
	`ds_endereco` VARCHAR(70) NOT NULL,
	`nr_residencia` INT NOT NULL,
	`ds_cep` VARCHAR(10) NOT NULL,
	`ds_complemento` VARCHAR(50) NULL,
	PRIMARY KEY (`id_funcionario`),
	INDEX `fk_tb_funcionario_tb_login1_idx` (`id_login` ASC) VISIBLE,
	FOREIGN KEY (`id_login`)REFERENCES `db_next_gen_books`.`tb_login` (`id_login`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_cliente` (
	`id_cliente` INT NOT NULL AUTO_INCREMENT,
	`id_login` INT NOT NULL,
	`nm_cliente` VARCHAR(100) NOT NULL,
	`ds_cpf` VARCHAR(20) NOT NULL,
	`ds_email` VARCHAR(45) NOT NULL,
	`ds_celular` VARCHAR(20) NULL,
	PRIMARY KEY (`id_cliente`),
	INDEX `id_login_idx` (`id_login` ASC) VISIBLE,
	FOREIGN KEY (`id_login`) REFERENCES `db_next_gen_books`.`tb_login` (`id_login`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_endereco`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_endereco` (
	`id_endereco` INT NOT NULL AUTO_INCREMENT,
	`id_cliente` INT NOT NULL,
	`nm_endereco` VARCHAR(50) NOT NULL,
	`ds_endereco` VARCHAR(70) NOT NULL,
	`ds_cep` VARCHAR(10) NOT NULL,
	`nr_endereco` INT NOT NULL,
	`ds_complemento` VARCHAR(35) NOT NULL,
	`ds_celular` VARCHAR(20) NULL,
	PRIMARY KEY (`id_endereco`),
	INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
	FOREIGN KEY (`id_cliente`)
	REFERENCES `db_next_gen_books`.`tb_cliente` (`id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_editora`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_editora` (
  `id_editora` INT NOT NULL AUTO_INCREMENT,
  `nm_editora` VARCHAR(100) NOT NULL,
  `dt_fundacao` VARCHAR(45) NOT NULL,
  `ds_logo` VARCHAR(150) NULL,
  `ds_sigla` VARCHAR(10) NULL,
  PRIMARY KEY (`id_editora`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_livro`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_livro` (
	`id_livro` INT NOT NULL AUTO_INCREMENT,
	`id_editora` INT NOT NULL,
	`nm_livro` VARCHAR(100) NOT NULL,
	`id_autor` INT NOT NULL,
	`ds_genero` VARCHAR(60) NOT NULL,
	`dt_lancamento` DATETIME NOT NULL,
	`ds_idioma` VARCHAR(50) NOT NULL,
	`tp_acabamento` VARCHAR(50) NOT NULL,
	`vl_preco` DECIMAL NOT NULL,
	`nr_paginas` INT NULL,
	`ds_isbn_10` VARCHAR(20) NULL,
	`ds_isbn_13` VARCHAR(20) NULL,
	`nr_edicao` VARCHAR(45) NULL,
	`tb_livrocol` VARCHAR(45) NULL,
	PRIMARY KEY (`id_livro`),
	INDEX `id_editora_idx` (`id_editora` ASC) VISIBLE,
	FOREIGN KEY (`id_editora`) REFERENCES `db_next_gen_books`.`tb_editora` (`id_editora`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_autor`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_autor` (
	`id_autor` INT NOT NULL AUTO_INCREMENT,
	`nm_autor` VARCHAR(100) NOT NULL,
	`dt_nascimento` DATE NOT NULL,
	`ds_autor` VARCHAR(500) NULL,
	`ds_foto` VARCHAR(150) NULL,
	PRIMARY KEY (`id_autor`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_livro_autor`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_livro_autor` (
	`id_livro_autor` INT NOT NULL AUTO_INCREMENT,
	`id_livro` INT NOT NULL,
	`id_autor` INT NOT NULL,
	PRIMARY KEY (`id_livro_autor`),
	INDEX `id_livro_idx` (`id_livro` ASC) VISIBLE,
	INDEX `id_autor_idx` (`id_autor` ASC) VISIBLE,
	FOREIGN KEY (`id_livro`) REFERENCES `db_next_gen_books`.`tb_livro` (`id_livro`) ON DELETE NO ACTION ON UPDATE NO ACTION,
	FOREIGN KEY (`id_autor`) REFERENCES `db_next_gen_books`.`tb_autor` (`id_autor`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_genero`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_genero` (
  `id_genero` INT NOT NULL AUTO_INCREMENT,
  `nm_genero` VARCHAR(70) NOT NULL,
  `ds_genero` VARCHAR(200) NULL,
  PRIMARY KEY (`id_genero`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_livro_genero`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_livro_genero` (
	`id_livro_genero` INT NOT NULL AUTO_INCREMENT,
	`id_livro` INT NOT NULL,
	`id_genero` INT NOT NULL,
	PRIMARY KEY (`id_livro_genero`),
	INDEX `id_livro_idx` (`id_livro` ASC) VISIBLE,
	INDEX `id_genero_idx` (`id_genero` ASC) VISIBLE,
	FOREIGN KEY (`id_livro`) REFERENCES `db_next_gen_books`.`tb_livro` (`id_livro`) ON DELETE NO ACTION ON UPDATE NO ACTION,
	FOREIGN KEY (`id_genero`) REFERENCES `db_next_gen_books`.`tb_genero` (`id_genero`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_venda`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_venda` (
	`id_venda` INT NOT NULL AUTO_INCREMENT,
	`id_cliente` INT NOT NULL,
	`ds_nf` VARCHAR(150) NOT NULL,
	`dt_venda` DATETIME NULL,
	PRIMARY KEY (`id_venda`),
	INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
	FOREIGN KEY (`id_cliente`) REFERENCES `db_next_gen_books`.`tb_cliente` (`id_cliente`) ON DELETE NO ACTION	ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_venda_livro`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_venda_livro` (
	`id_venda_livro` INT NOT NULL AUTO_INCREMENT,
	`id_venda` INT NOT NULL,
	`id_livro` INT NOT NULL,
	`vl_venda_livro` DECIMAL NOT NULL,
	PRIMARY KEY (`id_venda_livro`),
	INDEX `id_venda_idx` (`id_venda` ASC) VISIBLE,
	INDEX `id_livro_idx` (`id_livro` ASC) VISIBLE,
	FOREIGN KEY (`id_venda`) REFERENCES `db_next_gen_books`.`tb_venda` (`id_venda`) ON DELETE NO ACTION ON UPDATE NO ACTION,
	FOREIGN KEY (`id_livro`) REFERENCES `db_next_gen_books`.`tb_livro` (`id_livro`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_avaliacao_livro`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_avaliacao_livro` (
	`id_cliente` INT NOT NULL,
	`id_venda_livro` INT NOT NULL,
	`vl_avaliacao` DECIMAL NOT NULL,
	`ds_comentario` VARCHAR(300) NULL,
	`dt_comentario` DATETIME NOT NULL,
	INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
	INDEX `id_venda_livro_idx` (`id_venda_livro` ASC) VISIBLE,
	FOREIGN KEY (`id_cliente`) REFERENCES `db_next_gen_books`.`tb_cliente` (`id_cliente`) ON DELETE NO ACTION ON UPDATE NO ACTION,
	FOREIGN KEY (`id_venda_livro`) REFERENCES `db_next_gen_books`.`tb_venda_livro` (`id_venda_livro`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `db_next_gen_books`.`tb_estoque`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `db_next_gen_books`.`tb_estoque` (
	`id_estoque` INT NOT NULL AUTO_INCREMENT,
	`id_livro` INT NOT NULL,
	`nr_quantidade` INT NOT NULL,
	`dt_atualizacao` INT NOT NULL,
	PRIMARY KEY (`id_estoque`),
	INDEX `id_livro_idx` (`id_livro` ASC) VISIBLE,
	FOREIGN KEY (`id_livro`) REFERENCES `db_next_gen_books`.`tb_livro` (`id_livro`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;