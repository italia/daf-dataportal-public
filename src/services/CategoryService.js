import { serviceurl } from '../config/serviceurl.js'

export default class CategoryService {
    
    baseUrl = serviceurl.apiURLDatiGov + "/category";
    
    constructor() {

    }

    async list() {
        const response = await fetch( this.baseUrl );
        return response.json();
    }

}