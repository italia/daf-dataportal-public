import React from 'react';

import { Link } from 'react-router-dom';

import GroupService from '../../services/GroupService';

const groupService = new GroupService();

export default class GroupFilter extends React.Component {

    constructor(props) {
        super(props)

        this.state = props;
        let group_filter = [];
        

        if (props.group_filter)
            group_filter = props.group_filter;
        
        this.state = {
            groups: [],
            group_filter: group_filter            
        };


        //init
        groupService.list().then((list) => {
            this.setState({ groups: list });
        });
    }

    enableGroup(id_group) {
        this.state.group_filter[id_group] = !this.state.group_filter[id_group];
        this.setState({
            group_filter: this.state.group_filter
        });
        
        if (this.props.onSearch)
            this.props.onSearch(null, this.state.group_filter, null);
    }

    render() {
        return (
            <ul className="Linklist Linklist--padded u-layout-prose u-text-r-xs category-list">

                {
                    this.state.groups.map((group, index) => {
                        return (
                        
                            <li key={index} className={"category-item " + (this.state.group_filter[group.name] == true ? "active" : "")} onClick={() => this.enableGroup(group.name)}> 
                               {/*  <img src={"/img/group/" + group  + (this.state.group_filter[group] == true ? "_blu" : "") + ".png"} /> */}
                                {group.name}
                            </li>




                        )
                    })
                }
            </ul>
        );
    }
}

