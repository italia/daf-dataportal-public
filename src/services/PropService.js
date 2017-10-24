import { serviceurl } from '../config/serviceurl.js'

export default class PropService {
    
    baseUrl = serviceurl.apiURLCatalogManager + "/prop";
    
    constructor() {
    }

    async getJsonProp(name) {
        const response = await fetch( serviceurl.apiCKAN + "/getProp" + name );
        return response.json();
    }
}