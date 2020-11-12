import axios from 'axios'

const api = axios.create(
    {   baseURL : 'http://localh:5000/Favoritos'  }
);

export const listarApi = async (idcliente) => {
    const response = await api.get('/' + idcliente);
    return response.data;
}

export const inserirFavoritoApi = async (request) => {
    return await api.post('', request);
}

export const removerFav  = async (id) => {
    return await api.delete('idfavorito?=' + id);
}