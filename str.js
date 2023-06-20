console.log('The quick brown fox jumps over the lazy dog'.split('').reverse().join(''));
const n=12345;
console.log(n.toString().split('').reverse().join(''));

str1 = '/web/favicon.ico'
str2 = '/web-scripts/dump'

function twoString(str1, str2){
    let sum = [];
    let slashPlace = 0;
    for (let i = 0; i < str1.length; i++){
        if (str1[i] ==='/' && str2[i] ==='/') slashPlace = i;
        if (str1[i] === str2[i]) sum.push(str1[i])
        else break;
    }
    if (sum[sum.length - 1] !== '/') sum=sum.slice(0,slashPlace + 1)
    return sum.join('');
}
arr = ['/web/images/image1.png', '/web/images/image2.png']

console.log(arr.reduce((x) => {let sum = [];
    let slashPlace = 0;
    for (let i = 0; i < str1.length; i++){
        if (str1[i] ==='/' && str2[i] ==='/') slashPlace = i;
        if (str1[i] === str2[i]) sum.push(str1[i])
        else break;
    }
    if (sum[sum.length - 1] !== '/') sum=sum.slice(0,slashPlace + 1)
    return sum.join('');}))

