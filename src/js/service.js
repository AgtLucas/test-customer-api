'use strict'

/**
 * Customer Factory
 * Service to link API
 */
let CustomerFactory = function ($resource) {
  return $resource('http://tidy-api-test.herokuapp.com/api/v1/customer_data/:id', { id: '@id' }, {
    update: {
      method: 'PUT',
      isArray: false,
      headers: { 'Content-Type': 'application/json' }
    }
  })
}

export default CustomerFactory
