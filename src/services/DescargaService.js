import axios from 'axios';
import { REST_URL_SERVER } from './../configuration';
import { Descarga } from './../domain/descargaDomain';

class DescargaService {
    async createDescarga(descarga){
        const descargaId = await axios.post(`${REST_URL_SERVER}/createDescarga`, Descarga.toJSON(descarga))
        console.log('DESCARGA', descargaId);
        return descargaId
    }
}


export const descargaService = new DescargaService()