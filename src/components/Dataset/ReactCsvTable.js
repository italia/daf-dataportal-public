import React, { Component } from 'react';
import ReactTable from "react-table";
import Papa from 'papaparse';
import './ReactCsvTable.css';

/** This is the React component for showing a table of CSV data
 *
 *  Component's attributes:
 *    - csvPath:      the uri where the CSV file is located
 * */
class ReactCsvTable extends Component {

  // Creates columns from string array
  createColumns(titles){
    let columns = [];
    titles.forEach((element, i) => {
      columns.push(
          {
            Header: element,
            accessor: i.toString(),
            /* minimum width (in px) of table columns */
            minWidth: 144,
            /* custom filter component */
            Filter: ({ filter, onChange }) =>
            <span>
              <input
                type={"text"}
                onChange={event => onChange(event.target.value)}
                style={{ width: "100%" }}
                placeholder={"Filtra"}
                className={"s-inline"}
                id={`s-${i}`}
              />
            </span>
          }
      );
    });
    return columns;
  }

  // load data into table
  loadData(link) {
    const validate = (link) =>
      new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(link);
    let rows = [];
    // here check if it's a link
    if (!validate(link)) return;
    // this url acts as proxy to bypass CORS requests that block the fetching of stored CSV file,
    // because we had an issue to access some server that doesn't return us right headers
    Papa.parse("https://cors-anywhere.herokuapp.com/"+link, {
      download: true,
      dynamicTyping: true,
      step: function(row) {
        rows.push(row.data[0]);
      },
      complete: () => {
          this.setState({
            // first row of array represent CSV header, while remaining ones are data
            columns: this.createColumns(rows[0]),
            data: rows.slice(1)
          })
        }
    });
  }

  constructor(props) {
    super(props);
    // set up Papaparse lib
    Papa.SCRIPT_PATH = "./node_modules/papaparse/papaparse.js";
    
    this.state = {
      //array of JObjects
      data: [],
      //Titles of the columns
      columns: this.createColumns([])
    }
  }

  // load data asynchronously
  componentDidMount() {
    this.loadData(this.props.csvPath);  
  }

  render() {
    const { data } = this.state;
    const { columns } = this.state;
    return (
      <div>
        <ReactTable
          filterable
          defaultFilterMethod={(filter, row) => String(row[filter.id]).toUpperCase().indexOf(filter.value.toUpperCase()) === 0 }
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default ReactCsvTable;
