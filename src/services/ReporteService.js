import { ContendidoReporte } from "../domain/contenidoDomain"
import axios from 'axios';

class ReporteService {

    async allInstance(){
        const contenidoJson = await axios.get(`http://localhost:9000/reporte`)
        const contenidos = contenidoJson.data.map((contenidoJson) =>  ContendidoReporte.fromJson(contenidoJson) )
        return contenidos

    }
}

export const reporteService = new ReporteService()