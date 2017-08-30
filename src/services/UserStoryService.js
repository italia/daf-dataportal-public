
export default class UserStoryService {
    
    baseUrl = "http://localhost:3000/mock/" + "user_story";

    constructor() {

    }

    async getLast() {
        const response = await fetch( this.baseUrl + "/getLast" );
        return response.json();
    }

    async get(id) {
        const response = await fetch( this.baseUrl + "/" + id );
        return response.json();
    }

}