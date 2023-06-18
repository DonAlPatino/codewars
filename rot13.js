
function encodeToRot13(str) {
    const arr1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const arr2 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
let res = '';
    for(let i=0;i<str.length;i++){
        res += (arr2[arr1.indexOf(str[i])]?arr2[arr1.indexOf(str[i])]:str[i]);
    }
    return res;
}
console.log(encodeToRot13('Why did the chicken cross the road?'))
