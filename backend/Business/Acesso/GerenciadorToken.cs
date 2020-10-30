using System;

namespace backend.Business.Acesso
{
    public class GerenciadorToken : Utils.Criptografia.AES
    {
        private string GerarKey (Models.TbLogin login) 
        {
            string cod = "47W%A3%9";
            string key = $"{cod}|{login.DtUltimoLogin.ToString("dd/MM/yyyy HH:mm:ss")}".Replace("/", "")
                                                                                        .Replace(":", "")
                                                                                        .Replace("-", "")
                                                                                        .Replace(" ", "");
            
            return key.PadRight(24, '#');            
        }

        public string GerarToken (Models.TbLogin login, int idperfil = 0) 
        {
            string key = this.GerarKey(login);
            string valor = $"{idperfil}#$|#${login.NmUsuario}#$|#${login.DtCodigoVerificacao.ToString()}#$|#$Next-Gen-Books";
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