import axios from 'axios';

const api = axios.create(
    { baseURL:"http:/localhost:5000/Carrinho" }
);

export const ListarCarrinho = async (cliente) => {
    const resp = await api.get('?idcliente=' + cliente);
    return resp.data;
}

export const Remover = async (id) => {
    const resp = await api.delete('/' + id);
    return console.log(resp);
}