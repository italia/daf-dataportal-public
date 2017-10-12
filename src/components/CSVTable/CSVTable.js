import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./CSVTable.css";

class CSVTable extends Component {
    constructor(props) {
        super(props);
        let elements = 20;
        if (props.rowsPerPage !== undefined && props.rowsPerPage > 0)
            elements = props.rowsPerPage;

        this.state = { 
            content: null,
            headers: null,
            viewableContent: null,
            filterText: "",
            selectValue: 0,
            realPage: 0,
            elementsPerPage: elements,
            startIndex: 0,
            endIndex: elements,
            pages: 0
        };
    }

    componentDidMount () {
        // Async data fetching
        this.getFileContent(this.props.src).then(response => {
            let elements = this.state.elementsPerPage;
            if (elements > response.content.length) {
                elements = response.content.length;
            }
            this.setState({
                content: response.content,
                headers: response.headers,
                viewableContent: response.content,
                elementsPerPage: elements
            });
        }).catch(error => {
            console.log(error);
        });
    }

    async getFileContent(path) {
        return fetch(path).then(response => response.text()).then(text => {
            // Parse CSV now
            let rows = text.split(/\r?\n/);
            let csv = [];
            let headers = []
            for (let i = 0; i < rows.length; i++) {
                if (rows[i] === "") continue;
                let fields = rows[i].split(this.props.separator);
                if (i === 0) {
                    headers = fields;
                } else {
                    let csvRow = [];
                    for (let field of fields) {
                        // Check field type so we can sort by real type
                        if (!isNaN(field))
                            field = Number(field);
                        csvRow.push(field);
                    }
                    csv.push(csvRow);
                }
            }
            return {
                "headers": headers,
                "content": csv
            };
        });
    }

    orderRowsWrapper (index, asc=true) {
        // Return comparator asc/desc by column index
        return function (a, b) {
            if (a[index] === b[index]) {
                return 0;
            }
            else {
                if (asc)
                    return (a[index] < b[index]) ? -1 : 1;
                else
                    return (a[index] > b[index]) ? -1 : 1;
            }
        }
    }

    orderRowsByField (index, asc) {
        let newContent = this.state.viewableContent.slice();
        newContent.sort(this.orderRowsWrapper(index, asc));
        this.setState({viewableContent: newContent.slice()});
    }

    changeFilterText (event) {
        // Propagate reactivity to state and filter rows again
        let text = event.target.value;
        this.setState({ filterText: text });
        this.filterRowsByText(text, this.state.selectValue);
    }

    filterRowsByText (text, index) {
        // Update rows by field and text
        let rows = this.state.content.slice();
        let viewableRows = []
        for (let row of rows) {
            let typeChange = false;
            // Convert Int to string to allow better searching function on string
            if (typeof(row[index]) === "number") {
                typeChange = true;
                row[index] = row[index].toString();
            }
            if (row[index].toLowerCase().includes(text.toLowerCase())) {
                // Return to number type
                if (typeChange)
                    row[index] = Number(row[index]);
                viewableRows.push(row);   
            }     
        }
        let page = this.state.realPage;
        if (this.state.realPage >= viewableRows.length / this.state.elementsPerPage)
            page = 0;
        let start = page * this.state.elementsPerPage;
        let end = start + parseInt(this.state.elementsPerPage);
        this.setState({ viewableContent: viewableRows, realPage: page, startIndex: start, endIndex: end });
    }

    changePage (event) {
        let page = event.target.value;
        if (page >= 0 && page < this.state.viewableContent.length)
            this.updateIndexes(this.state.elementsPerPage, event.target.value);
    }

    updateIndexes (elements, page) {
        if (page >= this.state.viewableContent.length / elements)
            page = 0;
        let start = page * elements;
        let end = start + parseInt(elements);
        this.setState({ realPage: page, elementsPerPage: elements, startIndex: start, endIndex: end })
    }

    changeElementsPerPage (event) {
        let elements = event.target.value;
        if (elements > 0 && elements <= this.state.viewableContent.length)
            this.updateIndexes(elements, this.state.realPage);
    }

    changeSelectValue (event) {
        // Propagate reactivity to state and filter rows again
        let value = event.target.value;
        this.setState({ selectValue: value });
        this.filterRowsByText(this.state.filterText, value); 
    }

    renderRow (row, index, header=false) {
        return (
            <tr key={index}>
                {row.map((content, index) => {
                    return (
                        <td key={index}>
                            {content}
                            {header ? 
                                // Displaying buttons for ordering rows by columns
                                <div>
                                    <button type="button" className="btn" onClick={() => this.orderRowsByField(index, true)}>&#8593;</button>
                                    <button type="button" className="btn" onClick={() => this.orderRowsByField(index, false)}>&#8595;</button>
                                </div>
                            : null}
                        </td>
                    );
                })}
            </tr>
        );
    }

    render() {
        if (this.state.viewableContent !== null) {
            let pages = [];
            for (let i = 0; i < (this.state.viewableContent.length / this.state.elementsPerPage); i++) {
                pages.push(i);
            }

            return (
                <div className="CSVTable__outer">
                    <div className="form-inline">
                        <label>Filter</label>
                        <select className="form-control" value={this.state.selectValue} onChange={this.changeSelectValue.bind(this)}>
                            {this.state.headers.map(function (value, index) {
                                return (
                                    <option key={index} value={index}>
                                        {value}
                                    </option>
                                );
                            })}
                        </select>
                         by 
                        <input type="text" className="form-control" value={this.state.filterText} onChange={this.changeFilterText.bind(this)}/>
                    </div>
                    
                    <div className="form-inline">
                        Page: 
                        <input type="number" className="form-control" value={this.state.realPage} onChange={this.changePage.bind(this)}/>
                         / {pages.length}
                    </div>
                    <div className="form-inline">
                        Elements per page: 
                        <input type="number" className="form-control" value={this.state.elementsPerPage} onChange={this.changeElementsPerPage.bind(this)}/>
                    </div>
                    <div className="CSVTable__overflowx">
                        <table className="table table-striped">
                            <thead>
                                {this.renderRow(this.state.headers, -1, true)}
                            </thead>
                            <tbody>
                                {   
                                    // Paginate results
                                    this.state.viewableContent.slice(this.state.startIndex, this.state.endIndex).map((value, index) => {
                                    return this.renderRow(value, index);
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
        else {
            return <div className="CSVTable__outer">Loading data from {this.props.src}</div>;
        }
            
    }
}

CSVTable.propTypes = {
    src: PropTypes.string,
    separator: PropTypes.string,
    rowsPerPage: PropTypes.number
}

export default CSVTable
