// Avoid This:
// function print_quiz(questions: Array<any>) {
//     questions.forEach(question => {
//         console.log(question.description)
//         switch(question.type) {
//             case "boolean":
//                 console.log("1. true");
//                 console.log("2. false");
//                 break
//             case "multiple_choice":
//                 question.options.forEach((option: string, index: number) => {
//                     console.log(`${index + 1}. ${option}`);
//                 })
//                 break
//             case "text":
//                 console.log("Answer: _________________");
//                 break
//             case "range":
//                 console.log("Minimum: _________________");
//                 console.log("Maximum: _________________");
//                 break
//         }
//         console.log('');
//     })
// }
// const questions = [
//     {
//         type: "boolean",
//         description: "This video is useful."
//     },
//     {
//         type: "multiple_choice",
//         description: "What is your favorite language?",
//         options: ["CSS", "HTML", "JS", "Python"]
//     },
//     {
//         type: "text",
//         description: "Describe your favorite JS feature."
//     },
//     {
//         type: "range",
//         description: "What is the speed limit in your city?"
//     }
// ]
// print_quiz(questions);
// do it like this instead:
class BooleanQuestion {
    description;
    constructor(description) {
        this.description = description;
    }
    print_question_choices() {
        console.log("1. true");
        console.log("2. false");
    }
}
class MultipleChoiceQuestion {
    description;
    options;
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }
    print_question_choices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }
}
class TextQuestion {
    description;
    constructor(description) {
        this.description = description;
    }
    print_question_choices() {
        console.log(`Answer: _______________________________________`);
    }
}
class RangeQuestion {
    description;
    constructor(description) {
        this.description = description;
    }
    print_question_choices() {
        console.log("Minimum: _____________");
        console.log("Maximum: _____________");
    }
}
function print_quiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        question.print_question_choices();
        console.log('');
    });
}
const questions = [
    new BooleanQuestion("this video is useful."),
    new MultipleChoiceQuestion("What is your favorite language?", ["CSS", "HTML", "JS", "Python"]),
    new TextQuestion("Describe your favorite JS feature."),
    new RangeQuestion("What is the speed limit in your city?")
];
print_quiz(questions);
//     }
