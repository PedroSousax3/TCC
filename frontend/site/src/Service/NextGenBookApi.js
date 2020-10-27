import axios from 'axios';
const api = axios.create(
    { baseURL:"http://localhost:5000" }
);

export default class NextGenBookApi{
    async login(req){
        console.log("OL");
        const resp = await api.post('/Login', req);
        
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
        
        formData.append('nome', req.nome);
        formData.append('nascimento', req.nascimento);
        formData.append('genero', req.genero);
        formData.append('usuario', req.usuario);
        formData.append('senha', req.senha);
        formData.append('confirmarsenha', req.confirmarsenha);
        formData.append('cpf', req.cpf);
        formData.append('celular', req.celular);
        formData.append('foto', req.foto);

        console.log(formData);

        const resp = await api.put('Cliente/Cadastro/' + req.idcliente , formData, {
            headers: { 'content-type': 'multipart/form-data' }
        });
        
        return resp;
    }


    
}