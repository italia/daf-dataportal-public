import React, {Component} from 'react';

class Title extends Component {
	get regioneFragment() {
		const regione = this.props.filteredBy.regione;

		if (regione !== '*')
			return `${regione} - `;
	}

	render() {
		let title;
		title = (
			<h2>
				Flusso regionale degli studenti di Ateneo<br/>{this.regioneFragment} A.A. 2015/2016
			</h2>
		);

		return title;
	}
}

export default Title;
