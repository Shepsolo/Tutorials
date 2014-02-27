/**
 * Created by James on 2/25/14.
 */

var demoApp = angular.module('demoApp', []);

demoApp.config(function($routeProvider)
{
   $routeProvider
       .when('/view1',
            {
               controller: 'simpleCtrl',
               templateUrl: 'Partials/View1.html'
            })
       .when('/view2',
            {
                controller: 'simpleCtrl',
                templateUrl: 'Partials/View2.html'
            })
       .otherwise({ redirectTo: '/view1'});

});

var controllers = {};
controllers.simpleCtrl = function($scope)
{
    $scope.customers = [
                        { name: 'John Smith', city: 'Phoenix'},
                        { name: 'John Doe', city: 'New York'},
                        { name: 'Jane Doe', city: 'San Francisco'}
                       ];
    $scope.addCustomer = function()
    {
        $scope.customers.push({name: $scope.newCustomer.name,
                               city: $scope.newCustomer.city});

    }
}

demoApp.controller(controllers);