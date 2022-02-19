//A Á B C Cs D Dz Dzs E É F G Gy H I Í J K L Ly M N Ny O Ó Ö Ő P Q R S Sz T Ty U Ú Ü Ű V W X Y Z Zs
const alphabet = ["a","á","b","c","d","e","é","f","g","h","i","j","k","l","m","n","o","ó","ö","ő","p","q","r","s","t","u","ú","ü","ű","v","w","x","y","z",".","!","?"];
//[1,1][0,1] [1,2][0,2]
const message = process.argv.splice(2).join(" ");
const words = message.split(" ");
let output = [];
for  (word of words) {
    let wordArray = [];
    for (let i = 0; i < word.length; i++) {
        char = word.charAt(i);
        data = makeChar(char);
        wordArray.push(data);
    }
    output.push(wordArray);
}

function makeChar(char) {
    return [char == char.toUpperCase() ? 1 : 0, alphabet.indexOf(char.toLowerCase())];
}

console.log(JSON.stringify(output));