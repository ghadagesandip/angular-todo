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
            //console.log(this.getTodoLength())
            return this.todos = localStorageService.get('todos');
        }

        this.addSaveTodo = function(todo){

            return localStorageService.set('todos',val);

        }


        this.clearAllTodos = function(){
            return localStorageService.clearAll();

        }

    });