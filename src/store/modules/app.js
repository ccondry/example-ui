import * as types from '../mutation-types'
import {version} from '../../../package.json'

const state = {
  isProduction: process.env.NODE_ENV === 'production',
  uiVersion: version,
  apiVersion: 'Loading...'
}

const getters = {
  isProduction: state => state.isProduction,
  uiVersion: state => state.uiVersion,
  apiVersion: state => state.apiVersion
}

const mutations = {
  [types.SET_VERSION] (state, data) {
    state.apiVersion = data.version
  }
}

const actions = {
  async getVersion ({dispatch, getters}) {
    // get REST API version info
    dispatch('fetch', {
      group: 'app',
      type: 'version',
      url: getters.endpoints.version,
      mutation: types.SET_VERSION,
      message: 'Load REST API version',
      showNotification: false
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
