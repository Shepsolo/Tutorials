/**
 * Created by James on 2/20/14.
 */
function ToDoCtrl($scope)
{

       $scope.todos = [
                        {text: 'Learn AngularJS', done:false},
                        {text: 'Build an App', done:false}
                      ];
    
       $scope.getTotalTodos = function ()
                              {
                                return $scope.todos.length;
                              };

       $scope.addTodo = function  ()
                        {
                            $scope.todos.push({text:$scope.formTodoText, done:false});
                            $scope.formTodoText ='';
                        };

       $scope.clearCompleted = function ()
                               {
                                 $scope.todos = _.filter($scope.todos, function(todo){return !todo.done;})
                               };
}


