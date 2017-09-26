(function(){

    "use strict";

    angular
        .module("MiniQuoraApp")
        .controller("DetailController", DetailController); // name of controller, function to be call

    function DetailController($location, $routeParams) {
        var vm = this;

        vm.longText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        vm.Question = {}
        vm.Question.questionText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        vm.Question.questionId = $routeParams.questionId
        vm.location = $location.url();
        alert( "In Detail Controller for " + $routeParams.questionId);

        vm.addNewAnswer = AddNewAnswer

        function AddNewAnswer(newAnswer, questionId) {
            alert(newAnswer + ' ' +questionId)
        }

        vm.removeQuestion = RemoveQuestion

        function RemoveQuestion(questionId) {
            alert("remove Question id: " + questionId)
        }

        vm.updateQuestion = UpdateQuestion

        function UpdateQuestion(questionId) {
            alert("edited Question id: " + questionId + " \nupdated Question : " + vm.Question.questionText)
        }

        vm.allVote = [0,0,0,0,0]

        vm.addVote = AddVote
        vm.hasVoted = [false, false, false, false, false]

        function AddVote(id, value) {
            if(!vm.hasVoted[id]){
                vm.allVote[id] += value
                vm.hasVoted[id] = true
            }
        }

    }
})();
