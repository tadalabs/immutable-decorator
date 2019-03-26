module.exports = function (Class) {
    const complete = thing => {
        if (typeof thing === 'object' || typeof thing === 'function') {
            Object.freeze(thing);
            Object.keys(thing).map(key => complete(key));
            Object.values(thing).map(key => complete(key));
        } else if (typeof thing === 'string') {
            Object.freeze(thing);
        }
        return thing;
    };
    return function(...args) {
        return complete(new Class(...args));
    };
}