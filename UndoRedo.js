function undoRedo(object) {
    function History(type, key, oldValue, newValue) {
        this.type = type;
        this.key = key;
        this.oldValue = oldValue;
        this.newValue = newValue;
    }

    const history = [];
    let index = 0;
    return {
        set: function (key, value) {
            if (object.hasOwnProperty(key))
                history.push(new History('set', key, object[key], value));
            else
                history.push(new History('new', key, null, value));
            object[key] = value;
            index++;
            //history.length = index;
        },
        get: function (key) {
            return object[key];
        },
        print: function () {
            console.log("===log===")
            console.log(object);
            console.log(history);
            console.log("===log===")
        },
        del: function (key) {
            history.push(new History('del', key, object[key], null));
            delete object[key];
            index++;
            history.length = index;
        },
        undo: function () {
            if (index <= 0) throw new Error('cannot undo');
            index--;
            const h = history[index];
            if (h.type === 'set') object[h.key] = h.oldValue;
            else if (h.type === 'new') delete object[h.key];
            else if (h.type === 'del') object[h.key] = h.oldValue;
         },
        redo: function () {
            if (index >= history.length) throw new Error('cannot redo');
                index++;
                const h = history[index];
                if (h.type === 'set') object[h.key] = h.newValue;
                else if (h.type === 'new') object[h.key] = h.newValue;
                else if (h.type === 'del') delete object[h.key];
            index++;
        }
    };
}

var obj = {
};
var unRe = undoRedo(obj);
unRe.set('x', 5);
unRe.print()
unRe.set('y', 6);
unRe.print()
unRe.undo();
unRe.print()
unRe.set('y', 66);
unRe.print()
unRe.undo();
unRe.print()
unRe.redo('');
unRe.print()
