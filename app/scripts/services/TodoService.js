var MyServices = angular.module('MyServices',['LocalStorageModule'])

    .value('apibaseUrl','http://localhost/BugTrackerApp/public/')

    .config(function(localStorageServiceProvider){
        localStorageServiceProvider
            .setPrefix('TodoApp');
    })

    .service('Todos',function(localStorageService,$http,apibaseUrl){

        this.getTodoLength = function(){

        }

        this.getTodos = function(){
            return $http.get(apibaseUrl+'getTodos/1')
        }

        this.addTodo = function(todo){
            $scope.todos.push(todo);
            return true;
        }


        this.clearAllTodos = function(){
            return localStorageService.clearAll();

        }

    });