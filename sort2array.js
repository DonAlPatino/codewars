const arr = [
    { country: 'Russia',  city: 'Moscow' },
    { country: 'Belarus', city: 'Minsk' },
    { country: 'Poland',  city: 'Warsaw' },
    { country: 'Russia',  city: 'Saint Petersburg' },
    { country: 'Poland',  city: 'Krakow' },
    { country: 'Belarus', city: 'Brest' }
];

arr.sort((a,b) =>{
    // a.country===b.country? a.city - b.city: a.country - b.country
    if (a.country === b.country){
        return a.city < b.city? -1: 1;
    }
    return a.country < b.country? -1: 1;
    }
)
// console.log (arr)
function getIntervalArray(start, end) {
   return Array(end - start + 1 ).fill(start, 0).map((x, i) => x + i)
}
console.log (getIntervalArray(-2,2))
