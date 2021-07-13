var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('');
var number = 1234.004815;

var numberAry = number.toString().split('.');

var intPart = Number(numberAry[0]);
var decPart = number - intPart;

var intAry = [];
while (intPart > 0) {
    var mod = intPart % 64;
    intAry.unshift(chars[mod]);
    intPart = (intPart - mod) / 64;
}
console.log(intAry.join(''));

var decAry = [];
let count = 52;
let flag = false;
while (count > 0) {
    decPart = decPart * 64;
    const pro = parseInt(decPart, 10);
    if (pro !== 0) flag = true;
    decAry.push(chars[pro]);
    decPart = decPart - pro;
    count--;
    if (flag && decPart === 0) count = 0;
}

var rst = `${intAry.join('')}.${decAry.join('')}`;
console.log(rst);
