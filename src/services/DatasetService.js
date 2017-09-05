
import { serviceurl } from '../config/serviceurl.js'

export default class DatasetService {
    
    //MOCK
    baseUrlMock = serviceurl.apiURLMock + "/dataset";
    
    baseUrl = serviceurl.apiURLDatiGov + "/ckan";

    constructor() {

    }

    async search(query){
        
        let queryurl = '';
        if(query)
            queryurl = '&q='+ query;

        const response = await fetch( this.baseUrlMock + "/searchDataset?rows=20" + queryurl );
        return response.json();
    }

    async getLast() {
        const response = await fetch( this.baseUrlMock + "/getLast" );
        return response.json();
    }

} 