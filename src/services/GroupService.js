import { serviceurl } from '../config/serviceurl.js'

export default class GroupService {
    
    //baseUrl = serviceurl.apiURLDatiGov + "/group";

    //chiamata a CKAN per il recupero delle category
    baseUrl = serviceurl.apiCKAN + "/group_list";
    
    constructor() {

    }

    async list_prova() {
        const response = await fetch( this.baseUrl );
        return response.json();
    }

    async list(){
        
        const response = await fetch( this.baseUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        
        return response.json();
    }

}