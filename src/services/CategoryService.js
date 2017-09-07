import { serviceurl } from '../config/serviceurl.js'

export default class CategoryService {
    
    //mock
    baseUrl = serviceurl.apiURLMock + "/category";
    
    //baseUrl = serviceurl.apiURLDatiGov + "/category";

    constructor() {

    }

    async list() {
        const response = await fetch( this.baseUrl + "/list" );
        return response.json();
    }

}