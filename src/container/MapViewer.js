import React, {Component} from 'react'

import mapmockup from '../data/mapmockup'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import L from 'leaflet';


const Lista = ({entries}) => <ol>
    <li style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
        {entries.map((entry) =>
            <a style={{margin: '10px'}} onClick={() => console.log(entry)}>
                {entry.name}
            </a>)}
    </li>
</ol>


class Mappa extends React.Component {

    render() {
        return (
                <div  style={{height: "500px", width: "100%"}} id="open_map"/>
        )
    }

    componentDidMount() {
        var mymap = L.map('open_map',{
            center:[45,11], zoom:5,layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            ],
        });

}}


// const Lista = () => <div className = "Grid Grid--withGutter text-left mt-40">Ciao</div>

class MapViewer extends Component {
    render() {
        console.log(mapmockup)
        return <div className="u-layout-wide u-layoutCenter">
            <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Visualizzatore di mappe</h2>
            </div>
            <div className="u-padding-top-xxl u-background-50"></div>
            <hr className="Separator Separator--up u-background-white"/>

            <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
                    <div >
                        <Mappa/>
                        <Lista entries={mapmockup}></Lista>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default MapViewer