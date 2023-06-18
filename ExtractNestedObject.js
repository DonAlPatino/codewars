Object.prototype.hash = function(string) {
    const get = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)
        let path = string.split('.');
        let res = get(path, this);
        return (res?res:undefined);
}

var obj = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    }
};

console.log(obj.hash('person.name')); // 'joe'
console.log(obj.hash('person.history.bio')); // { funFact: 'I like fishing.' }
console.log(obj.hash('person.history.homeStreet')); // undefined
console.log(obj.hash('person.animal.pet.needNoseAntEater')); // undefined
