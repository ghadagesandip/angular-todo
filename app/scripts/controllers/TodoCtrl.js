
app.controller('TodoCtrl',function($scope,Todos){

    $scope.todos = Todos.getTodos();

    $scope.clearAll = function(){

        Todos.clearAllTodos();

        $scope.apply();

    }
})

