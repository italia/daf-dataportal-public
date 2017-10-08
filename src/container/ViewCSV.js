import React, { Component } from 'react'
import CSVTable from "../components/CSVTable/CSVTable"

export default class ViewCSV extends Component {
  render () {
    let style = {
      padding: "30px"
    }
    return (
        <div style={style}>
          <CSVTable separator="," src="https://uniquiz-api.demetriocarrara.me/csv"/> 
          <CSVTable rowsPerPage={6} separator="," src="https://dashboard.healthit.gov/api/open-api.php?source=Surescripts_04-2014_State.csv&format=csv"/>
        </div>
          
      );
  }
}