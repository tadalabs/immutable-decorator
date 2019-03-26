# immutable-decorator

This is a reasonably simplified JavaScript decorator for making ES6 classes immutable

Code attempting to rely on this requires @babel/plugin-proposal-decorators

## Internal Development and Testing

```
$ npm run clean
$ npm run build
$ cd dist
$ node tester.js
```

## Usage

```
immutable = require('./index.js');

@immutable
class Tester {
    test() {
        return 1 + 1;
    }
}

let t = new Tester();

// 2
t.test();

t.test = function () {
    return 2 + 2;
};

// Still 2...
t.test();

```