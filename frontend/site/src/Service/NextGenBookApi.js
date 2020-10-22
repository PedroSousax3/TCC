import axios from 'axios';
const api = axios.create({
    baseURL:"http://localhost:5000"
})

export default class NextGenBookApi{
    async login(req){
        console.log(req);
        const resp = await api.post('/Login', req);
        
        return resp;
    }
    async cadastrarLoginFuncionario(req){
        console.log(req);
        const resp = await api.post('/Login/funcionario', req);
        
        return resp;
    }

    async cadastrar(req){
        const resp = await api.post('/Cadastrar', req);
        return resp.data;
    }
}