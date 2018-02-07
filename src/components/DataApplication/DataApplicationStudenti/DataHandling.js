import * as d3 from 'd3';
import _ from 'lodash';

const selectData = (d) => ({
	GRUPPO_CORSO: d['GRUPPO_CORSO'],
	SEDE_CORSO_REGIONE: d['SEDE_CORSO_REGIONE'],
	REGIONE_RESIDENZA: d['REGIONE_RESIDENZA'],
	STUDENTI: Number(d['STUDENTI']),
	ID_SESSO: d['ID_SESSO']
});

const summarizeData = function (data, corso, regione) {
	let regioneCapital = regione.replace("-", " ").toUpperCase();
	return data.filter((d) => (d['GRUPPO_CORSO'] === corso))
		.reduce(function (result, d) {
				if (d['SEDE_CORSO_REGIONE'] === regione &&
					d['REGIONE_RESIDENZA'] !== regioneCapital) {
					if (d['ID_SESSO'] === 'F') {
						result.immigratiF += d['STUDENTI'];
					} else {
						result.immigratiM += d['STUDENTI'];
					}
				}
				if (d['SEDE_CORSO_REGIONE'] !== regione &&
					d['REGIONE_RESIDENZA'] === regioneCapital) {
					if (d['ID_SESSO'] === 'F') {
						result.emigratiF += d['STUDENTI'];
					} else {
						result.emigratiM += d['STUDENTI'];
					}
				}
				if (d['SEDE_CORSO_REGIONE'] === regione &&
					d['REGIONE_RESIDENZA'] === regioneCapital) {
					if (d['ID_SESSO'] === 'F') {
						result.inSedeF += d['STUDENTI'];
					} else {
						result.inSedeM += d['STUDENTI'];
					}
				}

				return result;
			}, {
				regione: regione,
				corso: corso,
				immigratiM: 0,
				immigratiF: 0,
				emigratiM: 0,
				emigratiF: 0,
				inSedeF: 0,
				inSedeM: 0
			}
		);
};

export const loadData = (callback = _.noop) => {

	d3.text('data/file02_2015-16_provenienze.csv', function (error, raw) {
		let data = d3.dsvFormat(";").parse(raw, selectData);
		let corsi = [...new Set(data.map(d => d['GRUPPO_CORSO']))];
		let regioni = [...new Set(data.map(d => d['SEDE_CORSO_REGIONE']))];
		let conteggi = regioni
			.reduce((result, regione) => {
				corsi.map((corso) => (result.push(summarizeData(data, corso, regione))));
				return result;
			}, []);
		callback({
			conteggi: conteggi
		});
	});
};
