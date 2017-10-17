
import { serviceurl } from '../config/serviceurl.js'

export default class DatasetService {
    
    baseUrl = serviceurl.apiURLCatalogManager + "/ckan";
    
    constructor() {
    }

    async search(totalDataDisplayed,offset,query, category_filter, group_filter, organization_filter){

        let queryurl = '';
        if(query) {
            queryurl = '&q=name:*'+ query + '*';
        }

        /*category query builder*/
        let categoryurl = '';
        if(category_filter) {
            let first = true;
            for ( let i in category_filter) {
                if (category_filter[i] == true) {
                    if (first) {
                        if (query) {                          
                         categoryurl += "%20AND%20(";
                        }
                    }
                    else
                        categoryurl += "%20OR%20";
                    categoryurl += "tags:" + i;
                    first = false;
                }
            }
    
            if (!first)
                categoryurl += ")";
        }


        /*group query builder*/
        let groupurl = '';
        if(group_filter) {
            let first = true;
            for ( let i in group_filter) {
                if (group_filter[i] == true) {
                    if (first) {
                        if (categoryurl || query) {                     
                          groupurl += "%20AND%20(";
                        }
                    }
                    else
                        groupurl += "%20OR%20";
                    groupurl += "res_format:" + i;
                    first = false;
                }
            }

            if (!first)
                groupurl += ")";
        }

         /*org query builder*/
        let orgurl = '';
        if(organization_filter) {
            let first = true;
            for ( let i in organization_filter) {
                if (organization_filter[i] == true) {
                    if (first) {
                        if (categoryurl || groupurl || query) {                     
                            orgurl += "%20AND%20(";
                        }
                    }
                    else
                        orgurl += "%20OR%20";
                    orgurl += "organization:" + i;
                    first = false;
                }
            }

        if (!first)
            orgurl += ")";
        }
		 // POSSO METTERE LA q= ALLA FINE - SE TROVO ALMENO query, category, group...valorizzati allora la inserisco
        let stringaIniz = '';
        if(!queryurl && (categoryurl || groupurl || orgurl))  
            stringaIniz = '&q=('

        const response = await fetch( serviceurl.apiCKAN + "/package_search?rows=" +totalDataDisplayed +"&start="+ totalDataDisplayed*offset+"&"+stringaIniz + queryurl + categoryurl + groupurl +orgurl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        
        return response.json();
    }

    async get(id) {
        const response = await fetch( serviceurl.apiCKAN + "/package_show?id=" + id );
        return response.json();
    }

    async searchOrder(totalDataDisplayed, offset, order_filter) {

                
        const response = await fetch( serviceurl.apiCKAN + "/package_search?rows=" +totalDataDisplayed +"&start="+ totalDataDisplayed*offset+"&"+"&sort=" + order_filter, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    async getLast() {
        const response = await fetch( serviceurl.apiCKAN + "/package_search?rows=3", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

    async getNumber() {
        const response = await fetch( serviceurl.apiCKAN + "/package_list", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return response.json();
    }

   

} 