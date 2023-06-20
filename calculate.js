function calculate(nums) {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return function (nums2) {

        for (let j = 0; j < arguments.length; j++) {
            sum += arguments[j];
        }
        return sum;
    }
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
if (enteredCode !== correctCode) return false
    //let cur = new Date(currentDate)
    //let exp = new Date(expirationDate)
   //console.log(cur)
    if (new Date(currentDate) < new Date(expirationDate)) return true;
    else return false

}

function unluckyDays(year){
    let s=0;
    for (let i = 1; i < 13; i++) {
        let date = new Date(year, i, 13)
        let day = date.getDay();
        if (day ===5) s++;
    }
    return s;
}

console.log(unluckyDays(2102))