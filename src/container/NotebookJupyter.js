import React, { Component } from 'react'
import Jupyter from 'react-jupyter'

class NotebookJupyter extends Component {
    constructor(props) {
      super(props)
      super(props)
      this.state = {notebookJSON: undefined}
      //this.load('https://raw.githubusercontent.com/mariaclaudia/daf-data-science/master/mise_aiuti/DAF_MEF_DatiAiutiMise_EDA.ipynb');
      this.load(decodeURIComponent(props.match.params.ref))
    }

    load(url){
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setNotebookJson(json)
            }).catch((error) => {console.log('error: ' + error)})
    }
    setNotebookJson(json){
        this.setState({ notebookJSON: json });
    }

      render() {
        return (
			<div className="u-layout-wide u-layoutCenter">
                <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
                    <h2 className="u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l">Notebook Jupyter</h2>
                </div>
                <div className="u-padding-top-xxl u-background-50"></div>
                <hr className="Separator Separator--up u-background-white" />
                <div className="u-background-white u-layout-r-withGutter u-posRelative u-zindex-30">
                    <div className="u-layout-wide u-layoutCenter u-layout-withGutter u-padding-r-top u-padding-bottom-xxl u-padding-left-xxl">
                        <div className="Grid">
                            <div className="Grid-cell u-sizeFull u-md-size10of12 u-lg-size10of12">
                                <article className="Prose">
                                    {this.state.notebookJSON &&
                                        <Jupyter 
                                            notebook={this.state.notebookJSON}
                                            showCode={true} // optional
                                            defaultStyle={true} // optional
                                            loadMathjax={true} // optional
                                        />
                                    }
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotebookJupyter