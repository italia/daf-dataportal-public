import React, {Component} from 'react';

class LegendPart extends Component {

	createStyle(color) {
		return {fill: color, stroke: color};
	}

	render() {
		let transform = "translate(0," + this.props.data.yLegend + ")";
		return (
			<g transform={transform}>
				<rect width="18" height="18" style={this.createStyle(this.props.data.F.color)}></rect>
				<rect width="18" height="18" style={this.createStyle(this.props.data.MF.color)}
					  transform="translate(20,0)"></rect>
				<text x="22" y="14" transform="translate(-140,0)">{this.props.data.label}</text>
			</g>
		);


	}
}

class Legend extends Component {
	createLegendPart(datum) {
		return <LegendPart data={datum} key={"label " + datum.label}/>;
	}

	createLegend(data) {
		return Object.keys(data).map((d) => this.createLegendPart(data[d]));
	}

	render() {
		return (
			<g>
				<text transform="translate(5,-8)">F</text>
				<text transform="translate(23,-8)">M</text>
				{this.createLegend(this.props.data)}
			</g>
		);
	}
}

export default Legend;
