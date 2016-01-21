/**
 * Created by Ieva.Bumbiere on 20.01.2016..
 */
(function() {
    "use strict";

    angular.module("todoApp")

        .controller("ToDoCtrl", ["ToDoService", function(ToDoService) {
            var ToDoCtrl = this;

            ToDoCtrl.tasks = [];
            ToDoCtrl.task = "";

            ToDoCtrl.getList = function(){
                ToDoService.getTaskList().then(
                    function (response) {
                        ToDoCtrl.tasks = response;
                    },
                    function (data) {
                        alert("Nevar nolasīt datus");
                    }
                );
            };

            ToDoCtrl.getList();


            ToDoCtrl.addTask = function() {
                ToDoService.addTask(ToDoCtrl.task).then(
                    function (response) {
                        ToDoCtrl.task = "";
                        ToDoCtrl.getList();
                    },
                    function (data) {
                        alert("nevar nolasīt datus");
                    }
                );
            };

            ToDoCtrl.markDone = function(taskId) {
                ToDoService.updateTask(taskId).then(
                    function (response) {
                        ToDoCtrl.getList();
                    },
                    function (data) {
                        alert("nevar nolasīt datus");
                    }
                );
            };


            ToDoCtrl.remove = function(taskId) {
                ToDoService.deleteTask(taskId).then(
                    function (response) {
                        ToDoCtrl.getList();
                    },
                    function (data) {
                        alert("nevar nolasīt datus");
                    }
                );
            };

            ToDoCtrl.move = function() {
                //var padomāt par animācijām
            };
    }]);

}());