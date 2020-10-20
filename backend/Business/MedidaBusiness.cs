using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace backend.Business
{
    public class MedidaBusiness : Business.Validador.ValidadorPadrao
    {
        Database.MedidasDatabase database = new Database.MedidasDatabase();
        public async System.Threading.Tasks.Task<Models.TbMedidas> CadastrarBusiness(Models.TbMedidas novo)
        {
            if(novo.VlAltura <= 0)
                throw new ArgumentException("Medida da altura do livro não pode ser menor que 0.");
            if(novo.VlLargura <= 0)
                throw new ArgumentException("Medida da largura do livro não pode ser menor que 0.");
            if(novo.VlPeso <= 0)
                throw new ArgumentException("Medida do peso do livro não pode ser menor que 0.");
            if(novo.VlProfundidades <= 0)
                throw new ArgumentException("Medida da profundidade do livro não pode ser menor que 0.");
            

            Models.TbMedidas medidas = await database.CadastrarMedidas(novo);
            if(medidas.IdMedidas <= 1)
                throw new ArgumentException("Não foi possivel cadastrar essa medida.");
            return medidas;
        }

        public async Task<List<Models.TbMedidas>> ListarMedidas()
        {
            List<Models.TbMedidas> medidas = await database.ListarMedidas();

            if(medidas == null)
                throw new ArgumentException("Não foi possivel cadastrar essa medida.");
            return medidas;
        }

        public async Task<Models.TbMedidas> ConsultarPorIdMedidasBusiness(int id)
        {
            ValidarId(id);
            Models.TbMedidas medidas = await database.ConsultarPorIdMedidas(id);
            if(medidas.IdMedidas <= 1)
                throw new ArgumentException("Não foi possivel alterar essa medida.");
            return medidas;
        }

        public async Task<Models.TbMedidas> AlterarMedidasBusiness(int id,Models.TbMedidas novo)
        {
            ValidarId(id);
            if(novo.VlAltura <= 0)
                throw new ArgumentException("Meida da altura do livro não pode ser menor que 0.");
            if(novo.VlLargura <= 0)
                throw new ArgumentException("Meida da largura do livro não pode ser menor que 0.");
            if(novo.VlPeso <= 0)
                throw new ArgumentException("Meida do peso do livro não pode ser menor que 0.");
            if(novo.VlProfundidades <= 0)
                throw new ArgumentException("Meida da profundidade do livro não pode ser menor que 0.");
            

            Models.TbMedidas medidas = await database.AlterarMedidas(id, novo);
            if(medidas.IdMedidas <= 1)
                throw new ArgumentException("Não foi possivel alterar essa medida.");
            return medidas;
        }
        
        public async Task<Models.TbMedidas> DeletarMedidasBusiness(int id)
        {
            ValidarId(id);
            Models.TbMedidas medidas = await database.DeletarMedidas(id);
            if(medidas.IdMedidas <= 1)
                throw new ArgumentException("Não foi possivel alterar essa medida.");
            return medidas;
        }
    }
}