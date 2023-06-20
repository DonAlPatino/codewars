var runLengthEncoding = function(str){

    let arr = [];
    let count = 1;
    for (let i = 0; i < str.length;i++){
        if (str[i] === str [i+1]) {
            count = count + 1;
        }
        else {
            let arr1 = [count, str[i]];
            arr.push(arr1)
            count = 1;
        }
    }
    return arr // << fix this
}

let i = runLengthEncoding("aac")
console.log(i)