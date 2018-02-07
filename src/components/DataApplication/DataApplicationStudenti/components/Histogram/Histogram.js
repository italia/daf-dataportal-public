import React, {Component} from 'react';
import * as d3 from 'd3';


const HistogramBar = ({value, x, y, width, height, color, type, textAnchor, textPosition}) => {
	let textX = null;
	if (type === "RL") {
		x = x - width;
	}
	if (textPosition === "L" && type === "RL") {
		textX = x + width;
	}
	if (textPosition === "R" && type === "LR") {
		textX = x + width;
	}
	if (textAnchor === "start") {
		textX += 6;
	} else if (textAnchor === "end") {
		textX -= 6;
	}

	let transform = `translate(${x}, ${y})`;
	if (textAnchor !== null) {
		return (
			<g transform={transform} className="bar">
				<rect width={width}
					  height={height - 2}
					  transform="translate(0, 1)"
					  style={{fill: color}}>
				</rect>
				<text textAnchor={textAnchor}
					  x={textX}
					  y={height / 2 + 3}>
					{value}
				</text>
			</g>
		);
	} else {
		return (
			<g transform={transform} className="bar">
				<rect width={width}
					  height={height - 2}
					  transform="translate(0, 1)"
					  style={{fill: color}}>
				</rect>
			</g>
		);
	}
}

class Histogram extends Component {
	constructor(props) {
		super();

		this.xScale = d3.scaleLinear();

		this.yScale = d3.scaleBand();

		this.updateD3(props);
	}

	componentWillReceiveProps(newProps) {
		this.updateD3(newProps);
	}

	updateD3(props) {

		this.xData = props.xData;
		this.yData = props.yData;
		this.xScale
			.range([0, props.width])
			.domain(d3.extent(props.xExtent)).nice();
		this.yScale
			.range([0, props.height])
			.round(0.1)
			.domain(props.yData);
	}

	makeBar(i) {
		let value = this.xData[i];
		let x = 0;
		let y = this.yScale(this.yData[i]);

		let props = {
			value: value,
			x: x,
			y: y,
			width: Math.abs(this.xScale(value) - this.xScale(0)),
			height: 27,//this.yScale.range()[1],
			color: this.props.color,
			type: this.props.type,
			textAnchor: this.props.textAnchor,
			textPosition: this.props.textPosition,
			key: "histogram-bar-" + i
		};

		return (
			<HistogramBar {...props} />
		);
	}

	render() {
		const translate = `translate(${this.props.x}, ${this.props.y})`;

		return (
			<g className="histogram" transform={translate}>
				<g className="bars">

					{this.yData.map((d, i) => {
						return this.makeBar(i);
					})}

				</g>
			</g>
		);
	}
}


export default Histogram;
