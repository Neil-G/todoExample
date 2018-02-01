// @flow

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import mastermind from './../../mastermind'

class LoginPage extends Component {

  addLogin = (e) => {
    e.preventDefault()
    mastermind.update('addLogin', {
      email: this.refs['email-input'].value,
    })
    // redirect on successful login
    .then((res) => {
      // cont user = res.data.user
      this.props.history.push('/')
    })
  }

  render() {
    return(
      <div className="login-page">
        <form className="ui form login-form">
          <div className="field">
            <div className="ui left icon input">
              <input
                ref="email-input"
                type="email"
                placeholder="email..."/>
              <i className="mail outline icon" />
            </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <input
                  ref="password-input"
                  type="password"
                  placeholder="password..."/>
                <i className="lock icon" />
              </div>
            </div>
          <button
            className="ui button login-button full-width"
            onClick={ e => this.addLogin(e) }
          >
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default withRouter(LoginPage)
