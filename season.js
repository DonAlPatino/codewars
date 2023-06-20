function getSeason(date) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!date) return 'Unable to determine the time of year!';
    if (!(date instanceof Date)) {
        throw new Error('Invalid date!');
    }
    if (date[Object.getOwnPropertySymbols(date)[0]] === 'Date') throw new Error('Invalid date!');
    let month
    try {
        month = date.getMonth();
    }
    catch (e) {
        throw new Error('Invalid date!');
    }
    if (month == 11 || month < 2) return 'winter'
    else if (month > 7) return 'fall'
    else if (month > 1 && month < 5) return 'spring'
    else return 'summer'
}

const deeperFakeDate = {
    toString() {
        return Date.prototype.toString.call(new Date());
    },
    getMonth() {
        return Date.prototype.getMonth.call(new Date());
    },
    getFullYear() {
        return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
    },
    getDate() {
        return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
    },
    getHours() {
        return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
    },
    getMinutes() {
        return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
    },
    getSeconds() {
        return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
    },
    getMilliseconds() {
        return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
    },
    getDay() {
        return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
    },
    [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

//const res = getSeason(new Date(1375, 5, 1, 12, 18, 41, 652));
const res = getSeason(deeperFakeDate);
console.log(res)