class Vigenere {
    constructor(arg = true) {
        if (arg == true) this.machine = 'direct';
        else this.machine = 'riverse';

        this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.square = [];
        this.generateSquare()
    }
    // Генерируем квадрат Виженера
    generateSquare() {
        for (let i = 0; i < this.alphabet.length; i++) {
            let row = this.alphabet.slice(i);
            row += this.alphabet.slice(0, i);
            this.square.push(row);
        }
    }
    // Дублируем ключ до длины сообщения
    repeatKey(key, message) {
        let resultString = "";
        // Длина финальной строки
        let firstStringLength = key.length;
        let it = 0;
        for (let i = 0; i < message.length; i++) {
            if (i % firstStringLength === 0) {
                it = 0;
            }
            resultString += key[it];
            it++;
        }
        return resultString;
    }
    reverseString(str) {
        return str.split("").reverse().join("");
    }

    encrypt(msg, key_orig) {
        if (arguments.length != 2) throw new Error('Incorrect arguments!');
        let message = msg.toUpperCase()
        let key = key_orig.toUpperCase()
        let encryptMessage = "";

        let newKey = this.repeatKey(key, message);
        let idx_key = 0;
        for (let it = 0; it < message.length; it++) {
            let i = this.alphabet.indexOf(message[it]);
            if (i == -1) {
                encryptMessage += message[it];
                continue
            }
            let j = this.alphabet.indexOf(newKey[idx_key]);
            encryptMessage += this.square[i][j];
            idx_key++;

        }
        if (this.machine == 'direct') return encryptMessage;
        else return this.reverseString(encryptMessage);
    }

    decrypt(msg, key_orig) {
        if (arguments.length != 2 || !arguments[0]) throw new Error('Incorrect arguments!');
        let message = msg.toUpperCase()
        let key = key_orig.toUpperCase()
        let decryptMessage = "";
        let newKey = this.repeatKey(key, message);
        let idx_key = 0;

        for (let it = 0; it < message.length; it++) {
            let i = this.alphabet.indexOf(newKey[idx_key])
            let j = this.square[i].indexOf(message[it]);
            if (j == -1) {
                decryptMessage += message[it];
                continue;
            }
            decryptMessage += this.alphabet[j];
            idx_key++
        }
        if (this.machine == 'direct') return decryptMessage;
        else return this.reverseString(decryptMessage);
    }
}

const v = new Vigenere();
console.log(v.encrypt("attack at dawn!", "alphonse"))
console.log(v.decrypt(undefined, 'key'))

//IXZBHSDZQ");