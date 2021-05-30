// exercicio 1

testingScope = (escopo) => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }

  }

  testingScope(true);

  // exercicio 2

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortOddsAndEvens = () => {
    oddsAndEvens[0] = 2;
    oddsAndEvens[1] = 3;
    oddsAndEvens[2] = 4;
    oddsAndEvens[3] = 7;
    oddsAndEvens[4] = 10;
    oddsAndEvens[5] = 13;
  
    return oddsAndEvens;
  }
  
  const sortedArray = sortOddsAndEvens();
  console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

  //bonus

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

// parte 2
// exericio factorial

const factorial = number => {
    let result = 1

    for (let index = 2; index <= number; index +=1) {
        result *= index;
    }

    return result
}

console.log(factorial(4))

// exercicio 2

const longestWord = text => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray) {
    if(word.length > maxLength) {
      maxLength = word.length
      result = word
    }
  }
  return result
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu xablaublaublau"))