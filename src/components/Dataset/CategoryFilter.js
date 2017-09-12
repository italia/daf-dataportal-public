import React from 'react';

import { Link } from 'react-router-dom';

import CategoryService from '../../services/CategoryService';

const categoryService = new CategoryService();

export default class CategoryFilter extends React.Component {

    constructor(props) {
        super(props)

        this.state = props;
        let category_filter = [];

        if (props.category_filter)
            category_filter = props.category_filter;

        this.state = {
            categories: [],
            category_filter: category_filter
        };


        //init
        categoryService.list().then((list) => {
            this.setState({ categories: list });
        });
    }

    enableCategory(id_category) {
        this.state.category_filter[id_category] = !this.state.category_filter[id_category];
        this.setState({
            category_filter: this.state.category_filter
        });
        
        if (this.props.onSearch)
            this.props.onSearch(this.state.category_filter);
    }

    render() {
        return (
            <ul className="Linklist Linklist--padded u-layout-prose u-text-r-xs category-list">

                {
                    this.state.categories.map((category, index) => {
                        return (
                            <li key={index} className={"category-item " + (this.state.category_filter[category.tag] == true ? "active" : "")} onClick={() => this.enableCategory(category.tag)}>
                                <img src={"/img/category/" + category.tag + (this.state.category_filter[category.tag] == true ? "_blu" : "") + ".png"} />
                                {category.name}
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

