import React, { Component } from 'react'
import TableRow from './TableRow.js'
import TableHead from './TableHead.js'
import TableFoot from './TableFoot.js'
import * as csv from "csvtojson"
import * as request from "request";

export default class CsvTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: [],
            rows: []
        };
    }
    
    componentDidMount() {
        this.setState({
            caption: this.props.caption ? this.props.caption: '',
            noHeader: this.props.noHeader ? this.props.noHeader: false,
            showFoot: this.props.showFoot ? this.props.showFoot: false,
            rows: this.props.rows ? this.props.rows: [],
            headers: this.props.headers ? this.props.headers: []
        });
    }

    render() {
        const {headers, rows, caption, noHeader, showFoot} = this.props;
        let header = '';
        let foot = '';

        if(!noHeader){
            header = <TableHead headers={headers}></TableHead>;
        }

        if(showFoot){
            foot = <TableFoot foot={headers}></TableFoot>
        }
        console.log("Rows ",this.props.rows);
        return (
               <table className="Table Table--withBorder u-text-r-xs">
                   <caption className="u-hiddenVisually">{caption}</caption>
                   {header}
                   {foot}
                   <tbody>
                        {
                            rows.map((row, index) => 
                                <tr key={index}>
                                    {
                                        Object.keys(row).map((key, td) =>
                                            <td key={key}>{row[key]}</td>
                                        )
                                    }
                                </tr>
                            )
                        }
                    </tbody>
                </table>
        );
      }
}