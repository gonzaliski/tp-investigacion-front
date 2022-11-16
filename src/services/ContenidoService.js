import axios from 'axios';
import { ContendidoDom } from '../domain/contenidoDomain';
import { REST_URL_SERVER } from './../configuration';
import { user } from './AuthService';

class ContenidoService {
    contenidos

    // async getAllContenidos(){
    //     const cont = await axios.get(`${REST_URL_SERVER}/${user.id}`)

    //     return this.contenidos
    // }  
    
    async getAll(){
        const contenidoJson = await axios.get(`${REST_URL_SERVER}/${user.id}`)
        const contenidos = contenidoJson.data.map((contenidoJson) =>  ContendidoDom.fromJson(contenidoJson) )
        contenidos.forEach(c => c.velocidadPromedio = Math.floor(c.velocidadPromedio))
        this.contenidos = contenidos
        return this.contenidos
    }

}

export const contenidoService = new ContenidoService()