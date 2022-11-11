import { remove } from 'lodash'

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

    getEncuestaById(id){
        return this.encuestas.find( e => e.idDescarga === id)
    }

    actualizarEncuesta(encuesta){
        this.eliminarEncuesta(encuesta)
        this.encuestas.push(encuesta)
    }
    eliminarEncuesta(encuesta){
        const encuestaARemover = this.encuestas.find( e => e.id === encuesta.id )
        remove(this.encuestas, encuestaARemover)
        
    }
}
export const encuestaService = new EncuestaService()