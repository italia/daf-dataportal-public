import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest';
import categoriesFile from '../../data/categories.js'
import Autocomplete from 'react-autocomplete'
import { serviceurl } from '../../config/serviceurl.js'

class AutocompleteDataset extends Component {

  state = {
    value: this.props.value,
    suggestions: [],
  }

  loadCkanSuggestion(newValue) {  
    var that = this;
    var token = '';
    // FILTER BY ORGANIZATION    
    var url = serviceurl.apiCKAN + '/package_search?q=name:' + newValue + '*';
    var org = localStorage.getItem('organization')
    if(org!='daf')
        url = url + "%20AND%20(organization:"+org+")"
    
    if(localStorage.getItem('username') && localStorage.getItem('token') &&
      localStorage.getItem('username') != 'null' && localStorage.getItem('token') != 'null'){
        token = localStorage.getItem('token')
      }
      return fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).then(response => response.json())
        .then(json => this.receiveAutocomplete(json))
  }

  receiveAutocomplete(json){
    this.setState({ suggestions: json.result.results });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Inserisci criteri di ricerca",
      value,
      onChange: this.onChange
    };

    return (
      <Autocomplete
        inputProps={{ id: 'states-autocomplete' }}
        wrapperStyle={{ position: 'relative', display: 'inline-block', width: '70%' }}
        value={this.state.value}
        items={this.state.suggestions}
        getItemValue={(item) => item.name}
        onSelect={(value, item) => {
          // set the menu to only the selected item
          this.setState({ value, suggestions: [ item ] })
          // or you could reset it to a default list again
          // this.setState({ suggestions: getStates() })
        }}
        onChange={(event, value) => {
          this.setState({ value })
          if(value!=='')
              this.loadCkanSuggestion(value); 
          else this.setState({ suggestions: [] });
        }}
        renderMenu={children => (
          <div className="menu">
            {children}
          </div>
        )}
        renderItem={(item, isHighlighted) => (
          <div className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
            key={item.name}
          >{item.name}</div>
        )}
      />

    );
  }
}

export default AutocompleteDataset

