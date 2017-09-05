
import { serviceurl } from '../config/serviceurl.js'

export default class DatasetService {
    
    //MOCK
    baseUrl = serviceurl.apiURLMock + "/dataset";
    
    //baseUrl = serviceurl.apiURLDatiGov + "/ckan";

    constructor() {

    }

    async search(query){
        
        let queryurl = '';
        if(query)
            queryurl = '&q='+ query;

        const response = await fetch( this.baseUrl + "/searchDataset?rows=20" + queryurl );
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