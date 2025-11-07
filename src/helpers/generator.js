const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = lowercase.toUpperCase();
const special = '!#$%&*';
const numbers = '0123456789';

export const createPassword = (reqs) => {
    const lowChars = reqs.length - reqs.uppChars - reqs.spChars - reqs.numChars;
    const pw = getRandomStr(reqs.uppChars, uppercase).concat(getRandomStr(lowChars, lowercase), getRandomStr(reqs.spChars, special), getRandomStr(reqs.numChars, numbers));
    
    return shuffle(pw);
}

const shuffle = (str) => {
    const arr = str.split('');
    
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1 ));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    return arr.join('');
}

const getRandomIndex = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomStr = (occ, str) => {
    let randStr = '';

    for (let i = 0; i < occ; i++) {
        randStr += str.charAt(getRandomIndex(0, str.length - 1));
    }
    
    return randStr;
}