using System;  
using System.Text;  
using System.Security.Cryptography;  

namespace backend.Utils.Criptografia
{
    public class AES
    {
        private RijndaelManaged gerarRijndael() 
        {
            RijndaelManaged rijndael = new RijndaelManaged();
            rijndael.Mode = CipherMode.CBC;
            rijndael.KeySize = 128;

            return rijndael;
        }

        private void ValidarChave(string chave)
        {
            if (
                string.IsNullOrEmpty(chave) && (
                    chave.Length >= 16 && chave.Length <= 32
                )
            )
                throw new ArgumentException("Chave Invalida.");
        }

        private string Criptografar(string chave, string valor)
        {
            ValidarChave(chave);

            RijndaelManaged rijndael = this.gerarRijndael();

            byte[] chaveBytes = Encoding.UTF8.GetBytes(chave);
            byte[] mensagemBytes = Encoding.UTF8.GetBytes(valor);
            byte[] criptografiaBytes;
            string criptografia;

            ICryptoTransform cryptor = rijndael.CreateEncryptor(chaveBytes, chaveBytes);
            criptografiaBytes = cryptor.TransformFinalBlock(mensagemBytes, 0, mensagemBytes.Length);
            cryptor.Dispose();

            criptografia = Convert.ToBase64String(criptografiaBytes);
            return criptografia;
        }
        private string Descriptografar(string chave, string valor)
        {
            ValidarChave(chave);

            RijndaelManaged rijndael = this.gerarRijndael();

            byte[] chaveBytes = Encoding.UTF8.GetBytes(chave);
            byte[] criptografiaBytes;
            byte[] mensagemBytes = Convert.FromBase64String(valor);
            string mensagem;

            ICryptoTransform cryptor = rijndael.CreateDecryptor(chaveBytes, chaveBytes);
            criptografiaBytes = cryptor.TransformFinalBlock(mensagemBytes, 0, mensagemBytes.Length);
            cryptor.Dispose();

            mensagem = Encoding.UTF8.GetString(criptografiaBytes);
            return mensagem;
        }

        public string Encrypt(string chave, string valor)
        {
            try
            {
                return this.Criptografar(chave, valor);
            }
            catch (System.Exception ex) 
            {   
                throw new ArgumentException(ex.Message);
            }
        }

        public string Decrypt(string chave, string valor)
        {
            try 
            {
                return this.Descriptografar(chave, valor);
            }
            catch (System.Exception)
            {
                throw new ArgumentException("Token Invalido.");
            }
        }
    }
}