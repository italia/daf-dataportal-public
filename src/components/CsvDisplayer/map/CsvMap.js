import React , {Component} from 'react';
import { Map, InfoControl, TileLayer, Marker } from 'react-leaflet-wrapper';

/**
 * @author Francesco Pichierri
 * @author Davide Pastore
 * 
 */

export default class CsvMap extends Component {

    constructor(props){
        super(props);
        this.state = {
            markers: []
        };
    }
    componentDidMount(){
        this.state.markers=this.props.markers ? this.props.markers : [] ;
    }

    getLatLng(curMarker,latFieldName,longFieldName){
        console.log("currentMarker ",curMarker );
        return {
                    lat: curMarker[latFieldName], 
                    lng: curMarker[longFieldName]
                };
    }
    getDataColumn(curMarkerCsv, dataColumnName){
        var curLabel= '';
        if(curMarkerCsv && curMarkerCsv[dataColumnName]){
            curLabel=curMarkerCsv[dataColumnName];
        }
        return curLabel;
    }
    render(){
        const {markers} = this.props;
        const {center}=this.props;
        const {longFieldName} = this.props;
        const {latFieldName} = this.props;
        const {dataColumnName} = this.props;
        //console.log("MARKERS ",this.props.markers);
        return (
            <div>
            <Map
        width='100%'
        height={400}
        center={center}
        zoom={13}
        >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
           
                                (markers || {}).map((markerCsv,index) => 
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

//export default CsvMap;