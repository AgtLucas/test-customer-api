'use strict'

let CustomerViewCtrl = ['$http', '$rootScope', '$scope', '$stateParams', 'Customer', function ($http, $rootScope, $scope, $stateParams, Customer) {
  $scope.customer = $scope.viewCustomer
}]

export default CustomerViewCtrl
