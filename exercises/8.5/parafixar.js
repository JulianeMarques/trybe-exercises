// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maçã', 'pêra'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['granola', 'aveia', 'mel'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const fruitSaladaWithAdditional = [...fruit, ...additional];
  return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = "Brazilian" } = person;

console.log(nationality)