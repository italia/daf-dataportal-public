
import { serviceurl } from '../config/serviceurl.js'

export default class DatasetService {
    
    baseUrlCkan = serviceurl.apiURLCatalogManager + "/ckan";
    baseUrl = serviceurl.apiURLCatalogManager + "/dataset";

    constructor() {

    }

    async search(query, category_filter){
        
        let queryurl = '';
        if(query)
            queryurl = '&q='+ query;

        const response = await fetch( this.baseUrlCkan + "/searchDataset?rows=20" + queryurl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            } 
        });
        return response.json();
    }

    async get(id) {
        const response = await fetch( this.baseUrl + "/" + id );
        return response.json();
    }

    async getLast() {
        const response = await fetch( this.baseUrl + "/getLast" );
        return response.json();
    }

} 