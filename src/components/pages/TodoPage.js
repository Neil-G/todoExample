// @flow

import React, { Component } from 'react'
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
            <tr>
              <th>

              </th>
              <th>

              </th>
              <th>

              </th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.toJS()
  }
}

export default connect(mapStateToProps)(TodoPage)
