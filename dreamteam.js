function createDreamTeam(team) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let secret = [];
    for (let i=0;i< team.length;i++){
        if (typeof team[i] !== "string") continue;
        secret.push(team[i].charAt(0))
    }
    return secret.sort().join('')
}

i = createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise'])
console.log(i)