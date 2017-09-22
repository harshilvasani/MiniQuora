(function(){
    angular
        .module("MiniQuoraApp")
        .directive("myModal", MyModal);

    // implement the directive in the following function
    function MyModal(questionId) {
        return {
            template: "<h4>testing directive<h4>"
        };
    }
})();