// const fileNameArray = fullNameArray.filter((el,i)=> i !== fullNameArray.length-1);
//this._filename = fileNameArray.join('.');
//this._extension = fullNameArray[fullNameArray.length-1];
class File {
    constructor(fullName, contents){
        const fullNameArray = fullName.split('.');
        this._fullName = fullName;
        this._contents = contents;

        this._extension = fullNameArray.pop();
        this._filename = fullNameArray.join('.');

        this._currentLineToRead = 0;
        this._currentCharToRead = 0;
    }
    get fullName(){
        return this._fullName;
    }
    get filename(){
        return this._filename;
    }
    get extension(){
        return this._extension;
    }
    getContents(){
        return this._contents;
    }
    write(str){
        // this._contents = `${this._contents}\n${str}`;
        this._contents = `${this._contents.length ? this._contents+'\n':''}${str}`;
    }
    gets(){
        return this._contents.split('\n')[this._currentLineToRead++];
    }
    getc(){
        return this._contents[this._currentCharToRead++];
    }
}

var file1 = new File("hello_world.txt", "Hello World");
console.log(file1.filename); // "hello_world"
file1.filename = "goodbye_world"; // Reassignment should fail
console.log(file1.filename); // still "hello_world"

var file2 = new File("class.phptester.php", "<?php /* Some PHP code here */ ?>");
console.log(file2.filename);

var fileWithComplexName = new File("alpha.beta.gamma.delta.txt", "alpha beta gamma delta");
console.log(fileWithComplexName.extension); // "txt"
fileWithComplexName.extension = "js"; // Reassignment should fail
console.log(fileWithComplexName.extension); // still "txt"

var myFile = new File("hello.txt", "Hello World\nHello World");
console.log(myFile.getContents()); // "Hello World\nHello World"

var myFile = new File("example.txt", "");
console.log(myFile.getContents()); // ""
myFile.write("Line 1");
console.log(myFile.getContents()); // "Line 1"
myFile.write("Line 2");
console.log(myFile.getContents()); // "Line 1\nLine 2"
myFile.write("Line 3");
console.log(myFile.getContents()); // "Line 1\nLine 2\nLine 3"

var myFile = new File("example.txt", "Line 1\nLine 2\nLine 3\nLine 4\nLine 5");
console.log(myFile.gets()); // "Line 1"
console.log(myFile.gets()); // "Line 2"
console.log(myFile.gets()); // "Line 3"
console.log(myFile.gets()); // "Line 4"
console.log(myFile.gets()); // "Line 5"
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined
console.log(myFile.gets()); // undefined

var myFile = new File("Lorem Ipsum.txt", "Lorem ipsum dolor sit amet, adispicing eu.");
console.log(myFile.getc()); // "L"
console.log(myFile.getc()); // "o"
console.log(myFile.getc()); // "r"
console.log(myFile.getc()); // "e"
console.log(myFile.getc()); // "m"
console.log(myFile.getc()); // " "
console.log(myFile.getc()); // "i"
console.log(myFile.getc()); // "p"
// ... (many calls to myFile.getc())
console.log(myFile.getc()); // undefined (when number of calls exceeds character count)
