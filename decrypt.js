const alphabet = ["a","á","b","c","d","e","é","f","g","h","i","j","k","l","m","n","o","ó","ö","ő","p","q","r","s","t","u","ú","ü","ű","v","w","x","y","z",".","!","?"];
const code = process.argv.splice(2).join(" ");
const parsedCode = JSON.parse(code);
let decodedWords = [];
//[]üzenet []szó []karakter

for (let word of parsedCode) {
    let decodedLetters = [];
    for (char of word) {
        decodedLetters.push(char[0] == 0 ? alphabet[char[1]] : alphabet[char[1]].toUpperCase());
    }
    decodedWords.push(decodedLetters.join(""));
}
const message = decodedWords.join(" ");


console.log(message);