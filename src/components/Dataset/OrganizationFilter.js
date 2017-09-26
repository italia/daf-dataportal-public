import React from 'react';

import { Link } from 'react-router-dom';

import OrganizationService from '../../services/OrganizationService';

const organizationService = new OrganizationService();

export default class OrganizationFilter extends React.Component {

    constructor(props) {
        super(props)

        this.state = props;
        let organization_filter = [];
        

        if (props.organization_filter)
            organization_filter = props.organization_filter;
        
        this.state = {
            organizations: [],
            organization_filter: organization_filter            
        };


        //init
        organizationService.list().then((list) => {
            this.setState({ organizations: list.result });
        });
    }

    enableGroup(id_organization) {
        this.state.organization_filter[id_organization] = !this.state.organization_filter[id_organization];
        this.setState({
            organization_filter: this.state.organization_filter
        });
        
        if (this.props.onSearch)
            this.props.onSearch(null, null, this.state.organization_filter);
    }

    render() {
        return (
            <ul className="Linklist Linklist--padded u-layout-prose u-text-r-xs category-list">

                {
                    this.state.organizations.map((organization, index) => {
                        return (
                        
                            <li key={index} className={"category-item " + (this.state.organization_filter[organization] == true ? "active" : "")} onClick={() => this.enableGroup(organization)}> 
                                <img src={"/img/organization/" + organization + (this.state.organization_filter[organization] == true ? "_blu" : "") + ".png"} />
                                {organization}
                            </li>




                        )
                    })
                }
            </ul>
        );
    }
}

