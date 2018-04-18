import { serviceurl } from '../config/serviceurl.js'
import  formats  from '../data/formats.js'

export default class GroupService {

    
    constructor() {

    }

    async list_prova() {
        const response = await fetch( this.baseUrl );
        return response.json();
    }

    async list_ckan(){
        
        const response = await fetch( this.baseUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        
        return response.json();
    }

    async list() {
        
        return formats;
    }

}