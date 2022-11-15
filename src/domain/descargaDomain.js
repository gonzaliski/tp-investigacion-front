import { random } from 'lodash'
import { user } from './../services/AuthService';
export class Descarga {
    static toJSON(descarga){
        const esMusica = () => {
            return descarga.tipoContenido === 'musica' ? descarga.id : null
        }
        const esDocumento = () => {
            return descarga.tipoContenido === 'documento' ? descarga.id : null
        }

        return {
            velocidad: random(1, 300),
            idUsuario: user.id,
            idContenidoMusica: esMusica(),
            idContenidoDocumento: esDocumento()
        }
    }
}