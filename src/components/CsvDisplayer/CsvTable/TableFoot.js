import React, {Component} from 'react'

export default class TableFoot extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {foot} = this.props;
        return (
            <tfoot>
                <tr>
                    {
                        Array.isArray(foot) && foot.map(
                            (header, index) => <th className="u-border-bottom-xs" key={index}>{header}</th>
                        )
                    }
                </tr>
            </tfoot>
        );
    }
}