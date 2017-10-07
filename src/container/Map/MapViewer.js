import React, {Component} from 'react'

import mapmockup from '../../data/mapmockup'
import MapsList from "./MapsList";
import LeafComponent from "./LeafComponent";
import PointsList from "./PointsList";

class MapViewer extends Component {
    constructor() {
        super()
        this.state = {
            data: [],
            name: "",
            selectedPoint: null
        }
        this.handleMapClick = this.handleMapClick.bind(this)
        this.handlePointClick = this.handlePointClick.bind(this)
    }

    handleMapClick = (data, name) => this.setState({
        ...this.state,
        selectedPoint: null,
        data: data,
        name: name
    })

    //todo: controllare al click del punto cosa succede alla mappa

    handlePointClick = point => {
        return this.state = {
            ...this.state,
            selectedPoint: point
        };
    }

    render() {
        return <div className="u-layout-wide u-layoutCenter">
            <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Visualizzatore di Mappe</h2>
            </div>
            <div className="u-padding-top-xxl u-background-50"></div>
            <hr className="Separator Separator--up u-background-white"/>

            <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
                    <div style={{display: "flex"}}>
                        <MapsList maps={mapmockup} onMapClick={this.handleMapClick}
                                  selectedPoint={this.state.selectedPoint}/>
                        <LeafComponent data={this.state.data} selectedPoint={this.state.selectedPoint}/>
                        <PointsList title={this.state.name} points={this.state.data}
                                    onPointClick={this.handlePointClick}/>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default MapViewer