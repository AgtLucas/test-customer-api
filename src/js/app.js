'use strict'

import angular from 'angular'
import ngResource from 'angular-resource'
import ngRouter from 'angular-ui-router'

import config from './config'
import CustomerFactory from './service'
import CustomerListCtrl from './controllers/CustomerListCtrl'
import CustomerViewCtrl from './controllers/CustomerViewCtrl'
import CustomerCreateCtrl from './controllers/CustomerCreateCtrl'
import CustomerEditCtrl from './controllers/CustomerEditCtrl'

// Styles
import styles from '../styles/main.styl'
styles

const app = angular.module('customerApp', [ngResource, ngRouter])

app.config(config).run(function ($state) {
  $state.go('customers')
})

app.factory('Customer', CustomerFactory)

app
  .controller('CustomerListController', CustomerListCtrl)
  .controller('CustomerViewController', CustomerViewCtrl)
  .controller('CustomerCreateController', CustomerCreateCtrl)
  .controller('CustomerEditController', CustomerEditCtrl)

app.run(['$rootScope', function ($rootScope) {
  $rootScope.viewCustomer = {}
}])
