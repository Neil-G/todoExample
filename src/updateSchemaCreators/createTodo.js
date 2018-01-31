export default ({ title, description }) => {
  return {
    type: 'store',
    actions: {
      addATodoToTheStore: {
        location: ['todos', String(Math.random())],
        value: { title, description }
      }
    }
  }
}
