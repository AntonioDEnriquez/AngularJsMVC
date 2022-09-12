(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', ['$http', '$q', function ($http, $q) {
            var service = {};

            // GetUsers
            service.getUsers = function () {
                var deferred = $q.defer();
                $http.get('/User/Index').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            // GetUsersById
            service.getUserById = function (id) {
                var deferred = $q.defer();
                $http.get('/User/Details/' + id).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            //Add Users

            service.addUser = function (user) {
                var deferred = $q.defer();
                $http.post('/User/Create', user).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            //Edit Users
            service.editUser = function (user) {
                var deferred = $q.defer();
                $http.post('/User/Edit', user).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            //Delete Users
            service.deleteUser = function (id) {
                var deferred = $q.defer();
                $http.post('/User/Delete', {ID: id}).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };



            return service;
        }]);

   
})();