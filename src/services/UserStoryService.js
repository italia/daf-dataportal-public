import { serviceurl } from '../config/serviceurl.js'

export default class UserStoryService {

    baseUrl = serviceurl.apiURLDatiGov + "/public/user-stories";

    constructor() {

    }

    // MOCK
    /* async getLast() {
        const response = await fetch( this.baseUrl + "/getLast" );
        return response.json();
    } */

    /*  async getMock(id) {
         const response = await fetch( this.baseUrl + "/" + id );
         return response.json();
     } */

    /*  async getCommunity() {
         const response = await fetch( this.baseUrl + "/getLast" );
         return response.json();
     } */

    /*   async getSimili(id) {
          const response = await fetch( this.baseUrl + "/getLast" );
          return response.json();
      } */

    // utilizzato per la pagina Crea (restituisce 9 storie)
    async getLastCrea() {
        const response = await fetch(this.baseUrl + "/getLastCrea");
        return response.json();
    }



    async get(id) {
        var headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        const response = await fetch(this.baseUrl + "/" + id, {
            method: 'GET',
            headers: headers
        })
        return response.json();
    }

    async getLast() {
        var headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        const response = await fetch(this.baseUrl, {
            method: 'GET',
            headers: headers
        })
        return response.json();
    }

    // al momento richiamo il geLast. getSimili TODO
    async getSimili() {
        var headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        const response = await fetch(this.baseUrl, {
            method: 'GET',
            headers: headers
        })
        return response.json();
    }
}