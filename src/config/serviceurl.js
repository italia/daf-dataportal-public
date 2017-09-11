export const serviceurl = {
  // service url
  apiURLDatiGov: "http://10.100.82.195:9000/dati-gov/v1", 
  apiURLCatalogManager: "http://10.100.82.195:9001/catalog-manager/v1", 
  
  // mock url
  apiURLDatiGov: "http://localhost:3001/dati-gov/v1", 
  apiURLCatalogManager: "http://localhost:3001/catalog-manager/v1", 
  
  // DatasetBackend module configs 
  apiURLMock: "http://localhost:3000/mock/",
  "DatasetBackend": {
    "Search": {
      "host": "localhost",
      "port": 9000,
      "nameSearch": "/dati-gov/v1/ckan/searchDataset",
      "nameDetail": "/dati-gov/v1/ckan/datasets/"
    }
  }
}