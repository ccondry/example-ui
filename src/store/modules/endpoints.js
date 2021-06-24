const getters = {
  endpoints: (state, getters) => {
    let urlBase
    if (getters.isProduction) {
      // production URL
      urlBase = '/api/v1'
    } else {
      // development URL
      urlBase = 'http://localhost:4000/api/v1'
    }
    return {
      // URLs on the REST API
      // get test data
      test: `${urlBase}/test`,
      // get REST API version info
      version: `${urlBase}/version`
    }
  },
  defaultRestOptions: (state, getters) => {
    // these default REST API options will be used for all requests, unless
    // overridden in the fetch options
    // use this for login tokens, if you are using them
    return {
      headers: {
        // Authorization: 'Bearer ' + getters.jwt
      }
    }
  }
}

export default {
  getters
}