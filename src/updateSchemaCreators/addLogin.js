export default ({ email }) => {
  return {
    type: 'store',
    actions: {
      addLoginToStore: {
        location: [ 'auth', 'user' ],
        value: { email }
      }
    }
  }
}
