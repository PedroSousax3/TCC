import axios from 'axios'

const api = axios.create(
    { baseURL : "http://localhost:5000/AvaliacaoLivro" }
);

export const listarAvaliacaoLivroApi = async (idlivro) => {
    const response = await api.get('/' + idlivro);
    console.log(response);
    return response;
}