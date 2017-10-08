import React, {Component} from 'react'
import * as csv from "csvtojson"
import * as request from "request";
import CsvMap from './Map/CsvMap.js';
import CsvTable from './CsvTable/CsvTable.js'
/**
 * @author: Davide Pastore
 * @author: Cosimo,Francesco Pichierri
 *
 * Render Csv content in various forms
 */
const VIEW_TYPE = Object.freeze({MAP: "map", TABLE: "table"});

class CsvDisplayer extends Component {

    constructor(props) {
        super(props);
        this.headers = [];
        this.delimiter = "auto";
        this.latFieldName = "Lat";
        this.longFieldName = "Lon";
        this.noHeader = false;
        this.dataColumnName = "";
        this.tmpEl = [];
        this.type = VIEW_TYPE.TABLE;
        this.caption = '';
        this.showFoot = false;
        this.showDetail = false;
        this.state = {
            headers: [],
            rows: []
        };
    }

    componentDidMount() {
        if (this.props.delimiter) {
            this.delimiter = this.props.delimiter;
        }
        if (this.props.latFieldName) {
            this.latFieldName = this.props.latFieldName;
        }
        if (this.props.longFieldName) {
            this.longFieldName = this.props.longFieldName;
        }
      
        if (this.props.noHeader) {
            //this.noHeader=this.props.noHeader ==='true' ? true : false;
            this.noHeader = this.props.noHeader
        }
        if (this.props.dataColumnName) {
            this.dataColumnName = this.props.dataColumnName;
        }
        if (this.props.type == VIEW_TYPE.MAP) {
            this.type = VIEW_TYPE.MAP;
        }
        if (this.props.caption) {
            this.caption = this.props.caption;
        }
        if (this.props.showFoot) {
            this.showFoot = this.props.showFoot;
        }

        // Retrieve the csv
        csv({toArrayString: true, delimiter: this.delimiter, noHeader: this.noHeader})
            .fromStream(
                request.get(this.props.src)
            )
            .on('header', (header) => {
                this.setState({headers: header});
            })
            .on('json', (jsonObj) => {
                this
                    .tmpEl
                    .push(...this.state.rows, jsonObj);
            })
            .on('done', (error) => {
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
        const caption = this.caption;
        const {autoCenter, zoom, center, showFoot, noHeader} = this.props;
        const {showDetail} = this.props;
        if (this.type == VIEW_TYPE.MAP) {
            return (
                <div>
                    <CsvMap
                        rows={rows}
                        center={center}
                        longFieldName={longFieldName}
                        latFieldName={latFieldName}
                        dataColumnName={dataColumnName}
                        autoCenter={autoCenter}
                        zoom={zoom} showDetail={showDetail}></CsvMap>
                </div>
            );
        } else {
            return (
                <div>
                    <CsvTable headers={headers} rows={rows} caption={caption} showFoot={showFoot} noHeader={noHeader}></CsvTable>
                </div>
            );
        }
    }

}

export default CsvDisplayer;