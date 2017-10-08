import React, { Component } from 'react';
import ReactTable from "react-table";
import Papa from 'papaparse';
import './ReactCsvTable.css';

class ReactCsvTable extends Component {

  //Creates columns from string array
  createColumns(titles){
    let columns = [];
    titles.forEach((element, i) => {
      columns.push(
          {
            Header: element,
            accessor: i.toString(),
            minWidth: 144,
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
          });
    });
    return columns;
  }

  loadData(link) {
    const validate = (link) =>
      new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi).test(link);
    let rows = [];
    // here check if it's a link
    if (!validate(link)) return;
    //this url acts as proxy to bypass cors requests that block the fetching
    Papa.parse("https://cors-anywhere.herokuapp.com/"+link, {
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
    const {initialRows} = this.props || 20;
    return (
      <div>
        <ReactTable
          filterable
          defaultFilterMethod={(filter, row) => String(row[filter.id]).toUpperCase().indexOf(filter.value.toUpperCase()) === 0 }
          data={data}
          columns={columns}
          defaultPageSize={initialRows}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default ReactCsvTable;
