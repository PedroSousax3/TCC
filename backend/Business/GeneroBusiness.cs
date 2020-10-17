using System.Collections;
using System.Collections.Generic;
using System.Linq;
namespace backend.Business
{
    public class GeneroBusiness
    {
        Database.GeneroDatabase database = new Database.GeneroDatabase();
        Validador.ValidadorGenero validador = new Validador.ValidadorGenero(); 
        public Models.TbGenero ValidarCadastroGenero(Models.TbGenero tabela)
        {
            bool jaexiste = database.VerificarGeneroJaExiste(tabela.NmGenero);
            validador.ValidaGenero(jaexiste,tabela);
            return database.CadastrarGenero(tabela);
        }
        public Models.TbGenero ValidarAlterar(int id,Models.TbGenero tabela)
        {
            bool jaexiste = database.VerificarGeneroJaExiste(tabela.NmGenero);
            validador.ValidaGenero(jaexiste,tabela);
            return database.AlterarGenero(id,tabela);
        } 
        public List<Models.TbGenero> ValidarListarGeneros()
        {
           return database.ListarGeneros();
        }
        public Models.TbGenero ValidarConsultaPorID(int id)
        {
            validador.ValidarIdGenero(id);
            return database.ConsultarGeneroPorId(id);
        }
        public Models.TbGenero DeletarGenero(int id)
        {
            validador.ValidarIdGenero(id);
            return database.DeletarGenero(id);
        }
    }
}