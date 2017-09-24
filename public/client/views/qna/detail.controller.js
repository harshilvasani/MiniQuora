(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("DetailController", DetailController); // name of controller, function to be call

    function DetailController($scope,$location, $routeParams) {
        $scope.longText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        $scope.question = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        $scope.questionId = $routeParams.questionId
        $scope.location = $location.url();
        alert( "In Detail Controller for " + $routeParams.questionId);

        $scope.addNewAnswer = AddNewAnswer

        function AddNewAnswer(newAnswer, questionId) {
            alert(newAnswer + ' ' +questionId)
        }

        $scope.removeQuestion = RemoveQuestion

        function RemoveQuestion(questionId) {
            alert("remove Question id: " + questionId)
        }

        $scope.updateQuestion = UpdateQuestion

        function UpdateQuestion(questionId) {
            alert("edited Question id: " + questionId + " \nupdated Question : " + $scope.question)
        }

        $scope.allVote = [0,0,0,0,0]

        $scope.addVote = AddVote
        $scope.hasVoted = [false, false, false, false, false]

        function AddVote(id, value) {
            if(!$scope.hasVoted[id]){
                $scope.allVote[id] += value
                $scope.hasVoted[id] = true
            }
        }

    }
})();
