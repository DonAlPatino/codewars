function timeSpanToString(startDate, endDate) {
    // throw new Error('Not implemented');
    const diff = endDate - startDate
    const res = new Date(diff);
    return res.toISOString().substring(11, res.toISOString().length - 1 );
}

console.log(timeSpanToString(new Date(2000,1,1,10,0,0),  new Date(2000,1,1,11,0,0)))
