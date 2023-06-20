function explode(s) {
    let acc = [];
    for (let sKey of s) {
        console.log(sKey);
        let digit = parseInt(sKey);
        for (let i = 0; i < digit; i++) {
            acc.push(sKey);
        }
    }
    return acc;
}

console.log(explode("312"))