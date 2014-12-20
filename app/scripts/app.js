var app = angular.module('TodoApp',['ngRoute','MyServices']);

    app.value('baseUrl','http://localhost/BugTrackerApp/public/');

    app.config(function($routeProvider){
        $routeProvider
            .when('/',{title:'Welcome to todo app',controller:'HomeCtrl',templateUrl:'views/home/index.html'})
            .when('/my-todos',{title:'My Todo',controller:"TodoCtrl",templateUrl:"views/todos/index.html"})
            .when('/add-todo',{title:'Add Todo',controller:"AddTodoCtrl",templateUrl:"views/todos/add-todo.html"})



    });


    app.run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = current.$$route.title;
        });
    }]);

