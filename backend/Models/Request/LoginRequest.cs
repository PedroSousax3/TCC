namespace backend.Models.Request
{
    public class LoginRequest
    {
        public class CadastrarLogin
        {
            public string Usuario { get; set; }
            public string Senha { get; set; }
            public string ConfirmarSenha { get; set; }
        }
            
    }
}