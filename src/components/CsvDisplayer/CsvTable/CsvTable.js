import React, { Component } from 'react'
import TableRow from './TableRow.js'
import TableHead from './TableHead.js'
import TableFoot from './TableFoot.js'
import * as csv from "csvtojson"
import * as request from "request";

/**
 * 
 * @author: Davide Pastore
 * @author: Cosimo,Francesco Pichierri
 * 
 * Visualize CSV content into a Table
 */
export default class CsvTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: [], //Headers
            rows: [] //Rows
        };
    }
    
    componentDidMount() {
        this.setState({
            caption: this.props.caption ? this.props.caption: '', //Table's caption
            noHeader: this.props.noHeader ? this.props.noHeader: false, //true if you want skip the header
            showFoot: this.props.showFoot ? this.props.showFoot: false, //true if you want show footer
            rows: this.props.rows ? this.props.rows: [], //Rows containing data
            headers: this.props.headers ? this.props.headers: [] //Headers
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