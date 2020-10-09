CREATE TABLE IF NOT EXISTS `mydb`.`tb_funcionario` (
  `id_funcionario` INT NOT NULL AUTO_INCREMENT,
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
  `id_login` INT NOT NULL,
  PRIMARY KEY (`id_funcionario`),
  UNIQUE INDEX `ds_carteira_trabalho_UNIQUE` (`ds_carteira_trabalho` ASC) VISIBLE,
  UNIQUE INDEX `ds_cpf_UNIQUE` (`ds_cpf` ASC) VISIBLE,
  UNIQUE INDEX `ds_email_UNIQUE` (`ds_email` ASC) VISIBLE,
  INDEX `fk_tb_funcionario_tb_login1_idx` (`id_login` ASC) VISIBLE,
  CONSTRAINT `id_login`
    FOREIGN KEY (`id_login`)
    REFERENCES `mydb`.`tb_login` (`id_login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `id_login` INT NOT NULL,
  `nm_cliente` VARCHAR(100) NOT NULL,
  `ds_cpf` VARCHAR(20) NOT NULL,
  `ds_email` VARCHAR(100) NOT NULL,
  `ds_celular` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE INDEX `ds_cpf_UNIQUE` (`ds_cpf` ASC) VISIBLE,
  UNIQUE INDEX `ds_email_UNIQUE` (`ds_email` ASC) VISIBLE,
  UNIQUE INDEX `ds_celular_UNIQUE` (`ds_celular` ASC) VISIBLE,
  INDEX `fk_tb_cliente_tb_login1_idx` (`id_login` ASC) VISIBLE,
  CONSTRAINT `id_login`
    FOREIGN KEY (`id_login`)
    REFERENCES `mydb`.`tb_login` (`id_login`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_login` (
  `id_login` INT NOT NULL AUTO_INCREMENT,
  `nm_usuario` VARCHAR(50) NOT NULL,
  `ds_senha` VARCHAR(64) NOT NULL,
  `dt_ultimo_login` DATETIME NOT NULL,
  PRIMARY KEY (`id_login`),
  UNIQUE INDEX `nm_usuario_UNIQUE` (`nm_usuario` ASC) VISIBLE)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_endereco` (
  `id_endereco` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `ds_endereco` VARCHAR(70) NOT NULL,
  `ds_cep` VARCHAR(10) NOT NULL,
  `nr_endereco` INT NOT NULL,
  `ds_complemento` VARCHAR(35) NOT NULL,
  PRIMARY KEY (`id_endereco`),
  INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `mydb`.`tb_cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_venda` (
  `id_venda` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `ds_nf` VARCHAR(150) NOT NULL,
  `dt_venda` DATETIME NULL,
  PRIMARY KEY (`id_venda`),
  INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `mydb`.`tb_cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_venda` (
  `id_venda` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `ds_nf` VARCHAR(150) NOT NULL,
  `dt_venda` DATETIME NULL,
  PRIMARY KEY (`id_venda`),
  INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `mydb`.`tb_cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_editora` (
  `id_editora` INT NOT NULL AUTO_INCREMENT,
  `nm_editora` VARCHAR(100) NOT NULL,
  `dt_fundacao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_editora`),
  UNIQUE INDEX `dt_fundacao_UNIQUE` (`dt_fundacao` ASC) VISIBLE)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_livro` (
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
  CONSTRAINT `id_editora`
    FOREIGN KEY (`id_editora`)
    REFERENCES `mydb`.`tb_editora` (`id_editora`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_autor` (
  `id_autor` INT NOT NULL AUTO_INCREMENT,
  `nm_autor` VARCHAR(100) NOT NULL,
  `dt_nascimento` DATE NOT NULL,
  `ds_autor` VARCHAR(500) NULL,
  PRIMARY KEY (`id_autor`))
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_livro_autor` (
  `id_livro_autor` INT NOT NULL AUTO_INCREMENT,
  `id_livro` INT NOT NULL,
  `id_autor` INT NOT NULL,
  PRIMARY KEY (`id_livro_autor`),
  INDEX `id_livro_idx` (`id_livro` ASC) VISIBLE,
  INDEX `id_autor_idx` (`id_autor` ASC) VISIBLE,
  CONSTRAINT `id_livro`
    FOREIGN KEY (`id_livro`)
    REFERENCES `mydb`.`tb_livro` (`id_livro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_autor`
    FOREIGN KEY (`id_autor`)
    REFERENCES `mydb`.`tb_autor` (`id_autor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_genero` (
  `id_genero` INT NOT NULL AUTO_INCREMENT,
  `nm_genero` VARCHAR(70) NOT NULL,
  `ds_genero` VARCHAR(200) NULL,
  PRIMARY KEY (`id_genero`))
ENGINE = InnoDB


CREATE TABLE IF NOT EXISTS `mydb`.`tb_livro_genero` (
  `id_livro_genero` INT NOT NULL AUTO_INCREMENT,
  `id_livro` INT NOT NULL,
  `id_genero` INT NOT NULL,
  PRIMARY KEY (`id_livro_genero`),
  INDEX `id_livro_idx` (`id_livro` ASC) VISIBLE,
  INDEX `id_genero_idx` (`id_genero` ASC) VISIBLE,
  CONSTRAINT `id_livro`
    FOREIGN KEY (`id_livro`)
    REFERENCES `mydb`.`tb_livro` (`id_livro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_genero`
    FOREIGN KEY (`id_genero`)
    REFERENCES `mydb`.`tb_genero` (`id_genero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_venda_livro` (
  `id_venda_livro` INT NOT NULL AUTO_INCREMENT,
  `id_venda` INT NOT NULL,
  `id_livro` INT NOT NULL,
  `vl_venda_livro` DECIMAL NOT NULL,
  PRIMARY KEY (`id_venda_livro`),
  INDEX `id_venda_idx` (`id_venda` ASC) VISIBLE,
  INDEX `id_livro_idx` (`id_livro` ASC) VISIBLE,
  CONSTRAINT `id_venda`
    FOREIGN KEY (`id_venda`)
    REFERENCES `mydb`.`tb_venda` (`id_venda`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_livro`
    FOREIGN KEY (`id_livro`)
    REFERENCES `mydb`.`tb_livro` (`id_livro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_avaliacao_livro` (
  `id_avaliacao_livro` INT NOT NULL AUTO_INCREMENT,
  `id_livro` INT NOT NULL,
  `id_cliente` INT NOT NULL,
  `vl_avaliacao` DECIMAL NOT NULL,
  `ds_comentario` VARCHAR(300) NULL,
  PRIMARY KEY (`id_avaliacao_livro`),
  INDEX `id_livro_idx` (`id_livro` ASC) VISIBLE,
  INDEX `id_cliente_idx` (`id_cliente` ASC) VISIBLE,
  CONSTRAINT `id_livro`
    FOREIGN KEY (`id_livro`)
    REFERENCES `mydb`.`tb_livro` (`id_livro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `mydb`.`tb_cliente` (`id_cliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `mydb`.`tb_livro_genero` (
  `id_livro_genero` INT NOT NULL AUTO_INCREMENT,
  `id_livro` INT NOT NULL,
  `id_genero` INT NOT NULL,
  PRIMARY KEY (`id_livro_genero`),
  INDEX `id_livro_idx` (`id_livro` ASC) VISIBLE,
  INDEX `id_genero_idx` (`id_genero` ASC) VISIBLE,
  CONSTRAINT `id_livro`
    FOREIGN KEY (`id_livro`)
    REFERENCES `mydb`.`tb_livro` (`id_livro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_genero`
    FOREIGN KEY (`id_genero`)
    REFERENCES `mydb`.`tb_genero` (`id_genero`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB