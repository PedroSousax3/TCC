namespace backend.Business
{
    public class ClienteBusiness
    {
          Database.ClienteDatabase database = new Database.ClienteDatabase(); 
        public Models.TbCliente CadastrarCliente(Models.TbCliente tabela,int idcliente,int idlogin)
        {
            return  database.CadastrarCliente(idcliente,idlogin,tabela);
        }
    }
}