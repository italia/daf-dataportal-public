import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class HeaderSearch extends React.Component {

	constructor(props) {
		super(props);
		this.props = props;
		this.state = {
			text: "",
			// category_filter: {},
			// isCategoryEnabled: false,
			// group_filter: {},
			// organization_filter: {}
		}

		this.searchDataset = this.searchDataset.bind(this);
	}

	searchDataset(event) {
		event.preventDefault();
		let path = '/dataset/search';
		this.props.history.push(path, {
			query: this.refs.ricerca.value,
			// category: this.state.category_filter,
			// isCategoryEnabled: this.state.isCategoryEnabled,
			// group: this.state.group_filter,
			// organization: this.state.organization_filter
		});

	}

	render() {
		if (window.location.pathname != '/' && window.location.pathname != '/dataset/search') {
			return (
				<div className="Header-search " id="header-search">
					<form className="Form">
						<div className="Form-field Form-field--withPlaceholder Grid u-background-white u-color-grey-30 u-borderRadius-s">
							<input ref="ricerca" className="Form-input Form-input--ultraLean Grid-cell u-sizeFill u-text-r-s u-color-black u-text-r-xs u-borderRadius-s"
								required id="cerca" />
							<label className="Form-label u-color-grey-50 u-text-r-xxs" htmlFor="cerca">{this.state.text ? this.state.text : "cerca nei dataset"}</label>
							<button type="submit" className="Grid-cell u-sizeFit Icon-search Icon--rotated u-color-grey-50 u-padding-all-s u-textWeight-700" onClick={this.searchDataset} title="Avvia la ricerca" aria-label="Avvia la ricerca">
							</button>
						</div>
					</form>
				</div>
			);
		} else {
			return null;
		}
	}
}

const Headersearch = withRouter(HeaderSearch);
export default Headersearch;