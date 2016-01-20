/**
 * Created by Ieva.Bumbiere on 20.01.2016..
 */
(function() {
    "use strict";

    angular.module("ToDoApp")

        .controller("ToDoCtrl", function($scope) {

            var ToDoCtrl = this;

            ToDoCtrl.tasks = [];
            ;
            ToDoCtrl.task = "";

            ToDoCtrl.addTask = function() {
              ToDoCtrl.tasks.push(ToDoCtrl.task);
                ToDoCtrl.task = "";
            };

            ToDoCtrl.remove = function(task) {
                ToDoCtrl.tasks.splice(task, 1);
            };

            ToDoCtrl.move = function() {

            };
    });

})();