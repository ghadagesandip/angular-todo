
app.controller('TodoCtrl',function($scope,Todos){

    var data = Todos.getTodos().success(function(data){
        console.log(data);
    })

    $scope.clearAll = function(){

        Todos.clearAllTodos();

        $scope.apply();

    }
})

