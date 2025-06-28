var SomeModule = (function () { })();
var Formater = (function () {
    console.log("Start");
    var log = function (message) { return console.log("[" + Date.now() + "] Logger: " + message); };
    var make_uppercase = function (text) {
        log("Making Uppercase");
        return text.toUpperCase();
    };
    return { make_uppercase: make_uppercase };
})();
// Formater.log("Hello");
// const form = Formater;
console.log(Formater.make_uppercase("Ok man. Let's try that."));
var Formater_2 = (function () {
    var times_run = 0;
    var log = function (message) { return console.log("[" + Date.now() + "] Logger: " + message); };
    var set_times_run = function () {
        log("Setting times run");
        ++times_run;
    };
    var make_uppercase = function (text) {
        log("Making Uppercase");
        set_times_run();
        return text.toUpperCase();
    };
    return {
        make_uppercase: make_uppercase,
        times_run: times_run
    };
})();
var Formater_3 = (function (doc) {
    var log = function (message) { return console.log("[" + Date.now() + "] Logger: " + message); };
    var make_uppercase = function (text) {
        log("Making Uppercase");
        return text.toUpperCase();
    };
    var write_to_DOM = function (selector, message) {
        var _a;
        if (!!doc && "querySelector" in document) {
            (_a = doc.querySelector(selector)) === null || _a === void 0 ? void 0 : _a.innerHTML = message;
        }
    };
    return {
        make_uppercase: make_uppercase,
        write_to_DOM: write_to_DOM
    };
})(document);
// Formater_2.set_times_run();
// Formater_2.set_times_run();
