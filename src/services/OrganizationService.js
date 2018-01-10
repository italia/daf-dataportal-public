import { serviceurl } from '../config/serviceurl.js'

export default class OrganizationService {
    
    //baseUrl = serviceurl.apiURLDatiGov + "/organization";
    baseUrl = serviceurl.apiCKAN + "/organization_list";
    
    constructor() {

    }

    async list_prova() {
        const response = await fetch( this.baseUrl );
        return response.json();
    }

    async list(){
        var org = localStorage.getItem('organization')
        if(org==='daf'){
            const response = await fetch( this.baseUrl, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            return response.json();
        } else {
            return JSON.parse('{"result": ["'+org+'"]}')

        }
    }

}