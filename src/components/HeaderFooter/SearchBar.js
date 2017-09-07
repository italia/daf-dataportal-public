import React from 'react';
import { Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//import { browserHistory } from 'react-router';
import {
    createBrowserHistory,
    createHashHistory,
    createMemoryHistory
  } from 'history'

// SERVICES
import DatasetService from '../../services/DatasetService';
import CategoryService from '../../services/CategoryService';

const datasetService = new DatasetService();
const categoryService = new CategoryService();

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        //init state
        this.state = {
            text: "",
            category_filter: {}
        };

        // bind function    
        this.searchDataset = this.searchDataset.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleCategory = this.toggleCategory.bind(this)
        this.enableCategory = this.enableCategory.bind(this)

        //init
        categoryService.list().then((list) => {
            this.setState({categories: list});
        });
    }

    searchDataset(){
        let path = '/dataset/search';
        
        this.props.history.push(path, {
            query: this.state.text,
            category: this.state.category_filter
        });
        
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    toggleCategory(event) {
        event.preventDefault();
        this.setState({showCategory: !this.state.showCategory});
    }

    enableCategory(id_category) {
        this.state.category_filter[id_category] = !this.state.category_filter[id_category];
        this.setState({
            category_filter: this.state.category_filter
        })
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
                                <input value={this.state.text} onChange={this.handleChange} className="Form-input Form-input--ultraLean Grid-cell u-sizeFill u-text-r-s u-color-black u-text-r-xs u-borderHideFocus " required="" id="esplora" name="cerca" />
                                <label className="Form-label u-color-grey-50 u-padding-left-xxl" htmlFor="esplora">
                                    <span className="u-hidden u-md-inline u-lg-inline">
                                        cerca
                                    </span>
                                </label>
                                <button type="button" onClick={this.searchDataset} className="Grid-cell u-sizeFit u-background-60 u-color-white u-textWeight-600 u-padding-r-left u-padding-r-right u-textUppercase u-borderRadius-s">
                                    Esplora
                                </button>
                            </div>
                        </form>
                        <div className="u-layoutCenter u-textCenter u-color-white">
                            <ul className="u-textCenter u-layoutCenter u-padding-r-all u-margin-top">
                                <li className="u-inlineBlock u-padding-right-xs u-padding-left-xs">
                                    <a onClick={this.toggleCategory} href="#" title="" className="u-padding-all-xxs u-color-50 u-inlineBlock u-borderRadius-circle u-alignMiddle u-textWeight-600">
                                        {
                                            !this.state.showCategory &&
                                            <span className="Icon Icon-drop-up mr-20" ></span>
                                        }
                                        {
                                            this.state.showCategory &&
                                            <span className="Icon Icon-drop-down mr-20" ></span>
                                        }
                                        Filtra per Categoria
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        {
                            this.state.showCategory &&
                            <div>
                                <div className="category-box row">
                                    {
                                        this.state.categories.map((category, index) => { return (
                                            <div key={index} className="col-sm-6">
                                                <div className={"category-item " + (this.state.category_filter[category.id]==true ? "active": "") } onClick={() => this.enableCategory(category.id)}>
                                                    <img src={"img/category/" + category.id + (this.state.category_filter[category.id]==true ? "_blu": "") + ".png"} />
                                                    {category.name}
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}
