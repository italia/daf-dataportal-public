import React from 'react';

import TitleSeparator from '../TitleSeparator/titleSeparator.js';
import DatasetBox from './DatasetBox.js';

class DatasetContent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataset: nextProps.dataset
    });
  }



  render() {

    let dataset = [];

    if (this.state.dataset) {
      dataset = this.state.dataset.result.results.map && this.state.dataset.result.results.map((dataset, key) => {
        // dataset = this.state.dataset.map && this.state.dataset.map((dataset, key) => {
        if (key > 2) return
        return <DatasetBox key={key} dataset={dataset}></DatasetBox>
      });
    }

    return (
      <div className="Grid Grid--withGutter text-left mt-40">
        <TitleSeparator text="I dati da noi raccolti" title="dataset" />
        {dataset}
      </div>
    );
  }
}

export default DatasetContent;
