import React from 'react';

// SERVICES
import DatasetService from '../../services/DatasetService';

const datasetService = new DatasetService();

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        //init state
        this.state = {
            text: ""
        };

    }

    render() {
        return (
            <div>
                <div>

                    <div className="u-background-50 u-textCenter u-padding-top-xxl">
                        <h2 className="u-layoutCenter u-text-r-l u-textWeight-300 u-color-white u-lineHeight-l" >
                            Scopri la bellezza e la ricchezza dei dati
                        </h2>
                        <p className="u-text-r-xs  u-color-10 u-layout-prose u-layoutCenter u-padding-r-left u-padding-r-right">
                            Assumenda consequatur cupiditate mollitia ullam cupiditate similique.
                            Quis excepturi fuga assumenda animi officiis eum delectus illo.
                        </p>
                    </div>
                </div>
                <div className="u-background-50 newsletter-wrapper">
                    <div className="Grid newsletter-background blue ov-hidden">
                        <div className="Grid-cell u-size1of2 left u-background-60"></div>
                        <div className="Grid-cell u-size1of2 right u-background-60"></div>
                    </div>
                    <div className="Grid newsletter-background grey ov-hidden">
                        <div className="Grid-cell u-size9of12 left u-background-white"></div>
                        <div className="Grid-cell u-size3of12 right u-background-white"></div>
                    </div>

                    <div className="u-textCenter u-padding-r-all u-textCenter">
                        <form className="Form u-padding-r-top u-md-size7of12 u-lg-size5of12 u-layoutCenter" >
                            <div className="Form-field Form-field--withPlaceholder Grid u-background-white u-color-grey-30 u-borderRadius-s u-borderShadow-xxl">
                                <button className="Grid-cell u-sizeFit Icon-search u-color-grey-40 u-text-r-m u-padding-all-s u-textWeight-400">
                                </button>
                                <input className="Form-input Form-input--ultraLean Grid-cell u-sizeFill u-text-r-s u-color-black u-text-r-xs u-borderHideFocus " required="" id="esplora" name="cerca" />
                                <label className="Form-label u-color-grey-50 u-padding-left-xxl" htmlFor="esplora">
                                    <span className="u-hidden u-md-inline u-lg-inline">
                                        cerca
                                    </span>
                                </label>
                                <button type="button" onClick={this.handleLoadDatasetClick} className="Grid-cell u-sizeFit u-background-60 u-color-white u-textWeight-600 u-padding-r-left u-padding-r-right u-textUppercase u-borderRadius-s">Esplora 3</button>
                            </div>
                        </form>
                        <div className="u-layoutCenter u-textCenter u-color-white">
                            <ul className="u-textCenter u-layoutCenter u-padding-r-all u-margin-top">
                                <li className="u-inlineBlock u-padding-right-xs u-padding-left-xs">
                                    <a href="#" title="" className="u-padding-all-xxs u-color-50 u-inlineBlock u-borderRadius-circle u-alignMiddle u-textWeight-600">Categoria 1</a>
                                </li>
                                <li className="u-inlineBlock u-padding-right-xs u-padding-left-xs">
                                    <a href="#" title="" className="u-padding-all-xxs u-color-50 u-inlineBlock u-borderRadius-circle u-alignMiddle u-textWeight-600">Categoria 2</a>
                                </li>
                                <li className="u-inlineBlock u-padding-right-xs u-padding-left-xs">
                                    <a href="#" title="" className="u-padding-all-xxs u-color-50 u-inlineBlock u-borderRadius-circle u-alignMiddle u-textWeight-600">Categoria 3</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
