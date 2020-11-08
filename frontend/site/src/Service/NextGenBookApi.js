import { Email } from '@material-ui/icons';
import axios from 'axios';
const api = axios.create(

   //{ baseURL:"http://3.87.226.24:5000" }

    { baseURL:"http://localhost:5000" }
);

export default class NextGenBookApi{
    async login(req){
        console.log("OL");
        const resp = await api.post('/Acesso', req);
        
        return resp;
    }

    async cadastrarFuncionario(req){
        console.log(req);
        const resp = await api.post('/Funcionario', req);
        
        return resp;
    }

    async cadastrar(req){
        let formData = 
            new FormData();
        
        formData.append('usuario', req.usuario);
        formData.append('email', req.email);
        formData.append('senha', req.senha);
        formData.append('cpf', req.cpf);
        formData.append('nome', req.nome);
        formData.append('celular', req.celular);
        formData.append('foto', req.foto);
        formData.append('genero', req.genero);

        const resp = await api.post('/Cliente' , formData, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        
        return resp;
    }

    async alterar(req){
        let formData = 
            new FormData();
        
        formData.append('email', req.email);
        formData.append('nome', req.nome);
        formData.append('celular', req.celular);
        formData.append('foto', req.foto);
        formData.append('genero', req.genero);

        const resp = await api.put('/Cliente' , formData, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        
        return resp;
    }

    
    //TELA DE RECUPERAR SENHA
    async enviarEmail(req){
        const resp = await api.post('/Email/resetar', req);
        
        return resp;
    }
    
    async confirmarCodigo(req,idLogin){
        console.log("hi")
        const resp = await api.post('/Login/codigo/'+ idLogin, req);
        console.log(resp.data)
        return resp;
    }
    
    async trocarSenha(req,idLogin){
        const resp = await api.put('/Login/novaSenha/'+ idLogin, req)
    }

    async cadastrarEndereco(req){
        const resp = await api.post('/Endereco', req);
        console.log(resp);
        return resp;
    }
    
    async realizarVenda(req){
        console.log("hi")
        const resp = await api.post('/RealizarVenda',req);
        console.log(resp.data)
        return resp;
    }
    async listarEndereco(cliente)
    {
        const resp = await api.get('/Endereco/'+cliente);
        return resp.data;
    }

    ///
    async listarComprasPendentes(cliente)
    {
        const resp = await api.get('/VendaStatus/pendentes/'+cliente)
        ;
        return resp.data;
    }

    async listarComprasfinalizadas(cliente)
    {
        const resp = await api.get('/VendaStatus/finalizadas/'+cliente);
        return resp.data;
    }
    async listarComprasndamento(cliente)
    {
        const resp = await api.get('/VendaStatus/andamento/'+cliente);
        console.log(resp.data)
        return resp.data;
    }
    ///


    
    async Devolver(req){
        let formData = new FormData();
        
        formData.append('vendalivro', req.vendalivro);
        formData.append('motivo', req.motivo);
        formData.append('valor', req.valor);
        formData.append('codigo_rastreio', req.codigo_rastreio);
        formData.append('comprovante', req.comprovante);
        formData.append('previsao_entrega', req.previsao_entrega);
        

        const resp = await api.post('/Devolucao/cadastrar' , formData, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        
        return resp.data;
    }

    async CancelarCompra(idvendastatus)
    {
        const resp = await api.put('/VendaStatus/cancelar/'+idvendastatus);
        return resp.data;
    }

    buscarImagem(foto) {
        const urlFoto = api.defaults.baseURL + '/Login/foto/' + foto;
        console.log(urlFoto);

        return urlFoto;
    }

    async mostrarPerfil(idLogin){
        console.log(idLogin)
        const resp = await api.get(`/Perfil/${idLogin}`);
        console.log(resp.data);
        return resp.data;
    }

    
}