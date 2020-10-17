using System;

namespace backend.Models.Request
{
    public class FuncionarioRequest
    {
        public int login { get; set; }
        public string nome { get; set; }
        public string carteiratrabalho { get; set; }
        public string cpf { get; set; }
        public string email { get; set; }
        public DateTime nascimento { get; set; }
        public DateTime admissao { get; set; }
        public string cargo { get; set; }
        public string endereco { get; set; }
        public string cep { get; set; }
        public int numeroresidencial { get; set; }
        public string complemento { get; set; }
    }
}