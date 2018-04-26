import React from 'react';


class UserStoryHeader extends React.Component {

  constructor(props) {
    super(props);    
  }

  
  render() {

    let timestamp = this.props.story.timestamp;
    return (
      <div >
            <div className="text-center">

              {/* USER */}
              <div className="user-box text-left">
                <img className="user-img" src="/img/7.jpg"/>
                <span className="user-caption">
                  <h4>
                    {this.props.story.user}
                  </h4>
                  <span>
                    <h4>
                    {timestamp.dayOfMonth+"-"+timestamp.monthValue+"-"+timestamp.year+" "+timestamp.hour+":"+timestamp.minute}
                    </h4>
                  </span>
                </span>
              </div>

              <h1>{this.props.story.title}</h1>
              <h3 dangerouslySetInnerHTML={{__html: this.props.story.subtitle}}></h3> 

            </div>

            {/* USER BOX 
            <div>
              <div className="img-user">

              </div>
              <div className="inline-block">
                <div>
                  {this.props.story.user}
                </div>
                <div>
                  {this.props.story.role}
                </div>
              </div>
            </div>
            */}
        </div>
      );
  }
}

export default UserStoryHeader;
