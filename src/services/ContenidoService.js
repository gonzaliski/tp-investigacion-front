import axios from 'axios';
import { ContendidoDom } from '../domain/contenidoDomain';
import { REST_URL_SERVER } from './../configuration';
import { user } from './AuthService';

class ContenidoService {
    contenidos
    // contenidos =  [
    //     {
    //     id:1,
    //     idDescarga: 1,
    //     titulo:"Smells like teen spirit - Nirvana",
    //     velocidad:"15mbps",
    //     puntaje:8.6,
    //     puntaje_promedio:8.6,
    //     tipo_contenido:"musica"
    //     },
    //     {
    //     id:2,
    //     idDescarga: 2,
    //     titulo:"Wind of change - Scorpions",
    //     velocidad:"13mbps",
    //     puntaje:null,
    //     puntaje_promedio:7.8,
    //     tipo_contenido:"musica"

    //     },
    //     {
    //     id:3,
    //     idDescarga: 3,
    //     titulo:"Resumen primer parcial - Base de datos",
    //     velocidad:"12mbps",
    //     puntaje:null,
    //     puntaje_promedio:8.3,
    //     tipo_contenido:"documento"

    //     },
    //     {
    //     id:4,
    //     idDescarga: 4,
    //     titulo:"Everlong - Foo Fighters",
    //     velocidad:"14mbps",
    //     puntaje:9.2,
    //     puntaje_promedio:9.2,
    //     tipo_contenido:"musica"

    //     },
    //     {
    //     id:5,
    //     idDescarga: 5,
    //     titulo:"Resumen segundo parcial - Base de datos",
    //     velocidad:"13mbps",
    //     puntaje:8.5,
    //     puntaje_promedio:8.5,
    //     tipo_contenido:"documento"

    //     }

    // ]

    async getAllContenidos(){
        const cont = await axios.get(`${REST_URL_SERVER}/${user.id}`)
        this.contenidos = cont.data
        console.log(this.contenidos);
        return this.contenidos
    }  
    
    async getAll(){
        const contenidoJson = await axios.get(`${REST_URL_SERVER}/${user.id}`)
        const contenidos = contenidoJson.data.map((contenidoJson) =>  ContendidoDom.fromJson(contenidoJson) )
        this.contenidos = contenidos
        return this.contenidos
    }

    
    getContenidoById(id){
        return this.contenidos.find( c => c.id === id)
    }
    actualizarPuntaje(id, puntaje){
        const contenidoAActualizar = this.contenidos.find(c => c.id === id)
        contenidoAActualizar['puntaje'] = puntaje
    }

}

export const contenidoService = new ContenidoService()