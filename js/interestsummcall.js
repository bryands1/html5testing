/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myModule = angular.module('myModule', []);

myModule.controller('myController', function($scope, userRepository) {
    userRepository.getAllUsers().success(function(users) {
        $scope.users = users;
        //console.log($scope.users.valueOf());
        //console.log($scope.users.toString());
        
    });

});

myModule.factory('userRepository', function($http) {
    return {
        getAllUsers: function() {
            console.log("At get all Users");
            var url = "http://time.jsontest.com/";
            return $http.get(url);
        },
        getStuff: function() {
            console.log("At get stuff");
            //var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
            var url = "http://localhost/risk/cssRiskDREST.svc/interestsummary";
            return $http.get(url);
        }
    };
});
