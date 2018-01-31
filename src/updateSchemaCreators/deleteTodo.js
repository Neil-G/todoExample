export default (id) => {
  return {
    type: 'store',
    actions: {
      removeTodoFromStore: {
        location: ['todos', id ]
      }
    }
  }
}
