using System;
namespace backend.Business.Validador
{
    public class ValidadorGenero
    {
        Business.Validador.ValidadorPadrao validador = new Business.Validador.ValidadorPadrao();
        public void ValidaGenero(bool jaexiste,Models.TbGenero tabela)
        {
             validador.ValidarTexto(tabela.NmGenero,"De Nome do Genero");
             validador.ValidarTexto(tabela.DsGenero, "De Descrição do genero");
             VerificarSeGeneroExiste(jaexiste);
        }
        public void ValidarIdGenero(int id)
        {
            validador.ValidarId(id);
        }
        private void VerificarSeGeneroExiste(bool jaexiste)
        {
            if(jaexiste == true)
               throw new ArgumentException("Esse genero ja foi cadastrado");
        }

    }
}