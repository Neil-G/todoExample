// @flow

import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import mastermind from './../../mastermind'


class TodoPage extends Component {

  render() {

    return (
      <div>
        <h1 className="placeholder-page-label"> Todo Page </h1>
        <table className="ui celled striped table todos-table">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Description
              </th>
              <th>
                Completed
              </th>
            </tr>
            <tbody>
              <tr>
                <td>
                  Get weird
                </td>
                <td>
                  Let's get weird
                </td>
                <td>

                </td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>
    )
  }
}

export default mastermind.connectStore(TodoPage, ['todos'])
