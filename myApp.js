angular.module('myApp', [])
  .controller('MultiplicationCtrl', function($scope, $attrs) {
    function populateNumbers(x) {
    var numbers = [];
    for(var i=0; i < x; i++) {
      numbers[i] = i + 1; 
    };
    return numbers;
    }
    $scope.numbers = populateNumbers($scope.numberLimit);
    $scope.compute = function(a, b){
    	return a * b;
    };
    $scope.$watch('numberLimit', function(limit){
    	$scope.numbers = populateNumbers(limit);
    });
    $scope.numberLimit = $attrs.initialNumberLimit || 10;
});

