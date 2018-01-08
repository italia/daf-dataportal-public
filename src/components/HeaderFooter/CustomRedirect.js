import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class CustomRedirect extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.redirect = this.redirect.bind(this);
  }

  redirect(event) {
    event.preventDefault();
    console.log('custom redirect')
    this.props.history.push(this.props.to);
  }

  secondaryBehaviour(secondaryAction) {
    secondaryAction
    this.redirect
  }

  render() {
    return (<a href="#" onClick={this.redirect} title="Avvia la ricerca" aria-label="Redirect" className={this.props.linkStyle}>{this.props.label}</a>)         
  }
}

const Customredirect = withRouter(CustomRedirect);
export default Customredirect;