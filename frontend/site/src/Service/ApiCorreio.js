import axios from 'axios';
const api = axios.create(
    { baseURL:"https://viacep.com.br/ws/" }
);


export const buscarEndereco = async (req) => {
    console.log("OL");
    const resp = await api.get(req.cep + '/json/');
    console.log(resp.data);
    return resp;
}