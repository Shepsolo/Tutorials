/**
 * Created by James on 3/1/14.
 */
var app = angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login',{
                url: '/login',
                templateUrl: 'Templates/login.html'
            })
    });






