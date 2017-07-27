import React, { Component } from 'react'
import { login, resetPassword } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    loginMessage: error
  }
}

export default class Login extends Component {
  state = { loginMessage: null }

  handleSubmit = (e) => {
    e.preventDefault()
    login(this.email.value, this.pw.value)
      .catch((error) => {
          this.setState(setErrorMsg('Invalid username/password.'))
        })
    console.log('login effettuato');
}

  resetPassword = () => {
    resetPassword(this.email.value)
      .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
      .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
  }

  render () {
    return (
      <div>
        <div className="u-background-50 u-layout-r-withGutter u-padding-top-xxl">
        </div>
        <div className="u-background-50 u-padding-top-xxl"></div>
        <hr className="Separator Separator--up u-background-white"/>
          <br/><br/>
          <div className="u-textCenter u-padding-r-all u-textCenter">
              <form className="Form Form--spaced u-padding-all-xl u-text-r-xs">
                <fieldset className="Form-fieldset">
                    <legend className="Form-legend">Login Utente</legend>
                    <div className="Form-field">
                        <input className="Form-input u-text-r-s u-borderRadius-m" id="email" aria-required="true" required ref={(email) => this.email = email} placeholder="Email"/>
                    </div>
                    <div className="Form-field">
                        <input type="password" className="Form-input u-text-r-s u-borderRadius-m" id="cognome" aria-required="true" ref={(pw) => this.pw = pw} required placeholder="Password" />
                    </div>
                </fieldset>
                <div className="Form-field Grid-cell u-size4of4">
                  <label className="Form-label" htmlFor="cap">Se non sei registrato <a href='/register'>Registrati qui.</a></label>
               </div>
                {
                    this.state.loginMessage &&
                    <div className="alert alert-danger" role="alert">
                      <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                      <span className="sr-only">Error:</span>
                      &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
                    </div>
                  }
                <div className="Form-field Grid-cell u-textRight">
                    <button type="button" className="Button Button--default Button--shadow u-text-m" onClick={this.handleSubmit.bind(this)}>Invia</button>
                </div>
            </form>
          </div>
      </div>
    )
  }
}