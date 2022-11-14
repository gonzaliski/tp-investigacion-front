import { remove } from 'lodash'
import axios from 'axios';
import { EncuestaDom } from '../domain/encuestaDomain';
class EncuestaService {
    encuestas = [
        {
            id: 1,
            positivo: 'La mejor cancion',
            negativo: 'Nada no tiene',
            puntaje: 8.6,
            idDescarga: 1,
            idUsuario: 1
        },
        {
            id: 2,
            positivo: 'Gran cancion',
            negativo: 'Demasiado rock',
            puntaje: 9.2,
            idDescarga: 4,
            idUsuario: 1
        },
        {
            id: 3,
            positivo: 'Muy buen resumen',
            negativo: 'Muy largo',
            puntaje: 8.5,
            idDescarga: 5,
            idUsuario: 1
        },
    ]

    // getEncuestaById(id){
    //     return this.encuestas.find( e => e.idDescarga === id)
    // }

    // actualizarEncuesta(encuesta){
    //     this.eliminarEncuesta(encuesta)
    //     this.encuestas.push(encuesta)
    // }

    // eliminarEncuesta(encuesta){
    //     const encuestaARemover = this.encuestas.find( e => e.id === encuesta.id )
    //     remove(this.encuestas, encuestaARemover)
        
    // }
    
    async actualizarEncuesta(encuesta){
        await axios.put(`http://localhost:9000/encuesta`,encuesta.toJson())
       
    }

    async getEncuestaById(userId, contenidoId){
        const encuestaJson = await axios.get(`http://localhost:9000/editEncuesta/${userId}/contenido/${contenidoId}`)
        return EncuestaDom.fromJson(encuestaJson)
    }

    async eliminarEncuesta(encuestaID){
            await axios.delete(`http://localhost:9000/deleteEncuesta/${encuestaID}`)
            
        }

    async createEncuesta(encuesta){
        await axios.post((`http://localhost:9000/createEncuesta`,encuesta.toJson()))
    }
    
}
export const encuestaService = new EncuestaService()