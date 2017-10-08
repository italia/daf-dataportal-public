import React, {Component} from 'react';
import {Map, InfoControl, TileLayer, Marker} from 'react-leaflet-wrapper';

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
        this.state = {
            markers: []
        };
        this.nativeLeafMarkers = [];
        this.selectedMarker = null;
    }
    componentDidMount() {
        this.state.markers = this.props.rows
            ? this.props.rows
            : [];
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
                this
                    .latLngs
                    .push(this.getLatLng(markerCsv[curMarker], latFieldName, longFieldName));
            }
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
        //console.log("MARKERS ",this.props.rows);
        const {autoCenter} = this.props;
        //console.log("selectedMarker ",this.selectedMarker);
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
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/> {

                        (rows || {}).map(
                            (markerCsv, index) => <Marker
                                key={index}
                                latlng={this.getLatLng(markerCsv, latFieldName, longFieldName)}
                                popupContent={feature => <span>{this.getDataColumn(markerCsv, dataColumnName)}</span>
                                }
                            />
                        )
                    }

                </Map>
            </div>
        );
    }

}