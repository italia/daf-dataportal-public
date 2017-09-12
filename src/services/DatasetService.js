
import { serviceurl } from '../config/serviceurl.js'

export default class DatasetService {
    
    baseUrl = serviceurl.apiURLCatalogManager + "/ckan";
    
    constructor() {
    }

    async search(query, category_filter){

        let queryurl = '';
        if(query) {
            queryurl = '&q=title:*'+ query + '*';
        }

        let categoryurl = '';
        if(category_filter) {
            let first = true;
            for ( let i in category_filter) {
                if (category_filter[i] == true) {
                    if (!query && first)
                        categoryurl += "&q=";
                    else
                        categoryurl += "%20AND%20";
                    categoryurl += "tags:" + i;
                    first = false;
                }
            }
        }

        const response = await fetch( serviceurl.apiCKAN + "?rows=20" + queryurl + categoryurl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        
        return response.json();
    }

    async get(id) {
        const response = await fetch( this.baseUrl + "/datasets/" + id );
        return response.json();
    }

    async getLast() {
        const response = await fetch( this.baseUrl + "/datasets/getLast" );
        return response.json();
    }

} 