import { serviceurl } from '../config/serviceurl.js'
import  categories  from '../data/categories.js'

export default class CategoryService {
    
    
    constructor() {

    }

    async list_mock() {
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
        
        return categories;
    }





}