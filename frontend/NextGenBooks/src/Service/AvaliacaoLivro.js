import axios from 'axios'

const api = axios.create(
 { baseURL : "http://151.106.109.133:5000/AvaliacaoLivro"}

);

export const listarAvaliacaoLivroApi = async (idlivro) => {
    const response = await api.get('/' + idlivro);
    return response;
}