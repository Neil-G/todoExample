// @flow

import React, { Component } from 'react'
import mastermind from './../../mastermind'



class TodoPage extends Component {

  createTodo = (e) => {
    e.preventDefault()
    mastermind.update('createTodo', {
      title: this.refs.title.value,
      description: this.refs.description.value
    })

    this.refs.title.value = ""
    this.refs.description.value = ""
  }

  deleteTodo = (id) => {
    mastermind.update('deleteTodo', id)
  }

  render() {

    const { todos } = this.props;

    return (
      <div style={{ padding: '36px' }}>
        <h1 className="placeholder-page-label"> Todo Page </h1>

        <form className="ui form">
          <input type="text" ref="title" />
          <input type="text" ref="description" />
          <button className="ui button" onClick={ e => this.createTodo(e) }>create todo</button>
        </form>

        <table className="ui celled striped table todos-table">
          <thead>
            <tr>
              <th> Title </th>
              <th> Description </th>
              <th> Completed </th>
              <th> Delete </th>
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
                    <td onClick={() => this.deleteTodo(id) }> click to delete </td>
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
