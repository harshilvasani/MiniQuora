(function(){

    // add a directive called hello-world
    // to a module called HelloWorldDirective
    angular
        .module("MiniQuoraApp")
        .directive("animateOnChange", AnimateOnChange);

    // implement the directive in the following function
    function AnimateOnChange($timeout){
        function AnimateOnChangeLink(scope, element, attrs){
            var timer = null;

            function valueChanged(value){
                // Whenever the model changes, clear previous timeout (for fast clicking).
                if(timer){
                    $timeout.cancel(timer);
                    timer = null;
                }
                element.addClass(attrs.animClass);
                //After each model change, define a timer that will remove the applied class.
                timer = $timeout(function removeClasses(){
                    //Remove both increment & decrement classes (for fast clicking).
                    element.removeClass(attrs.animClass);
                }, 300);
            }

            scope.$watch(function(){ return attrs.value; }, valueChanged);
        }

        return {
            restrict: 'A',
            link: AnimateOnChangeLink
        };
    }
})();
