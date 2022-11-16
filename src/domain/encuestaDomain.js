
export class EncuestaDom  {
    
    static fromJSON(encuestaJSON) {
        return Object.assign(new EncuestaDom(), encuestaJSON)
    }
    toJSON(){
        return {
            ...this
        }
    }



     


}

