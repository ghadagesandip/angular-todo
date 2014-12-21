
app.controller('TodoCtrl',function($scope,Todos){

    var todosInStore = Todos.getTodos();

    $scope.todos = todosInStore || [];

    $scope.clearAll = function(){

        Todos.clearAllTodos();

        $scope.apply();

    }
})

