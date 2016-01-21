/**
 * Created by Ieva.Bumbiere on 20.01.2016..
 */
(function(){
    "use strict";

    angular.module("ToDoApp")

        .factory("ToDoService", ['$http', '$q', function($http, $q){
            var toDoServicefactory = {};
            var toDoMsLocation = "http://h2o:9969/api/todo/";
            //servisa funkcijas
            var _getTasks = function() {
                var deferred = $q.defer();
                $http.get(toDoMsLocation).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (data) {
                        deferred.reject(data);
                    }
                );
                return deferred.promise;
            };

            var _saveTask = function(text) {
                var deferred = $q.defer();
                $http.post(toDoMsLocation, '{"task":"' + text +'"}').then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (data) {
                        deferred.reject(data);
                    }
                );
                return deferred.promise;
            };

            var _deleteTask = function(id) {
                var deferred = $q.defer();
                $http.delete(toDoMsLocation + id).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (data) {
                        deferred.reject(data);
                    }
                );
                return deferred.promise;
            };

            var _doneTask = function(id) {
                var deferred = $q.defer();
                $http.put(toDoMsLocation + id + '/done').then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (data) {
                        deferred.reject(data);
                    }
                );
                return deferred.promise;
            };

            var _undoneTask = function(id) {
                var deferred = $q.defer();
                $http.put(toDoMsLocation + id + '/undone').then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (data) {
                        deferred.reject(data);
                    }
                );
                return deferred.promise;
            };

            toDoServicefactory.getTasks = _getTasks;
            toDoServicefactory.addTask = _saveTask;
            toDoServicefactory.deleteTask = _deleteTask;
            toDoServicefactory.doneTask = _doneTask;
            toDoServicefactory.undoneTask = _undoneTask;
            return toDoServicefactory;

    }]);

}());