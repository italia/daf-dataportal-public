import React from 'react'
import L from 'leaflet';

class LeafComponent extends React.Component {

    constructor() {
        super()
        this.mapToShow = null
        this.markerlist = []
    }

    render() {
        return <div style={{height: "500px", width: "100%"}} id="open_map"/>
    }

    componentDidMount() {
        this.mapToShow = L.map('open_map', {
            center: [45, 11], zoom: 5, layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
            ],
        });

    }

    componentWillReceiveProps(nextProps) {
        if (this.markerlist !== [])
            this.markerlist.map(marker => this.mapToShow.removeLayer(marker));
            this.attachAndPositionData(nextProps.data,this.props.onMarkerClick);

        if (nextProps.selectedPoint !== null) {
            this.centerToData(nextProps.selectedPoint);
        }
    }

    centerToData(data){
        this.mapToShow.panTo(this.extractCoord(data));
    }

    //TODO change/adapt based on REAL data
    extractCoord(data){
        return [data.latitude, data.longitude]
    }

    //TODO change/adapt based on REAL data
    attachAndPositionData(data,onMarkerClick) {
        //null check, don't display anything
        if (data == null || data.length == 0) return;

        let center_lat = 0;
        let center_lon = 0;

        //init
        let cornerTopLeft = this.extractCoord(data[0]);
        let cornerBottomRight = this.extractCoord(data[0]);

        this.markerlist = [];

        data.forEach(current => {
            const [latitude, longitude] = this.extractCoord(current);
            const title = current.title;

            center_lat += latitude;
            center_lon += longitude;

                if (cornerTopLeft[0] > latitude)
                    cornerTopLeft[0] = latitude;
                if (cornerTopLeft[1] < longitude)
                    cornerTopLeft[1] = longitude;

                if (cornerBottomRight[0] < latitude)
                    cornerBottomRight[0] = latitude;
                if (cornerBottomRight[1] > longitude)
                    cornerBottomRight[1] = longitude;

            let tempMarker = L.marker([latitude, longitude]
                // {icon:Icon} // eventually you can use another icon: see docs
            );

            //bind listner
            tempMarker.addEventListener('click',()=>{
                onMarkerClick(current);
            })
                //.bindPopup(title)
                .addTo(this.mapToShow);

            //tempMarker.bindPopup(title); //set title
            //tempMarker.addTo(this.mapToShow); //add to map

            this.markerlist.push(tempMarker);//keep track off all markers
        });

        //calculate center point
        center_lon /= data.length;
        center_lat /= data.length;

        //force map to zoom on markers area
        let mapbound = L.latLngBounds(cornerTopLeft, cornerBottomRight);
        this.mapToShow.fitBounds(mapbound);
    }
}

export default LeafComponent