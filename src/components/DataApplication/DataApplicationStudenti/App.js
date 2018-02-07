import React, {Component} from 'react';

//import './style.css';

import Controls from './components/Controls';

import {Title, Images, Legend} from './components/Meta';

import Histogram from './components/Histogram';

import {loadData} from './DataHandling';

import * as d3 from 'd3';

class App extends Component {
	state = {
		conteggi: [],
		conteggiFilter: () => true,
		filteredBy: {
			regione: '*'
		}
	};

	componentWillMount() {
		loadData(data => this.setState(data));
	}

	shouldComponentUpdate(nextProps, nextState) {
		const {conteggi, filteredBy} = this.state;

		return (conteggi && conteggi.length) !== (nextState.conteggi && nextState.conteggi.length)
			|| Object.keys(filteredBy).some(k => filteredBy[k] !== nextState.filteredBy[k]);
	}

	updateDataFilter(filter, filteredBy) {
		this.setState({
			conteggiFilter: filter,
			filteredBy: filteredBy
		});
	}

	render() {
		if (this.state.filteredBy.regione === '*') {
			return (
				<div className="DataApp">
					<Title filteredBy={this.state.filteredBy}/>
					<Controls data={this.state.conteggi} updateDataFilter={this.updateDataFilter.bind(this)}/>
				</div>
			);
		}

		const filteredConteggi = this.state.conteggi.filter(this.state.conteggiFilter);
		const corsi = [...new Set(filteredConteggi.map((d) => d.corso)).values()];

		const emigrati = filteredConteggi.map((d) => d.emigratiM + d.emigratiF);
		const emigratiF = filteredConteggi.map((d) => d.emigratiF);
		const inSedePiuImmigrati = filteredConteggi.map((d) => d.immigratiM + d.immigratiF + d.inSedeF + d.inSedeM);
		const inSedeFPiuImmigrati = filteredConteggi.map((d) => d.immigratiM + d.immigratiF + d.inSedeF);
		const immigrati = filteredConteggi.map((d) => d.immigratiM + d.immigratiF);
		const immigratiF = filteredConteggi.map((d) => d.immigratiF);

		let width = 1100,
			height = 525,
			xMin = d3.max(emigrati),
			xMax = d3.max(inSedePiuImmigrati),
			ratio = (width - 500) / (xMax + xMin + 500),
			xHistogram = 300 + xMin * ratio,
			yHistogram = 10;

		const propsStudenti = {
			immigrati: {
				label: 'studenti immigrati',
				type: 'LR',
				xExtent: [0, xMax],
				F: {
					color: 'darkblue',
					textAnchor: null,
					textPosition: null
				},
				MF: {
					color: 'steelblue',
					textAnchor: 'end',
					textPosition: 'L'
				},
				yLegend: 0
			},
			emigrati: {
				label: 'studenti emigrati',
				type: 'RL',
				xExtent: [-xMin, 0],
				F: {
					color: 'darkred',
					textAnchor: null,
					textPosition: null
				},
				MF: {
					color: 'firebrick',
					textAnchor: 'end',
					textPosition: 'L'
				},
				yLegend: 22
			},
			inSedePiuImmigrati: {
				label: 'studenti in sede',
				type: 'LR',
				xExtent: [0, xMax],
				F: {
					color: 'tan',
					textAnchor: null,
					textPosition: null
				},
				MF: {
					color: 'wheat',
					textAnchor: 'start',
					textPosition: 'R'
				},
				yLegend: 44
			}
		};

		const paramsHistogram = function (h, sex) {
			return ({
					width: (propsStudenti[h].xExtent[1] - propsStudenti[h].xExtent[0]) * ratio,
					height: height,
					axisMargin: 83,
					bottomMargin: 5,
					color: propsStudenti[h][sex].color,
					type: propsStudenti[h].type,
					textAnchor: propsStudenti[h][sex].textAnchor,
					textPosition: propsStudenti[h][sex].textPosition,
					xExtent: propsStudenti[h].xExtent
				}
			);
		};

		let style = {textAlign: 'center'};
		let regioneSvg = "Regione_thumb_" + this.state.filteredBy.regione.replace(" ", "_") + ".svg";

		let transform = `translate(${xHistogram - 150}, ${yHistogram})`;
		return (
			<div className="DataApp container">
				<Title filteredBy={this.state.filteredBy}/>
				<div style={style}>
					<Images files={['arrow_west_red.svg', regioneSvg, 'arrow_west_blue.svg']}/>
					<svg width="200" height="100">
						<g transform={"translate(150,20)"}>
							<Legend data={propsStudenti}/>
						</g>
					</svg>
				</div>

				<svg width={width} height={height}>

					<Histogram {...paramsHistogram('inSedePiuImmigrati', 'MF')} x={xHistogram} y={yHistogram}
							   xData={inSedePiuImmigrati} yData={corsi}/>
					<Histogram {...paramsHistogram('inSedePiuImmigrati', 'F')} x={xHistogram} y={yHistogram}
							   xData={inSedeFPiuImmigrati} yData={corsi}/>

					<Histogram {...paramsHistogram('immigrati', 'MF')} x={xHistogram} y={yHistogram}
							   xData={immigrati} yData={corsi}/>
					<Histogram {...paramsHistogram('immigrati', 'F')} x={xHistogram} y={yHistogram}
							   xData={immigratiF} yData={corsi}/>

					<Histogram {...paramsHistogram('emigrati', 'MF')} x={xHistogram - 250} y={yHistogram}
							   xData={emigrati} yData={corsi}/>
					<Histogram {...paramsHistogram('emigrati', 'F')} x={xHistogram - 250} y={yHistogram}
							   xData={emigratiF} yData={corsi}/>

					<g transform={transform} className="barLegend">

						{corsi.map((d, i) => {
							return <text textAnchor="middle" x={0} y={-10 + (i + 1) * height / 16.14}
										 key={"bar-" + i}>{d}</text>
						})}

					</g>
				</svg>
				<Controls data={this.state.conteggi} updateDataFilter={this.updateDataFilter.bind(this)}/>
			</div>
		);
	}
}

export default App;
