
export class EncuestaDom  {

    constructor(id_encuesta,res_pos,res_neg,puntaje,id_descarga,id_usuario){
        this.id_respuesta_encuesta = id_encuesta
        this.resumen_positivo = res_pos
        this.resumen_negativo= res_neg
        this.puntaje = puntaje
        this.id_descarga = id_descarga
        this.id_usuario = id_usuario
    }

    static fromJson(encuestaJSON) {
        return Object.assign(new EncuestaDom(), encuestaJSON)
      }



     


}

