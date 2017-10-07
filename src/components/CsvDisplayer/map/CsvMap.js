import React , {Component} from 'react';
import { Map, InfoControl, TileLayer, Marker } from 'react-leaflet-wrapper';

/**
 * @author Cosimo,Francesco Pichierri
 * @author Davide Pastore
 * 
 */

export default class CsvMap extends Component {

    constructor(props){
        super(props);
        this.latLngs=[];
        this.state = {
            markers: []
        };
    }
    componentDidMount(){
        this.state.markers=this.props.rows ? this.props.rows : [] ;
    }

    getLatLng(curMarker,latFieldName,longFieldName){
        console.log("currentMarker ",curMarker );
        return {
                    lat: curMarker[latFieldName], 
                    lng: curMarker[longFieldName]
                };
    }

    getLatLngListsMarker(markerCsv,latFieldName,longFieldName){
        this.latLngs=[];
        if(markerCsv){
            for(var curMarker in markerCsv){
                this.latLngs.push(this.getLatLng(markerCsv[curMarker],latFieldName,longFieldName));
            }   
            console.log("Centered",this.latLngs);    
        }
        
    }
    getDataColumn(curMarkerCsv, dataColumnName){
        var curLabel= '';
        if(curMarkerCsv && curMarkerCsv[dataColumnName]){
            curLabel=curMarkerCsv[dataColumnName];
        }
        return curLabel;
    }
    render(){
        const rows = this.props.rows;
        const {center}=this.props;
        const {longFieldName} = this.props;
        const {latFieldName} = this.props;
        const {dataColumnName} = this.props;
        const {zoom} = this.props;
        //console.log("MARKERS ",this.props.markers);
        const {autoCenter} = this.props;
        if(autoCenter && autoCenter===true){
            this.getLatLngListsMarker(rows,latFieldName,longFieldName);
        }
        return (
            <div>
            <Map
        width='100%'
        height={400}
        center={center}
        zoom={zoom}
        bounds={this.latLngs}
        >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
           
                                (rows || {}).map((markerCsv,index) => 
                                        <Marker key={index}
                                        latlng={this.getLatLng(markerCsv,latFieldName,longFieldName)}
                                        popupContent={feature => <span>{this.getDataColumn(markerCsv,dataColumnName)}</span>}
                                        />   
                                )
        }
        
    </Map>
    </div>
        );
    }
   

}