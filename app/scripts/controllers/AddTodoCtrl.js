app.controller('AddTodoCtrl',function($scope,Todos){

    $scope.labels = [
        {id:1,name:'Inbox'},
        {id:2,name:'Work'},
        {id:3,name:'Personal'},
        {id:3,name:'To learn'},
    ];


    $scope.priorities = [
        {id:1,name:'Highest'},
        {id:2,name:'High'},
        {id:3,name:'medim'},
        {id:4,name:'low'},
        {id:5,name:'least'},
    ]


    $scope.submit = function(){
        if($scope.todo != 'undefined'){

            $scope.todo.id = Todos.getTodoLength() || 1;
            $scope.todo.label_id = $scope.todo.label_id.id
            $scope.todo.priority_id = $scope.todo.proirity_id.id
            Todos.addSaveTodo($scope.todo)
        }
    }

    $scope.reset = function(form){
        if (form) {
            form.$setPristine();
            form.$setUntouched();
        }
        $scope.task = angular.copy($scope.master);
    }

})