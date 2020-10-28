namespace backend.Models.Request
{
    public class EmailRequest
    {
        public string destinatario { get; set; }
        public string titulo { get; set; }
        public string msn { get; set; }
    }
}