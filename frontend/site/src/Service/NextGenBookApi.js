import { Email } from '@material-ui/icons';
import axios from 'axios';
const api = axios.create(
    { baseURL:"http://3.87.226.24:5000" }
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
   async cadastrarEndereco(req){
       console.log(req)
       const resp = await api.post('/Endereco',req);
       console.log(resp.data);
       return resp
   }

    //TELA DE RECUPERAR SENHA
    async enviarEmail(req){
        console.log("oie")
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
    
}