// @flow

import React, { Component } from 'react'
import mastermind from './../../mastermind'


class TodoPage extends Component {

  render() {

    const { todos } = this.props

    return (
      <div>
        <h1 className="placeholder-page-label"> Todo Page </h1>
        <table className="ui celled striped table todos-table">
          <thead>
            <tr>
              <th> Title </th>
              <th> Description </th>
              <th> Completed </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Get weird </td>
              <td> Lets get weird </td>
              <td> </td>
            </tr>

            {
              Object.keys(todos).map(id => {
                const todo = todos[id]
                const { title, description, isComplete } = todo
                return(
                  <tr key={id}>
                    <td> { title } </td>
                    <td> { description } </td>
                    <td> { isComplete } </td>
                  </tr>
                )
              })
            }
            
          </tbody>
        </table>
      </div>
    )
  }
}

export default mastermind.connectStore(TodoPage, ['todos'])
