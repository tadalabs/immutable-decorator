immutable = require('./index.js');

@immutable
class Tester {
    test() {
        return 1 + 1;
    }
}

function Testing() {
    let t = new Tester();

    if (t.test() != 2) {
        throw new Error("baseline failure");
    } else {
        console.log("baseline success")
    }

    t.test = function () {
        return 2 + 2;
    };

    if (t.test() != 2) {
        throw new Error("functional failure")
    } else {
        console.log("functional success");
    }
}

Testing();