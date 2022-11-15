import axios from 'axios';
import { EncuestaDom } from '../domain/encuestaDomain';
import { REST_URL_SERVER } from './../configuration';
class EncuestaService {

    async actualizarEncuesta(encuesta){
        await axios.put(`${REST_URL_SERVER}/encuesta`, encuesta.toJSON())
       
    }

    async getEncuestaById(idEncuesta){
        const encuestaJSON = await axios.get(`${REST_URL_SERVER}/getEncuestaById/${idEncuesta}`)
        console.log(encuestaJSON.data);
        return EncuestaDom.fromJSON(encuestaJSON.data)
    }

    async eliminarEncuesta(encuesta){
        await axios.delete(`${REST_URL_SERVER}/deleteEncuesta/${encuesta.id}`)
            
        }

    async createEncuesta(encuesta){
        await axios.post(`${REST_URL_SERVER}/createEncuesta`, encuesta.toJSON())
    }
    
}
export const encuestaService = new EncuestaService()