export const user = {
  state: {
    userData: {
      username: 'tester',
      id: 121212
    }
  },

  getters: {
    userData(state) {
      return state.userData
    }
  }
}

