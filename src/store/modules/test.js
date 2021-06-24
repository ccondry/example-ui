import * as types from '../mutation-types'

const state = {
  test: null
}

const getters = {
  testData: state => state.test
}

const mutations = {
  [types.SET_TEST_DATA] (state, data) {
    state.test = data
  }
}

const actions = {
  async getTestData ({dispatch, getters}, showNotification = false) {
    // get test data from REST API
    dispatch('fetch', {
      group: 'test',
      type: 'get',
      url: getters.endpoints.test,
      mutation: types.SET_TEST_DATA,
      message: 'Get test data',
      showNotification
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
