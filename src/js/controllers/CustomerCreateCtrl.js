'use strict'

let CustomerCreateCtrl = ['$scope', '$state', '$stateParams', 'Customer', function ($scope, $state, $stateParams, Customer) {
  $scope.customer = new Customer()

  $scope.addCustomer = function () {
    $scope.customer.$save(function () {
      $state.go('customers')
    })
  }
}]

export default CustomerCreateCtrl
