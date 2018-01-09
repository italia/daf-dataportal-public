import React from 'react';


class DashboardHeader extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    let timestamp = this.props.dashboard.timestamp;
    return (
      <div >
        <div className="text-center">

          {/* USER */}
          <div className="user-box text-left">
            <img className="user-img" src="/img/7.jpg" />
            <span className="user-caption">
              <h4>
                {this.props.dashboard.user}
              </h4>
              <span>
                <h4>
                  {timestamp.dayOfMonth + "-" + timestamp.monthValue + "-" + timestamp.year + " " + timestamp.hour + ":" + timestamp.minute}
                </h4>
              </span>
            </span>
          </div>

          <h1>{this.props.dashboard.title}</h1>
          <h3 dangerouslySetInnerHTML={{ __html: this.props.dashboard.subtitle }}></h3>

        </div>
      </div>
    );
  }
}

export default DashboardHeader;
