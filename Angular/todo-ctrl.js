/**
 * Created by Ieva.Bumbiere on 20.01.2016..
 */
(function() {
    "use strict";

    angular.module("ToDoApp")

        .controller("ToDoCtrl",["ToDoService", function(ToDoService) {
            // kontroliera funkcijas un objekti
            var taskController = this;
            taskController.tasks = {};
            taskController.task = '';

            taskController.addTask = function(){
                ToDoService.addTask(taskController.task).then(
                    function (response) {
                        taskController.getList();
                        taskController.task = '';
                    },
                    function (data) {
                        alert("Nevar nolasīt datus");
                    })
            };

            taskController.deleteTask = function(id){
                ToDoService.deleteTask(id).then(
                    function (response) {
                        taskController.getList();
                    },
                    function (data) {
                        alert("Nevar nolasīt datus");
                    })
            };

            taskController.doneTask = function(id){
                ToDoService.doneTask(id).then(
                    function (response) {
                        taskController.getList();
                    },
                    function (data) {
                        alert("Nevar nolasīt datus");
                    })
            };

            taskController.undoneTask = function(id){
                ToDoService.undoneTask(id).then(
                    function (response) {
                        taskController.getList();
                    },
                    function (data) {
                        alert("Nevar nolasīt datus");
                    })
            };

            taskController.getList = function(){
                ToDoService.getTasks().then(
                    function (response) {
                        taskController.tasks = response;
                    },
                    function (data) {
                        alert("Nevar nolasīt datus");
                    }
                );
            };
            taskController.getList();

    }]);

})();