'use strict'

export default function ($stateProvider) {
  $stateProvider.state('customers', {
    url: '/customers',
    templateUrl: 'src/partials/customers.html',
    controller: 'CustomerListController'
  }).state('viewCustomer', {
    url: '/customers/view',
    templateUrl: 'src/partials/customer-view.html',
    controller: 'CustomerViewController'
  }).state('newCustomer', {
    url: '/customers/new',
    templateUrl: 'src/partials/customer-add.html',
    controller: 'CustomerCreateController'
  }).state('editCustomer', {
    url: '/customers/:id/edit',
    templateUrl: 'src/partials/customer-edit.html',
    controller: 'CustomerEditController'
  })
}
