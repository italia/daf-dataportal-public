import React, { Component } from 'react'
import { auth } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
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
                      <legend className="Form-legend">Informazioni anagrafiche</legend>

                      <div className="Form-field">
                          <label className="Form-label is-required" htmlFor="nome">Nome</label>
                          <input className="Form-input" id="nome" aria-required="true" required/>
                      </div>

                      <div className="Form-field">
                          <label className="Form-label is-required" htmlFor="cognome">Cognome</label>
                          <input className="Form-input" id="cognome" aria-required="true" required/>
                      </div>

                      <fieldset className="Form-field Form-field--choose Grid-cell">
                          <legend className="Form-legend is-required" htmlFor="sex1">Sesso</legend>
                          <label className="Form-label Form-label--block">
                      <input type="radio" className="Form-input" name="sex" aria-required="true" required/>
                      <span className="Form-fieldIcon" role="presentation"></span> M
                    </label>
                          <label className="Form-label Form-label--block">
                      <input type="radio" className="Form-input" name="sex" aria-required="true" required/>
                      <span className="Form-fieldIcon" role="presentation"></span> F
                    </label>
                      </fieldset>

                      <div className="Form-field">
                          <label className="Form-label" htmlFor="ddn">Data di nascita <small>(opzionale)</small></label>
                          <input type="text" className="Form-input" id="ddn" aria-describedby="info-ddn"/>
                          <div role="tooltip" id="info-ddn">nel formato GG/MM/ANNO</div>
                      </div>

                  </fieldset>

                  <fieldset className="Form-fieldset">
                      <legend className="Form-legend">Indirizzo del domicilio</legend>

                      <div className="Grid Grid--withGutter">
                          <div className="Grid-cell u-md-size8of12 u-lg-size8of12">
                              <div className="Form-field">
                                  <label className="Form-label is-required" htmlFor="citta">Città</label>
                                  <input className="Form-input" id="citta" aria-required="true" required/>
                              </div>
                          </div>

                          <div className="Grid-cell u-md-size4of12 u-lg-size4of12">
                              <div className="Form-field">
                                  <label className="Form-label is-required" htmlFor="provincia">Provincia</label>
                                  <select className="Form-input" id="provincia" aria-required="true" required>
                          <option disabled selected>seleziona</option>
                          <option>MO</option>
                          <option>MI</option>
                          <option>ME</option>
                          <option>MB</option>
                        </select>
                              </div>
                          </div>

                          <div className="Form-field Grid-cell u-md-size8of12 u-lg-size8of12">
                              <label className="Form-label is-required" htmlFor="via">Via</label>
                              <input className="Form-input is-disabled" disabled id="via"/>
                          </div>

                          <div className="Form-field Grid-cell u-md-size4of12 u-lg-size4of12">
                              <label className="Form-label is-required" htmlFor="cap">CAP</label>
                              <input className="Form-input" id="cap" aria-required="true" required/>
                          </div>
                      </div>
                  </fieldset>

                  <fieldset className="Form-fieldset">
                      <legend className="Form-legend">Altre informazioni</legend>

                      <fieldset className="Form-field Form-field--choose Grid-cell">
                          <legend className="Form-legend is-required">Voglio essere ricontattato</legend>
                          <label className="Form-label Form-label--block" htmlFor="contact1">
                      <input type="checkbox" className="Form-input" id="contact1" aria-required="true" required/>
                      <span className="Form-fieldIcon" role="presentation"></span> Via mail
                    </label>
                          <label className="Form-label is-required Form-label--block" htmlFor="contact2">
                      <input type="checkbox" className="Form-input" id="contact2" aria-required="true" required/>
                      <span className="Form-fieldIcon" role="presentation"></span> Per telefono
                    </label>
                      </fieldset>

                      <div className="Form-field Grid-cell u-size4of4">
                          <label className="Form-label" htmlFor="cap">Varie ed eventuali <small>(opzionale)</small></label>
                          <textarea className="Form-input Form-textarea"></textarea>
                      </div>
                  </fieldset>



                {
                    this.state.loginMessage &&
                    <div className="alert alert-danger" role="alert">
                      <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                      <span className="sr-only">Error:</span>
                      &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPassword} className="alert-link">Forgot Password?</a>
                    </div>
                  }
                <div className="Form-field Grid-cell u-textRight">
                    <button type="button" className="Button Button--default Button--shadow u-text-m" onClick={this.handleSubmit.bind(this)}>Registra</button>
                </div>
            </form>
          </div>
      </div>
      
    )
  }
}

/*
<div className="col-sm-6 col-sm-offset-3">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
*/