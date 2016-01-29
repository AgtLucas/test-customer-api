'use strict'

let CustomerListCtrl = ['$scope', '$rootScope', '$state', '$window', 'Customer', function ($scope, $rootScope, $state, $window, Customer) {
  $scope.customers = Customer.query()

  $scope.deleteCustomer = function (customer) {
    if (window.confirm('Are you sure you wanna delete this?')) {
      customer.$delete(function () {
        $window.location.href = ''
      })
    }
  }

  $scope.getView = function (customer) {
    $rootScope.viewCustomer = customer
    window.location.href = '/#/customers/view'
  }
}]

export default CustomerListCtrl
