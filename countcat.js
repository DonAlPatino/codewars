function countCats(matrix) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let newarr = matrix.flat(1);
    let count = 0;
    for (let i = 0; i<newarr.length;i++ ){
        if (newarr[i] == '^^') count++;
    }
    return count;
}

i = countCats([
    ['##', 'dd', '00'],
    ['^^', '..', 'ss'],
    ['AA', 'dd', 'Oo'],
])

console.log(i)