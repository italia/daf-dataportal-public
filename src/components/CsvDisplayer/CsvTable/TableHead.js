import React, { Component } from 'react'

export default class TableHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: []
        };
    }

    componentDidMount() {
       
    }

    render() {
        const {headers} = this.props;
        return (
            <thead>
                <tr>
                    {
                        Array.isArray(headers) &&  headers.map((header, index) => 
                            <th className="u-border-bottom-xs" key={index}>{header}</th>
                        )
                    }
                </tr>
            </thead>
        );
    }
}