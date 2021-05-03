// exercicio 1

//Duas formas de resolver o exercício
console.log('Bem-vinda, '+ info.personagem);

console.log('Bem-vinda, '+ info['personagem']);

// exercicio 2

//Duas formas de resolver o exercício
info.recorrente = 'Sim';

info['recorrente'] = 'Sim';

console.log(info);

// exercicio 3

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  for(let properties in info){
    console.log(properties);
  }

  // exercicio 4

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  for(let properties in info){
    console.log(info[properties]);
  }

  // exercicio 5

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let properties in info) {
    if (
      info[properties] === info.recorrente &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }



