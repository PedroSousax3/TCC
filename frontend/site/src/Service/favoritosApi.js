import axios from 'axios'

const api = axios.create(
    {   baseURL : 'http://3.87.226.24:5000/Favoritos'  }
);

export const listarApi = async (idcliente) => {
    const response = await api.get(('/' + idcliente));
    return response.data;
}

export const inserirFavorito = async (request) => {
    await api.post('/', request);
}