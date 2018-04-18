export const serviceurl = {
  //LUCAL
/*   apiURLDatiGov: "http://10.100.208.161:9000/dati-gov/v1",
  apiURLCatalogManager: "http://10.100.208.161:9001/catalog-manager/v1", */
  
  // mock url
  //apiURLDatiGov: "http://localhost:3001/dati-gov/v1", 
  //apiURLCatalogManager: "http://localhost:3001/catalog-manager/v1",   
  //apiCKAN: "http://localhost:3001/api/3/action",
  //Ckan centrale 
  //apiCKAN: "http://192.168.0.33/api/3/action",
  //apiURLDatiGov: "http://10.99.232.252:9000/dati-gov/v1", 
  
  // Internal under VPN

  // service url
  //apiURLDatiGov: "http://datipubblici.default.svc.cluster.local:9000/dati-gov/v1", 
  //apiURLCatalogManager: "http://catalog-manager.default.svc.cluster.local:9000/catalog-manager/v1", 
  //apiCKAN: "http://192.168.0.33/api/3/action",

    // External

  // service url
   apiURLDatiGov: "https://api.daf.teamdigitale.it/dati-gov/v1", 
   apiURLCatalogManager: "https://api.daf.teamdigitale.it/catalog-manager/v1", 
   //apiCKAN: "https://ckan-open.daf.teamdigitale.it/api/3/action/",
   //apiCKAN: http://dcatapit.geo-solutions.it/api/3/action/,
  
   apiCKAN:  window.location.hostname.split('.')[0].indexOf('dataportal')!==-1?"https://api.daf.teamdigitale.it/dati-gov/ckan_proxy":"https://api.daf.teamdigitale.it/dati-gov/ckan_geo_proxy",
   apiMedium: "https://api.daf.teamdigitale.it/dati-gov/medium/"
  }

  
