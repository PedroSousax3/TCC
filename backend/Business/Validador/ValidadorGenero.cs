using System;

namespace backend.Business.Validador
{
    public class ValidadorGenero : Business.Validador.ValidadorPadrao
    {
        public void ValidaGenero(bool jaexiste,Models.TbGenero tabela)
        {
            ValidarTexto(tabela.NmGenero,"De Nome do Genero");
            ValidarTexto(tabela.DsGenero, "De Descrição do genero");
            VerificarSeGeneroExiste(jaexiste);
        }
        public void ValidarIdGenero(int id)
        {
            ValidarId(id);
        }
        private void VerificarSeGeneroExiste(bool jaexiste)
        {
            if(jaexiste == true)
               throw new ArgumentException("Esse genero ja foi cadastrado");
        }

    }
}