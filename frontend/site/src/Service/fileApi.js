import axios from 'axios'

const api = axios.create(
    { baseURL : 'http://3.87.226.24:5000/Arquivo' }
);

export const ListPostFile = async (posicao) => {
    const response = await api.get('listar/postes-livros/' + posicao);
    return response;
}

export const BuscarFoto = (nome) => {
    const local = api.defaults.baseURL + ("?nome=" + nome);
    return local;
}