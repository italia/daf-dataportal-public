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
            this.markerlist.map(marker => this.mapToShow.removeLayer(marker))
        if (nextProps.selectedPoint !== null) {
            //selezionare solo quel punto
            alert("selzionato punto")
        }
        else {
            this.attachAndPositionData(nextProps.data)
        }
    }

    attachAndPositionData(data) {
        let center_lat = 0;
        let center_lon = 0;


        let cornerTop = null;
        let cornerBottom = null;
        this.markerlist = []

        //var bounds = new L.LatLngBounds(arrayOfLatLngs);

        data.forEach(current => {
            const {latitude, longitude, title} = current
            center_lat += latitude;
            center_lon += longitude;

            if (cornerTop === null) {
                cornerTop = [latitude, longitude];
            } else {
                if (cornerTop[0] > latitude)
                    cornerTop[0] = latitude;
                if (cornerTop[1] < longitude)
                    cornerTop[1] = longitude;
            }

            if (cornerBottom === null) {
                cornerBottom = [latitude, longitude];
            } else {
                if (cornerBottom[0] < latitude)
                    cornerBottom[0] = latitude;
                if (cornerBottom[1] > longitude)
                    cornerBottom[1] = longitude;
            }

            // mapbound.push([ data.latitude, data.longitude ]);

            this.markerlist.push(L.marker([latitude, longitude],
                // {icon:Icon}
            ).bindPopup(title + ` ${latitude}:${longitude}`).addTo(this.mapToShow));
        });

        center_lon /= data.length;
        center_lat /= data.length;

        let mapbound = L.latLngBounds(cornerTop, cornerBottom);
        // console.log(mapbound);

        // mapToShow.options.center = L.latLng([center_lat, center_lon]);
        // mapToShow.options.layers = markerlist;
        // mapToShow.options.
    }
}

export default LeafComponent