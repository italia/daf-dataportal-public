import React, { Component } from 'react'
import CsvDisplayer from '../components/CsvDisplayer/CsvDisplayer'

class Table extends Component {
    constructor(props) {
      super(props)
  
      this.state = {};
      
    }
 
      render() {
        const src = 'https://docs.google.com/spreadsheets/d/1PV2dpPmxydu4IoHoyEB3LaZduCZxeng5_CbC1Mr8C9U/export?format=csv&gid=734835459&single=true';
        return (
            <div className="u-layout-wide u-layoutCenter">
                <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                    <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Componente tabella</h2>
                </div>
                <div className="u-padding-top-xxl u-background-50"></div>
                <hr className="Separator Separator--up u-background-white" />
                <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                    <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl">
                        <div className="Grid Grid--withGutter">
                            <div className="Grid-cell u-md-size12of12 u-lg-size12of12 u-padding-right-xl">
                                <CsvDisplayer src={src}
                                    noHeader={false} type="table" showFoot={true}></CsvDisplayer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Table