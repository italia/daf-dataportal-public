import React, { Component } from 'react'
import TableRow from './TableRow.js'
import TableHead from './TableHead.js'
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
            noHeader: this.props.noHeader ? this.props.noHeader: false
        });

        // Retrieve the csv
        csv({
            toArrayString: true
        })
        .fromStream(request.get(this.props.src))
        .on('header', (header)=>{
            this.setState({headers: header});
        })
        .on('json', (jsonObj) => {
            this.setState({
                rows: [...this.state.rows, jsonObj]
            });
        })
        .on('done', (error) => {
            console.log('Finito!', error);
        })
    }

    render() {
        const {headers, rows, caption, noHeader} = this.state;
        let header = '';
        if(!noHeader){
            header = <TableHead headers={headers}></TableHead>;
        }
        return (
               <table className="Table Table--withBorder u-text-r-xs">
                   <caption className="u-hiddenVisually">{caption}</caption>
                   {header}
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