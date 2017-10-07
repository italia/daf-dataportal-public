import React , {Component} from 'react'
import * as csv from "csvtojson"
import * as request from "request";
import CsvMap from './map/CsvMap.js';
/**
 * @author: Davide Pastore
 * @author: Cosimo,Francesco Pichierri
 * 
 */

class CsvDisplayer extends Component {
    constructor(props){
        super(props);
        this.headers = [];
        this.delimiter= "auto";
        this.latFieldName="Lat";
        this.longFieldName="Lon";
        this.noheader=false;
        this.dataColumnName=""; 
        this.tmpEl = [];
        this.state = {
            headers: [],
            rows: []
        };
    }

    componentDidMount(){
        console.log("Component did mount");
        if(this.props.separator){
            this.delimiter=this.props.delimiter;
        }
        if(this.props.latFieldName){
            this.latFieldName=this.props.latFieldName;
        }
        if(this.props.longFieldName){
            this.longFieldName=this.props.longFieldName;
        }
        if(this.props.noheader){
            //this.noheader=this.props.noheader ==='true' ? true : false;
            this.noheader=this.props.noheader
        }
        if(this.props.dataColumnName){
            this.dataColumnName=this.props.dataColumnName;
        }
        //Retrieve csv
         // Retrieve the csv
        csv({
            toArrayString: true,
            delimiter: this.delimiter,
            noheader: this.noheader
        })
        .fromStream(request.get(this.props.src))
        .on('header', (header)=>{
            this.setState({headers: header});
        })
        .on('json', (jsonObj)=>{
            this.tmpEl.push([...this.state.rows, jsonObj]);
        })
        .on('done', (error)=>{
            this.setState({
                rows: [...this.tmpEl]
            });
        })
    }
    render() {
        const {headers} = this.state;
        const longFieldName = this.longFieldName;
        const latFieldName = this.latFieldName;
        const rows = this.state.rows;
        const dataColumnName = this.dataColumnName;
        console.log("Invoking markers ",this.state.rows);
        return (
            <div>
                {
                   <CsvMap markers={rows} center={[51.505, -0.09]} longFieldName={longFieldName} latFieldName={latFieldName}
                    dataColumnName={dataColumnName}
                    ></CsvMap>
                }
             </div>
        );
    }


}


export default CsvDisplayer;