import React, {Component} from 'react';

import ControlRow from './ControlRow';

class Controls extends Component {
	state = {
		regioneFilter: () => true,
		regione: '*'
	};

	componentDidMount() {
		let regione = window.location.hash.replace('#', '').replace('_', ' ');

		if (regione !== '*' && regione) {
			this.updateRegioneFilter(regione);
		}
	}

	updateRegioneFilter(regione, reset) {
		let filter = (d) => d.regione === regione;
		if (reset || !regione) {
			filter = () => true;
			regione = '*';
		}

		this.setState({
			regioneFilter: filter,
			regione: regione
		});
	}

	componentDidUpdate() {
		window.location.hash = this.state.regione.replace(' ', '_') || '*';

		this.reportUpdateUpTheChain();
	}

	reportUpdateUpTheChain() {
		this.props.updateDataFilter(
			((filters) => {
				return (d) => filters.regioneFilter(d);
			})(this.state),
			{regione: this.state.regione});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}

	render() {
		const data = this.props.data;
		const regioni = new Set(data.map(d => d.regione));
		return (
			<div>
				<ControlRow data={data}
							toggleNames={Array.from(regioni.values())}
							picked={this.state.regione}
							updateDataFilter={this.updateRegioneFilter.bind(this)}/>
			</div>
		)
	}
}

export default Controls;
