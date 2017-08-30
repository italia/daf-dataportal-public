
export default class DatasetService {
    
    baseUrl = "http://localhost:3000/mock/" + "dataset";

    constructor() {

    }

    async getLast() {
        const response = await fetch( this.baseUrl + "/getLast" );
        return response.json();
    }

} 