import axios from 'axios';
const api = axios.create(
    { baseURL:"https://viacep.com.br/" }
);


export const buscarEndereco = async (cep) => {
    console.log(cep);
    const resp = await api.get("ws/" + cep + '/json');
    console.log(resp);
    return resp;
}