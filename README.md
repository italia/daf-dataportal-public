# data-portal

[![Build Status][ico-travis]][link-travis]
[![Coverage][ico-codecov]][link-codecov]

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

Components
----------

We have developed three components:
 * Csv Displayer (you can see it in action [here](http://localhost:3000/map));
 * Table (you can see it in action [here](http://localhost:3000/table));
 * Map (you can see it in action [here](http://localhost:3000/map)).

### Csv Displayer

This component will read the CSV and show it in two different ways: as Map or as Table.
An example of usage could be:

```js
<CsvDisplayer src={src} latFieldName='Lat' longFieldName='Lon' dataColumnName="Luogo" type="map" zoom="18" center={[40.36135,18.18825]}></CsvDisplayer>
```

#### Properties

| Name           | Description                                                                                                                | Required | Default | Type                               | Usage     |
|----------------|----------------------------------------------------------------------------------------------------------------------------|----------|---------|------------------------------------|-----------|
| src            | The source of the csv                                                                                                      | yes      | ""      | String                             | map/table |
| delimiter      | The delimiter of the csv                                                                                                   | no       | "auto"  | String                             | map/table |
| type           | The type of component to show                                                                                              | yes      | "table" | String ("map"\|"table")            | map/table |
| latFieldName   | The name of the latitude field csv file                                                                                    | no       | "Lat"   | String                             | map       |
| longFieldName  | The name of the longitude field in the csv file                                                                            | no       | "Lon"   | String                             | map       |
| dataColumnName | The name of the field in the csv to show in the popup                                                                      | no       | ""      | String                             | map       |
| noHeader       | If true won't load the headers of the csv, and in the map you will not be able to read latitude, longitude and other data. | no       | false   | Boolean                            | map/table |
| zoom           | The zoom of the map.                                                                                                       | no       | false   | Integer                            | map       |
| center         | The center position of the map.                                                                                            | no       | false   | Object (ex. {[40.36135,18.18825]}) | map       |
| caption        | The text to add to the table as a caption.                                                                                 | no       | ""      | String                             | table     |
| showFoot       | If true show the foot with the same column of the headers, otherwise doesn't show the foot.                                | no       | false   | Boolean                            | table     |
| showDetail     | If true show details of content after the map, otherwise doesn't show the details                                          | no       | false   | Boolean                            |map/table  |       

### Map

The map shows the data passed using the parameters, creating a marker for each point.
The component is the one required [here](https://github.com/italia/daf-dataportal-public/issues/6).
An example of usage could be:

```js
let rows = [{
    'Col-1': 'Cella 1',
    'Col-2': 'Cella 2'
}];
let center = {[40.36135,18.18825]};
let longFieldName = 'Lon';
let latFieldName = 'Lat';
let dataColumnName = 'Luogo';
let zoom = 18;

<CsvMap
    rows={rows}
    center={center}
    longFieldName={longFieldName}
    latFieldName={latFieldName}
    dataColumnName={dataColumnName}
    zoom={zoom}></CsvMap>
```

#### Properties

| Name           | Description                                           | Required | Default          | Type                               |
|----------------|-------------------------------------------------------|----------|------------------|------------------------------------|
| rows           | The list of rows to display                           | no       | [] (empty array) | Array of objects                   |
| latFieldName   | The name of the latitude field csv file               | no       | "Lat"            | String                             |
| longFieldName  | The name of the longitude field in the csv file       | no       | "Lon"            | String                             |
| dataColumnName | The name of the field in the csv to show in the popup | no       | ""               | String                             |
| zoom           | The zoom of the map                                   | no       | false            | Integer                            |
| center         | The center position of the map                        | no       | false            | Object (ex. {[40.36135,18.18825]}) |

### Table

The table shows the data passed using the parameters.
The component is the one required [here](https://github.com/italia/daf-dataportal-public/issues/3).

An example of usage could be:

```js
let headers = ['Col-1', 'Col-2', 'Col-3'];
let rows = [{
    'Col-1': 'Cella 1',
    'Col-2': 'Cella 2'
}];
let caption = 'Dati comunali';
let showFoot = true;
let noHeader = false;

<CsvTable headers={headers} rows={rows} caption={caption} showFoot={showFoot} noHeader={noHeader}></CsvTable>
```

#### Properties

| Name     | Description                                                                                | Required | Default          | Type             |
|----------|--------------------------------------------------------------------------------------------|----------|------------------|------------------|
| rows     | The list of rows to display                                                                | no       | [] (empty array) | Array of objects |
| headers  | The list of headers                                                                        | no       | [] (empty array) | Array of String  |
| noHeader | If tru hide the header                                                                     | no       | false            | Boolean          |
| caption  | The text to add to the table as a caption                                                  | no       | ""               | String           |
| showFoot | If true show the foot with the same column of the headers, otherwise doesn't show the foot | no       | false            | Boolean          |


[ico-travis]: https://travis-ci.org/DavidePastore/daf-dataportal-public.svg?branch=csv-table
[ico-codecov]: https://codecov.io/gh/DavidePastore/daf-dataportal-public/branch/csv-table/graph/badge.svg

[link-travis]: https://travis-ci.org/DavidePastore/daf-dataportal-public
[link-codecov]: https://codecov.io/gh/DavidePastore/daf-dataportal-public/branch/csv-table