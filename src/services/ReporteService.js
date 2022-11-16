import { ContendidoReporte } from "../domain/contenidoDomain"
import axios from 'axios';
import { user } from "./AuthService";
import { REST_URL_SERVER } from './../configuration';

class ReporteService {

    async allInstanceUser(order){
        const contenidoJson = await axios.get(`${REST_URL_SERVER}/getReporte/`,{
            params : {
                idUsuario : user.id,
                orderBy : order
            }
        })
        const contenidos = contenidoJson.data.map((contenidoJson) =>  ContendidoReporte.fromJson(contenidoJson) )
        console.info(contenidos)
        return contenidos

    }
    async allInstance(order){
        const contenidoJson = await axios.get(`${REST_URL_SERVER}/getReporte`,{
            params : {
                orderBy : order
            }
        }
        )
        const contenidos = contenidoJson.data.map((contenidoJson) =>  ContendidoReporte.fromJson(contenidoJson) )
        console.info(contenidos)
        return contenidos

    }
}

export const reporteService = new ReporteService()