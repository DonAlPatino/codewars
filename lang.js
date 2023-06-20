function myLanguages(results) {
    let list = [];
    let mapSort = Object.entries(results).sort((a, b) => b[1] - a[1]);
    for (let sKey of mapSort) {
        if (sKey[1] >= 60 ) list.push(sKey[0]);
    }


    return list;
}

function myLanguages(results) {
    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

//const i = myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93});
//console.log(i)

var arr = [0, , , 1, , , , , 2, , , , 3];
function remhole(arr){
    arrnew = []
    for (a of arr) {if (a !='') arrnew.push(a)}
    return arrnew
}

console.log(remhole(new Array(1,2,3)));