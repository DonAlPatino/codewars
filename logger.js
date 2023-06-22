

/* function logger(func, logFunc) {
    const newFn = (...x) => {
        let args;
        let res;
        if (Array.isArray(...x)) {
            args = [...x];
            logFunc(`${func.name}([` + args[0] + `],` + args[1] + `) starts`);
            res = func(...x);
            logFunc(`${func.name}([` + args[0] + `],` + args[1] + `) ends`);
        } else {
            logFunc(`${func.name}(${x}) starts`);
            res = func(...x);
            logFunc(`${func.name}(${x}) ends`);
        }
        return res;
    };
        return newFn;
}

const logFunc = (text) => {
    log += `${text}\n`;
    return log;
};

const cosLogger = logger(Math.cos, logFunc);
const result = cosLogger(Math.PI);*/
let log = '';
function logger(func, logFunc) {
    const newFn = (...x) => {
        const argList = x.map((x) => JSON.stringify(x)).join(',');
        logFunc(`${func.name}(${argList}) starts\n`);
        const res = func(...x);
        logFunc(`${func.name}(${argList}) ends\n`);
        return res;
    };
    return newFn;
}
const fn = function testLogger(param, index) {
    isCalling = true;
    return param[index];
};
const logFunc = (text) => {
    log += `${text}\n`;
    return log;
};
const logger1 = logger(fn, logFunc);
const actual = logger1(['expected', 'test', 1], 0);


console.log(actual);
console.log(log);
