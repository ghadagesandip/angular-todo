var app = angular.module('TodoApp',['ngRoute']);

    app.value('baseUrl','http://localhost/BugTrackerApp/public/');

    app.config(function($routeProvider){
        $routeProvider
            .when('/',{title:'Welcome to todo app',controller:'HomeCtrl',templateUrl:'views/home/index.html'})
            .when('/my-todos',{title:'My Todo',controller:"Todoctrl",templateUrl:"views/todos/index.html"})

    });


    app.run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
            $rootScope.title = current.$$route.title;
        });
    }]);
