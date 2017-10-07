import React, { Component } from 'react';

import "react-table/react-table.css";

import ReactTable from "react-table";
import Papa from 'papaparse'

class ReactCsvTable extends Component {

  //Creates columns from string array
  createColumns(titles){
    let columns = [];
    titles.forEach((element, i) => {
      columns.push(
          {
            Header: element,
            accessor: i.toString(),
            // filterAll: true
          });
    });
    return columns;
  }

  //loads the table data from the csv link
  loadData(link) {
    const validate = (link) =>
      new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(link);
    let rows = [];
    // here check if it's a link
    if (!validate(link)) return;
    Papa.parse(link, {
      download: true,
      dynamicTyping: true,
      step: function(row) {
        rows.push(row.data[0]);
      },
      complete: () => {
          this.setState({
            //in the first element of the array rows there are the headers
            columns: this.createColumns(rows[0]),
            data: rows.slice(1)
          })
        }
    });
  }

  constructor(props) {
    super(props);
    Papa.SCRIPT_PATH = "./node_modules/papaparse/papaparse.js";
    this.state = {
      //array of JObjects
      data: [],
      //Titles of the columns
      columns: this.createColumns([])
    }
  }

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
          defaultPageSize={25}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

export default ReactCsvTable;
