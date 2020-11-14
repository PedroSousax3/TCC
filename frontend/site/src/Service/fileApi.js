import axios from 'axios'

const api = axios.create(
    { baseURL : 'http://localhost:5000/Arquivo' }
);

export const ListPostFile = async (inicio = 0, fim = 10, nome = "") => {
    const response = await api.get('listar/postes-livros/v2?inicio=' + inicio + "&fim=" + fim + "&nome=" + nome);
    return response;
}

export const BuscarFoto = (nome) => {
    const local = api.defaults.baseURL + ("?nome=" + nome);
    return local;
}