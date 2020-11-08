import axios from 'axios'

const api = axios.create(
    { baseURL : 'http://localhost:5000/Arquivo' }
);

export const ListPostFile = async (posicao) => {
    const response = await api.get('listar/postes-livros/' + posicao);
    return response;
}

export const BuscarFoto = (nome) => {
    const local = api.defaults.baseURL + ("?nome=" + nome);
    return local;
}