function duplicateEncode(word1){
    let word = word1.toLowerCase()
    let myMap = new Map();
    let acc = [];
    for (let wKey of word) {
        if (myMap.has(wKey))  {myMap.set(wKey, 2)}
        else myMap.set(wKey,1)
    }
    console.log(myMap);
    for (let wKey of word) {
        if (myMap.get(wKey) == 1) acc.push("(")
        else acc.push(")")
    }
    return acc.join("");
}

function numberOfPairs(gloves)
{
    let colorMap = new Map();
    for (let wKey of gloves) {
        if (colorMap.has(wKey))  {colorMap.set(wKey, colorMap.get(wKey) + 1)}
        else colorMap.set(wKey,1)
    }
    console.log(colorMap)

    let pair = 0;
    for (let wKey of colorMap.keys()) {
        console.log(wKey);
        pair = pair + Math.floor(colorMap.get(wKey)/2);
    }
    return pair;
}

console.log(numberOfPairs(['red','red','blue']))