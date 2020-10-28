using System;
using System.Collections;
using System.Net.Mail;
using System.Net.Mime;
using System.Net;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
namespace backend.Business
{
    public class EnviarEmailBusiness
    {
        public void EnvioEmail(string destinatario, string titulo, string corpo)
        {

            MailMessage mensagem = new MailMessage("nextgenbooks3@gmail.com", destinatario, titulo, corpo);
            mensagem.IsBodyHtml = true;
            using (var smtpClient = new SmtpClient())
            {
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new System.Net.NetworkCredential("nextgenbooks3@gmail.com", "nextgenbooks1234!");
                smtpClient.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtpClient.Host = "smtp.gmail.com";
                smtpClient.Port = 587;
                smtpClient.EnableSsl = true;
                smtpClient.Timeout = 20_000;
                smtpClient.Send(mensagem);
            }
        }

        public void EnviarEmailBoasVindas(Models.Response.ClienteResponse response)
        {
            string titulo = "Bem Vindo " + response.Nome;
            string corpo ="Estamos muito animados com o seu cadastro e agradecemos pela sua preferência. " + 
            "Estabelecemos a empresa NextGenBooks com a missão de disponibilizar aprendizado " + 
            "e cultura por um preço que cabe no seu bolso.";
            
             this.EnvioEmail(response.Email,titulo,corpo);
        }

        public void EnviarCodigoRecuperarSenha(Models.Request.EmailRequest.EmailRecuperarSenha request)
        {
            Database.LoginDatabase database = new Database.LoginDatabase();

            int Tamanho = 10;
            string codigoFinal = string.Empty;
            for (int i = 0; i < Tamanho; i++)
            {
                Random random = new Random();
                int codigo = Convert.ToInt32(random.Next(48, 122).ToString());

                if ((codigo >= 48 && codigo <= 57) || (codigo >= 97 && codigo <= 122))
                {
                    string _char = ((char)codigo).ToString();
                    if (!codigoFinal.Contains(_char))
                    {
                        codigoFinal += _char;
                    }
                    else
                    {
                        i--;
                    }
                }
                else
                {
                    i--;
                }
            }
           database.VerificarEmailRecuperarSenha(request,codigoFinal);
           string titulo = "Resetar Senha";
           string corpo = "Dígite esse código " + codigoFinal + " para recuperar sua senha";
            this.EnvioEmail(request.Email,titulo,corpo);
        }
    }
}