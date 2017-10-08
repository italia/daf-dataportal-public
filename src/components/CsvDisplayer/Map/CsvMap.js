import React, {Component} from 'react';
import {Map, InfoControl, TileLayer, Marker} from 'react-leaflet-wrapper';
import CsvTable from '../CsvTable/CsvTable.js';

/**
 * @author Cosimo,Francesco Pichierri
 * @author Davide Pastore
 *
 */

export default class CsvMap extends Component {
    /**
     *
     * @param {*} props
     */
    constructor(props) {
        super(props);
        this.latLngs = [];
        this.headerDetail=null;
        this.rowsDetail=[];
        this.state = {
            markers: [],
            showDetail: false
        };
        this.selectedMarker = null;
    }
    componentDidMount() {
        this.state.markers = this.props.rows ? this.props.rows : [];
    }

    /**
     * Given a row  and latitude field name, longitude field Name , returns a Leaflet
     * marker
     * @param {*} curMarker
     * @param {*} latFieldName
     * @param {*} longFieldName
     */
    getLatLng(curMarker, latFieldName, longFieldName) {
        return {lat: curMarker[latFieldName], lng: curMarker[longFieldName]};
    }

    getLatLngListsMarker(markerCsv, latFieldName, longFieldName) {
        this.latLngs = [];
        if (markerCsv) {
            for (let curMarker in markerCsv) {
                this.latLngs.push(this.getLatLng(markerCsv[curMarker], latFieldName, longFieldName));
            }
        }

    }
    clicked(marker){
        this.rowsDetail=[];
        //Get headers from markerCsv //Rows from marker, caption "Detail"
        const headers = this.extractHeaderFromCsv(marker); //Keys
        const rows = marker;
        this.headerDetail = headers;
        this.rowsDetail.push(rows);
        if(this.props.showDetail){
            this.setState({
                showDetail: true,
            });
        }
    }
    extractHeaderFromCsv(markers){
        if(markers){
            return Object.keys(markers);
        }
    }
    /**
     * Given a row  and a data column field Name returns
     * description of marker. This description will be rendered in a popup
     * @param {*} curMarkerCsv
     * @param {*} dataColumnName
     */
    getDataColumn(curMarkerCsv, dataColumnName) {
        var curLabel = '';
        if (curMarkerCsv && curMarkerCsv[dataColumnName]) {
            curLabel = curMarkerCsv[dataColumnName];
        }
        return curLabel;
    }

    /**
     * Render component
     */
    render() {
        const rows = this.props.rows;
        const {center} = this.props;
        const {longFieldName} = this.props;
        const {latFieldName} = this.props;
        const {dataColumnName} = this.props;
        const {zoom} = this.props;
        const {selected} = this.props;
        const {autoCenter} = this.props;
        return (
            <div>
                <Map
                    width='100%'
                    height={400}
                    center={center}
                    zoom={zoom}
                    bounds={this.latLngs}>
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>  
                   {

                    Array.isArray(rows) && rows.map(
                            (markerCsv, index) => <Marker key={index} onClick={()=>this.clicked(markerCsv)} latlng={this.getLatLng(markerCsv, latFieldName, longFieldName)}
                                    popupContent={feature => <span>{this.getDataColumn(markerCsv, dataColumnName)}</span>
                                }
                            />
                        )
                    }

                </Map>
                { 
                    this.state.showDetail ?
                        <div>
                            <CsvTable headers={this.headerDetail} rows={this.rowsDetail} showFoot={false}></CsvTable>
                        </div>
                    : null
                }
            </div>
        );
    }

}