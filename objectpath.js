var obj = {
    foo: { bar: 'baz' }
};

let object = {
    user: {
        name: {
            first: 'John',
            last: 'Snow'
        }
    }
};

obj1 = { people: ['John', 'Dave', 'Lisa'] }
function deepFind(obj, path) {
    var paths = path.split('.')
        , current = obj
        , i;

    for (i = 0; i < paths.length; ++i) {
        if (current[paths[i]] == undefined) {
            return undefined;
        } else {
            current = current[paths[i]];
        }
    }
    return current;
}

//console.log(deepFind(object, 'user.name.first'))
console.log(deepFind(obj1, 'people.2'))