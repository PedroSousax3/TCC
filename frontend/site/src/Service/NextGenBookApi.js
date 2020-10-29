import axios from 'axios';
const api = axios.create(
    { baseURL:"http://localhost:5000" }
);

export default class NextGenBookApi{
    async login(req){
        console.log("OL");
        const resp = await api.post('/Acesso', req);
        
        return resp;
    }
    async cadastrarLoginFuncionario(req){
        console.log(req);
        const resp = await api.post('/Login/funcionario', req);
        
        return resp;
    }
    async cadastrarFuncionario(req){
        console.log(req);
        const resp = await api.post('/Funcionario', req);
        
        return resp;
    }

    async cadastrar(req){
        let formData = new FormData();
        
        formData.append('usuario', req.usuario);
        formData.append('email', req.email);
        formData.append('senha', req.senha);
        formData.append('cpf', req.cpf);
        formData.append('nome', req.nome);
        formData.append('celular', req.celular);
        formData.append('foto', req.foto);
        formData.append('genero', req.genero);

        console.log(formData);

        const resp = await api.post('/Cliente' , formData, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        
        return resp;
    }


    
}