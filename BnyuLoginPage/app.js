/**
 * Created by James on 3/1/14.
 */
var app = angular.module('app', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('Templates/login.html');
        $stateProvider
            .state('home',{
                url: '/login',
                templateUrl: 'Templates/login.html'
            })
    })






