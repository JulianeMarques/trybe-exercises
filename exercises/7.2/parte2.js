const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const adicionaTurno = (obj, key, value) => {
      obj[key] = value;
  };

  adicionaTurno(lesson2, 'turno', 'noite');

  // --

  const listKeys = (obj) => Object.keys(obj);
  console.log(listKeys(lesson1));

  // --

  const sizeObj = (obj) => Object.keys(obj).length;
  console.log(sizeObj(lesson1));

  // --

  const listValue = (obj) => Object.values(obj);
  console.log(listValue(lesson3));

  // --

  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
  console.log(allLessons);

  // --

  const numeroTotalEstudantes = (obj) => {
      let total = 0;
      const array = Object.keys(obj);
      for (index in array) {
          total += obj[array[index]].numeroEstudantes;
      }
      return total;
  }

  console.log(numeroTotalEstudantes(allLessons));

  // --

  const valorDaChave = (obj, number) => Object.values(obj)[number];
  console.log(valorDaChave);

  // --

  const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));