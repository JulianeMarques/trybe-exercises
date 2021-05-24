function createStateOptions() {
    let states = document.getElementById('state');
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  
    for (let index = 0; index < stateOptions.length; index += 1) {
      let createOptions = document.createElement('option');
      states.appendChild(createOptions).innerText = stateOptions[index];
      states.appendChild(createOptions).value = stateOptions[index];
    }
  }

  let inputs = {
    name: {
      maxLength: 40,
      required: true,
    },
    email: {
      maxLength: 50,
      required: true
    },
    cpf: {
      maxLength: 11,
      required: true
    },
    address: {
      maxLength: 200,
      required: true
    },
    city: {
      maxLength: 28,
      required: true,
    },
    state: {
      type: 'select',
      required: true,
    },
    houseType: {
      type: 'radio',
      required: true,
    },
    resume: {
      maxLength: 1000,
      required: true,
    },
    role: {
      maxLength: 40,
      required: true,
    },
    roleDescription: {
      maxLength: 500,
      required: true,
    },
    startDate: {
      type: 'date',
      required: true,
    }
  }

  function defaultValidation(input, name){
    let trimmed = input.value.trim();
    let validation = inputs[name];
  
    if(validation.required && trimmed.length === 0){
      return false;
    }
  
    if(validation.maxLength && trimmed.length > validation.maxLength){
      return false;
    }
    
  
    return true;
  }

  function defaultValidation(input, name){
    let trimmed = input.value.trim();
    let validation = inputs[name];
  
    if(validation.required && trimmed.length === 0){
      return false;
    }
  
    if(validation.maxLength && trimmed.length > validation.maxLength){
      return false;
    }
    
  
    return true;
  }
  
  