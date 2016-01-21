/**
 * Created by Ieva.Bumbiere on 20.01.2016..
 */
(function(){
    "use strict";

    angular.module("todoApp")
        .factory("ToDoService", ["$http", "$q", function($http, $q){
            var toDoServiceFactory = {};
            var toDoMsLocation = "http://localhost:89/api/todo/";

            var _getTaskList = function() {
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

            var _addTask = function(task) {
                var deferred = $q.defer();
                $http.post(toDoMsLocation, '{"task": "'+task +'"}').then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (data) {
                        deferred.reject(data);
                    }
                );
                return deferred.promise;
            };

            var _updateTask = function(taskId) {
                var deferred = $q.defer();
                $http.put(toDoMsLocation + taskId + '/done' ).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (data) {
                        deferred.reject(data);
                    }
                );
                return deferred.promise;
            };

            var _deleteTask = function(taskId) {
                var deferred = $q.defer();
                $http.delete(toDoMsLocation + taskId ).then(
                    function (response) {
                        deferred.resolve(response.data);
                    },
                    function (data) {
                        deferred.reject(data);
                    }
                );
                return deferred.promise;
            };


            toDoServiceFactory.getTaskList = _getTaskList;
            toDoServiceFactory.addTask = _addTask;
            toDoServiceFactory.updateTask = _updateTask;
            toDoServiceFactory.deleteTask = _deleteTask;

            return toDoServiceFactory;
        }
        ]);

}());