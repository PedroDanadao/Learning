const SomeModule = (function() {})();

const Formater = (function() {
    console.log("Start");
    const log = (message: string) => console.log(`[${Date.now()}] Logger: ${message}`);

    const make_uppercase = (text: string) => {
        log("Making Uppercase");
        return text.toUpperCase();
    };

    return {make_uppercase};
})();

// Formater.log("Hello");

// const form = Formater;
console.log( Formater.make_uppercase("Ok man. Let's try that.") );


const Formater_2 = (function() {
    let times_run = 0;

    const log = (message: string) => console.log(`[${Date.now()}] Logger: ${message}`);
    const set_times_run = () => {
        log("Setting times run");
        ++times_run;
    }

    const make_uppercase = (text: string) => {
        log("Making Uppercase");
        set_times_run();
        return text.toUpperCase();
    };

    return {
        make_uppercase,
        times_run
    }
})();


const Formater_3 = (function(doc) {
    const log = (message: string) => console.log(`[${Date.now()}] Logger: ${message}`);

    const make_uppercase = (text: string) => {
        log("Making Uppercase");
        return text.toUpperCase();
    };

    const write_to_DOM = (selector: string, message: string) => {
        if (!!doc && "querySelector" in document) {
            doc.querySelector(selector)?.innerHTML = message;
        }
    }

    return {
        make_uppercase,
        write_to_DOM
    }
})(document);




// Formater_2.set_times_run();
// Formater_2.set_times_run();


