import React from 'react';

import TitleSeparator from '../TitleSeparator/titleSeparator.js';
import TitleSeparatorVert from '../TitleSeparator/titleSeparatorVert.js';
import DashboardBox from './DashboardBox.js';
import DashboardBoxVertical from './DashboardBoxVertical.js';

class DashboardsContent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      title : "dashboards",
      subtitle : "Le nostre dashboard"
    };

    if (this.props.title)
      this.state.title = this.props.title;

    if (this.props.subtitle)
      this.state.subtitle = this.props.subtitle;

    if (this.props.dashboardView)
      this.state.dashboardView = this.props.dashboardView;

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dashboards: nextProps.dashboards
    });
  }

  render() {

    let dashList = [];

    // dashboardView indica se arrivo in questo Component dal dettaglio della singola dashboard
    // in questo caso devo far vedere le altre dashboards in verticale  
    if (this.state.dashboards && this.state.dashboardView) {
      dashList = this.state.dashboards.map((dashboard, key) => {
        if (key > 2) return;
        return (
         
          <DashboardBoxVertical key={key} dashboard={dashboard}>
          </DashboardBoxVertical>
         
        )
      });
    } else if (this.state.dashboards) {
      dashList = this.state.dashboards.map((dashboard, key) => {
        if (key > 2) return;
        return (
         
          <DashboardBox key={key} dashboard={dashboard}>
          </DashboardBox>
         
        )
      });

    }

    if (this.state.dashboards && this.state.dashboardView) {
      return (
      
          <div className = "Grid Grid--withGutter text-left mt-40">
            <TitleSeparatorVert text={this.state.subtitle} title={this.state.title} />
            {dashList}
          </div>
          
        );
    } else {

      return (
        
           <div className = "Grid Grid--withGutter text-left mt-40">
             <TitleSeparator text={this.state.subtitle} title={this.state.title} />
             {dashList}
           </div>
           
         );

    }
  }
}

export default DashboardsContent;
