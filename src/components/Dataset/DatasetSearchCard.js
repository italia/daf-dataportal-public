import React from 'react';

import TitleSeparator from '../TitleSeparator/titleSeparator.js';
import DatasetBox from './DatasetBox.js';
import { Link } from 'react-router-dom';

export default class DatasetSearchCard extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="u-padding-left-xxl u-padding-top-xxl u-padding-bottom-xxl u-background-grey-10 u-color-grey-50 u-padding-right-xxl u-margin-bottom-l">
                <p className="u-padding-r-bottom">
                    <span className="Dot u-background-40"></span>
                    <a className="u-textClean u-textWeight-700 u-text-r-xs u-color-50 u-margin-right-s" href="#">xlsx</a>
                    <span className="Dot u-background-40"></span>
                    <a className="u-textClean u-textWeight-700 u-text-r-xs u-color-50 u-margin-right-s" href="#">shp</a>
                    <span className="Dot u-background-40"></span>
                    <a className="u-textClean u-textWeight-700 u-text-r-xs u-color-50 u-margin-right-s" href="#">wms</a>
                </p>
                <h3 className="u-padding-r-top u-padding-r-bottom">
                    <Link className="u-text-h4 u-textClean u-color-black" to={"/dataset/" + this.props.dataset.id}>
                        {this.props.dataset.resources[0].name}
                    </Link>
                </h3>
                <p className="u-lineHeight-l u-text-r-xs u-textSecondary u-padding-r-right  u-padding-r-bottom">
                    {this.props.dataset.resources[0].description}
                </p>
                <p><strong>Pubblicato da: </strong>{this.props.dataset.organization.title}</p>
                <p><strong>Data di ultima modifica: </strong>{this.props.dataset.organization.created}</p>
            </div>
        );
    }
}
