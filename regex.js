function generateHTML(boardMarkup) {
    const regex = new RegExp(/<(.*)\/>/);

    const str = boardMarkup.split('\n');
    for (let i = 0; i < str.length; i++)
        if (str[i] !== '') {
            const newstr = str[i].match(regex);
            if (newstr !== null && newstr.length > 0) {
                console.log(`<${newstr[1]}></${newstr[1]}>`)
            }
        }
}

console.log(generateHTML(`<pluto/>`))

let s = ['expected', 'test', 1], 0;
console.log(s)
