import { serviceurl } from '../config/serviceurl.js'

export default class UserStoryService {
    
    baseUrlMock = serviceurl.apiURLMock + "/user_story";
    baseUrl = serviceurl.apiURLDatiGov + "/user-stories";

    constructor() {

    }

    async getLast() {
        //const response = await fetch( this.baseUrl + "/getLast" );
        const response = await fetch( this.baseUrl);
        return response.json();
    }
    
    async getSimili(id) {
        //const response = await fetch( this.baseUrl + "/getLast" );
        const response = await fetch( this.baseUrl);
        return response.json();
    }
    
    async getCommunity() {
        //const response = await fetch( this.baseUrl + "/getLast" );
        const response = await fetch( this.baseUrl);
        return response.json();
    }

    async get(id) {
        const response = await fetch( this.baseUrl + "/" + id );
        return response.json();
    }

}