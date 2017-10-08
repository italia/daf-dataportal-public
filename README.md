# data-portal
React/Redux data-portal skeleton

Start in Debug Mode:
```
npm install
npm start
```

Start with mock server:
```
npm run mock
```

Start in Production Mode:
```
npm run build
npm install -g serve
serve -s build
```

# DAF Open Map
React Open Map Component with OpenStreetMap and react-leaf.

How to start:
```
cd react-open-map
npm install
yarn storybook
```

How to use map component:
```
<DafOpenMap
  url={"http://localhost:9009/example_dataset.json"}
  lat={"enteBeneficiario.geoLat"}
  lng={"enteBeneficiario.geoLng"}
/>
```

Where:

url: The URL of dataset
lat: Path of the JSON field latitude defined in the dataset
lng: Path of the JSON field longitude defined in the dataset

You can modify the component by editing the file in the following path :
```
react-open-map/src/components/DafOpenMap.js
```

You can create new stories by editing the file in the following path :
```
react-open-map/src/stories/DafOpenMap.js
```

NOTE: Currently the popup shown when user clicks on the geopoint is customized on a example dataset in :
```
react-open-map/public/example_dataset.json
```
