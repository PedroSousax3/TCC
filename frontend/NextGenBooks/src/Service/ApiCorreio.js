import axios from 'axios';
const api = axios.create(
    { baseURL:"https://viacep.com.br/" }
);


export const buscarEndereco = async (cep) => {
    const resp = await api.get(`ws/${cep}/json`);
    return resp.data;
}


const correio = axios.create(
    { baseURL:"https://apicorreio.herokuapp.com" ,
      validateStatus: function (status) {
      return status < 600; 
      }
    }

);

export const calcularFrete = async (request) => {
    const resp = await correio.post("/frete",request);
    return resp.data;
}

const configAxios = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

export const rastrearPedido = async (request) => {
    console.log(request);
    const resp =  await correio.get("/rastrear",request);
    console.log(resp)
    return resp;
}