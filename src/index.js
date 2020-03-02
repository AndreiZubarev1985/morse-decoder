const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = expr.match(/.{1,10}/g);
    let result = str.map((item) => {
       let res = item.match(/.{1,2}/g);
       let res2 = res.filter(item => item !== '00').map((item) => {
           if(item === '10') return '.';
           if(item === '11') return '-';
           if(item === '**') return item;
       }).join('').split().map((item) => {
           if(item === '**********') return ' ';
        else  return MORSE_TABLE[item];
       });
       
        return res2;
    });
   
    return result.join('');
    

}

module.exports = {
    decode
}