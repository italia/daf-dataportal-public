import { serviceurl } from '../config/serviceurl.js'

export default class DashboardService {

  constructor() { }

  baseUrl = serviceurl.apiURLDatiGov + "/public/dashboards";
  //baseUrl = "http://localhost:3001/dati-gov/v1/dashboards";

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

  // al momento richiamo il getLast. getSimili TODO
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