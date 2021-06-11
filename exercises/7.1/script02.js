const factorial = number => {
    let result = 1

    for (let index = 2; index <= number; index += 1) {
        result += index
    }

    return result
}

console.log(factorial(5));

// -- 

const longestWord = (text) => {
    let wordArray = text.split(' ');
    let maxLength = 0;
    let result = '';

    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word
        }
    }
    return result;
}

console.log(longestWord('ANtonio foi ao banheiro e nao sabemos o que aconteceu'));