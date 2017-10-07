import React , {Component} from 'react';
import { Map, InfoControl, TileLayer, Marker } from 'react-leaflet-wrapper';
import '../../../resources/css/leaflet.css'

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
                    lat: curMarker[0][latFieldName], 
                    lng: curMarker[0][longFieldName]
                };
    }
    render(){
        const {markers} = this.props;
        const {center}=this.props;
        const {longFieldName} = this.props;
        const {latFieldName} = this.props;
        //console.log("MARKERS ",this.props.markers);
        return (
            <div>
            <Map
        width='100%'
        height={400}
        center={[51.505, -0.09]}
        zoom={13}
        >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {
           
                                (markers || {}).map((marker,index) => 
                                        <Marker key={index}
                                        latlng={this.getLatLng(marker,latFieldName,longFieldName)}
                                        popupContent={feature => <span>A pretty CSS3 popup.<br /> Easily customizable.</span>}
                                        />   
                                )
        }
        
    </Map>
    </div>
        );
    }
   

}

//export default CsvMap;