(function(){

    // add a directive called hello-world
    // to a module called HelloWorldDirective
    angular
        .module("MiniQuoraApp")
        .directive("testDirective", TestDirective);

    // implement the directive in the following function
    function TestDirective() {

        // configure the template attribute
        // to be the static "Hello World" string
        // the hello-world element will contain
        // the static string "Hello World"
        return {
            template: "<h4>testing directive<h4>"
        };
    }
})();