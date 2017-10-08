import React, { Component } from 'react'
import CsvDisplayer from '../components/CsvDisplayer/CsvDisplayer'

class Map extends Component {
    constructor(props) {
      super(props)
  
      this.state = {};
      
    }
 
      render() {
        const src = 'https://docs.google.com/spreadsheets/d/1PV2dpPmxydu4IoHoyEB3LaZduCZxeng5_CbC1Mr8C9U/export?format=csv&gid=734835459&single=true';
        return (
            <div className="u-layout-wide u-layoutCenter">
                <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                    <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Componente mappa</h2>
                </div>
                <div className="u-padding-top-xxl u-background-50"></div>
                <hr className="Separator Separator--up u-background-white" />
                <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                    <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
                        <div className="Grid Grid--withGutter">
                        <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl u-margin-r-top">  
                                <h2>Visualizzazione componente mappa senza dettaglio</h2>
                                <span>Clicca su un marker per vedere la descrizione apparire nel popup</span>
                        </div>
                        <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl u-margin-r-top">
                            <CsvDisplayer src={src}
                                    latFieldName='Lat' longFieldName='Lon' noheader={false} dataColumnName="Luogo"
                                    type="map"  zoom="18" center={[40.36135,18.18825]}></CsvDisplayer>   
                            </div>

                        
                        <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl u-margin-r-top">  
                                <h2>Visualizzazione componente mappa con dettaglio</h2>
                                <span>Clicca su un marker per vederne il dettaglio</span>
                        </div>
                        <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl u-margin-r-top">
                        <CsvDisplayer src={src}
                                    latFieldName='Lat' longFieldName='Lon' noheader={false} dataColumnName="Luogo"
                                    type="map"  zoom="18" center={[40.36135,18.18825]} showDetail={true}></CsvDisplayer>       
                        </div>    
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Map