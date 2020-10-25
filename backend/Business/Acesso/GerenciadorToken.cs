namespace backend.Business.Acesso
{
    public class GerenciadorToken : Utils.Criptografia.AES
    {
        private string GerarKey (Models.TbLogin login) 
        {
            string key = $"{login.IdLogin}|{login.DtUltimoLogin}".Replace("/", "").Replace(":", "").Replace(" ", "");

            return key;            
        }

        public string GerarToken (Models.TbLogin login) 
        {
            string key = this.GerarKey(login);
            string valor = $"{login.IdLogin}|{login.DsSenha}|{login.NmUsuario}|{login.DtUltimoLogin}";
            string token = Encrypt(key, valor);

            return token;
        }

        public string LerToken (Models.TbLogin login, string token)
        {
            string key = this.GerarKey(login);
            string msn = Decrypt(key, token);

            return msn;
        }
    }
}