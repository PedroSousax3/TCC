import axios from 'axios';
const api = axios.create(
    { baseURL:"https://viacep.com.br/" }
);


export const buscarEndereco = async (cep) => {
    const resp = await api.get(`ws/${cep}/json`);
    return resp.data;
}


const correio = axios.create(
    { baseURL:"https://apicorreio.herokuapp.com" ,
      validateStatus: function (status) {
      return status < 600; 
      }
    }

);

export const calcularFrete = async (nCdServico,sCepOrigem ,sCepDestino ,nVlPeso ,nCdFormato ,nVlComprimento,nVlAltura ,nVlLargura , nVlDiametro) => {
    console.log(nCdServico,sCepOrigem ,sCepDestino ,nVlPeso ,nCdFormato ,nVlComprimento,nVlAltura ,nVlLargura , nVlDiametro);
    const resp = await correio.post("/frete/" + nCdServico + "/" + sCepOrigem + "/" + sCepDestino + "/" + nVlPeso + "/" + nCdFormato + "/" + nVlComprimento + "/" + nVlAltura + "/" + nVlLargura + "/"+ nVlDiametro);

    return resp.data;
}


export const rastrearPedido = async (codigo) => {
    const resp =  await correio.get("/rastrear/" + codigo);
    console.log(resp.data)
    return resp.data;
}