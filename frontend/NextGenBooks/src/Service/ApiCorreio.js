import axios from 'axios';
const api = axios.create(
    { baseURL:"https://viacep.com.br/" }
);


export const buscarEndereco = async (cep) => {
    const resp = await api.get(`ws/${cep}/json`);
    return resp.data;
}


const correio = axios.create(
    { baseURL:"https://apicorreio.herokuapp.com" }
);

export const calcularFrete = async (request) => {
    const resp = await correio.post("/frete",request);
    return resp.data;
}


export const rastrearPedido = async (request) => {
    const resp = await correio.get("/rastrear",request);
    return resp.data;
}