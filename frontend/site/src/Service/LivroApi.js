import axios from 'axios'

const api = axios.create (
    { baseURL : 'http://localhost:5000/Livro' }
);

export const ConsultarPorIdLivro = async (idlivro) => {
    const response = await api.get(`/${idlivro}`);
    return response;
}