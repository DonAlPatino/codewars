var DI = function (dependency) {
    this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
    let funcs = []
try {
    let dependencies = func.toString().match(/function\s?\((.+)\)\s?{/)[1].split(",").map((val) => val.trim());
    funcs = dependencies.map((item) => this.dependency[item])
}
catch (e) {}
    return () => {
 return func.apply(func, funcs);
    };
}

    var modules = {
        'app': function(){return 'module app';},
        'login': function(){return 'module login';},
        'i18n': function(){return 'module i18n';}
    };

    var di = new DI(modules);

        var myFunc = di.inject(function (i18n, login, app) {
            return [i18n(), login(), app()].join(', ');
        });
        //Test.assertEquals(myFunc(), 'module i18n, module login, module app');
        console.log(myFunc())


        var myFuncWithUndefined = di.inject(function (nonExistingVar) {
            return nonExistingVar;
        });
        //Test.assertEquals(myFuncWithUndefined(), void(0));
console.log(myFuncWithUndefined())

        var myFuncWithoutDependencies = di.inject(function () {
            var args = Array.prototype.slice.call(arguments, 0);
            return args.length;
        });
//        Test.assertEquals(myFuncWithoutDependencies(), 0);
console.log(myFuncWithoutDependencies())

        var myFuncWithNested = di.inject(function (app, login, i18n) {
            function nested(d, e, f){};
            var args = Array.prototype.slice.call(arguments, 0);
            return args.length;
        });
        //Test.assertEquals(myFuncWithNested(), 3);
console.log(myFuncWithNested())