
export class UsuarioDom  {


    static fromJson(usuarioJSON) {
        return Object.assign(new Usuario(), usuarioJSON)
      }
}

