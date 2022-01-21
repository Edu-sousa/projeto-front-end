import axios from "axios";

export const api = axios.create({
    baseURL:'https://bloggeneration.herokuapp.com'
})

export const login= async(url, dados, serDados)=>{
    const resposta =  await api.post(url, dados)
    setDado(resposta.data)
}