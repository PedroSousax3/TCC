using System.Collections;
using System.Collections.Generic;
using System.Linq;
namespace backend.Business
{
    public class GeneroBusiness
    {
        Database.GeneroDatabase database = new Database.GeneroDatabase();
        public List<Models.TbGenero> ValidarListarGeneros()
        {
           return database.ListarGeneros();
        }
    }
}