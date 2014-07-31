angular.module('myApp', [])
  .controller('MultiplicationCtrl', function($scope, $attrs) {
    function populateNumbers(x) {
    var numbers = [];
    for(var i=0; i < x; i++) {
      numbers[i] = i + 1; 
    };
    return numbers;
    }
    // this cleans the need to do a calculation inside the template
    $scope.compute = function(a, b){
    	return a * b;
    };
    // $watch listens for changes on the ng-model="numberLimit" and updates $scope.numbers
    $scope.$watch('numberLimit', function(limit){
    	$scope.numbers = populateNumbers(limit);
    });
    // the $attrs reads the initial-number-limit from the template, it looks for initial-dash-spaced-name
    $scope.numberLimit = $attrs.initialNumberLimit || 10;
});

