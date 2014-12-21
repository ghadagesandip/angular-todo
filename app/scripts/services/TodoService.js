var MyServices = angular.module('MyServices',['LocalStorageModule'])

    .config(function(localStorageServiceProvider){
        localStorageServiceProvider
            .setPrefix('TodoApp');
    })

    .service('Todos',function(localStorageService){

        this.getTodoLength = function(){
            return localStorageService.get('todos');
        }

        this.getTodos = function(){

            return this.todos = localStorageService.get('todos');
        }

        this.addTodo = function(todo){
            $scope.todos.push(todo);
            return true;
        }


        this.clearAllTodos = function(){
            return localStorageService.clearAll();

        }

    });