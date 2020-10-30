namespace backend.Business.Acesso
{
    public class GerenciadorToken : Utils.Criptografia.AES
    {
        private string GerarKey (Models.TbLogin login) 
        {
            string key = $"{login.IdLogin}|{login.DtUltimoLogin.ToString()}".Replace("/", "").Replace(":", "").Replace("-", "").Replace(" ", "");

            return key.PadRight(24, '#');            
        }

        public string GerarToken (Models.TbLogin login, int idperfil = 0) 
        {
            string key = this.GerarKey(login);
            string valor = $"{idperfil}|{login.NmUsuario}|{login.DtUltimoLogin}";
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