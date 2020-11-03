import axios from 'axios'

const api = axios.create(

{   baseURL : 'http://localhost:5000/Favoritos/'  }

);

export const listarApi = async (idcliente) => {
    const response = await api.get(('/' + idcliente));
    return response.data;
}

export const inserirFavorito = async (request) => {
    await api.post('/', request);
}