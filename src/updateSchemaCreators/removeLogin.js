export default () => {
  return {
    type: 'store',
    actions: {
      removeLoginFromStore: {
        location: [ 'auth', 'user' ]
      }
    }
  }
}
