import { ContendidoReporte } from "../domain/contenidoDomain"
import axios from 'axios';
import { user } from "./AuthService";

class ReporteService {

    async allInstanceUser(){
        const contenidoJson = await axios.get(`http://localhost:9000/getReporte`,{
            params : {
                idUsuario : user.id
            }
        })
        const contenidos = contenidoJson.data.map((contenidoJson) =>  ContendidoReporte.fromJson(contenidoJson) )
        console.info(contenidos)
        return contenidos

    }
    async allInstance(){
        const contenidoJson = await axios.get(`http://localhost:9000/getReporte`)
        const contenidos = contenidoJson.data.map((contenidoJson) =>  ContendidoReporte.fromJson(contenidoJson) )
        console.info(contenidos)
        return contenidos

    }
}

export const reporteService = new ReporteService()