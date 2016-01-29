'use strict'

let CustomerEditCtrl = ['$scope', '$rootScope', '$state', '$stateParams', 'Customer', function ($scope, $rootScope, $state, $stateParams, Customer) {
  $scope.updateCustomer = function () {
    $scope.customer.$update(function () {
      $state.go('customers')
    })
  }

  $scope.loadCustomer = function () {
    $scope.customer = Customer.query(function (data) {
      data.forEach(function (item, key) {
        if (item.id == $stateParams.id) {
          $scope.customer = item
        }
      })
    })
  }

  $scope.loadCustomer()
}]

export default CustomerEditCtrl
