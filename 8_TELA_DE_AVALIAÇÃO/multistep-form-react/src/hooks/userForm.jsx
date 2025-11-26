import {useState} from "react";




export function userForm(steps){

    const [currentStep, setCurrentStep] = useState(0)

    return{
        currentStep,
        currentComponent: steps[currentStep],

    };
}

/*
1. A função userForm recebe steps como parâmetro

steps normalmente é um array de componentes, algo assim:

const formComponents = [
  <UserForm />,
  <ReviewForm />,
  <Thanks />
];


Ou seja, cada item do array é uma etapa do formulário.

📌 2. useState(0) cria o estado currentStep
const [currentStep, setCurrentStep] = useState(0)

currentStep → guarda qual etapa do formulário está ativa

setCurrentStep → função para mudar a etapa

0 → significa que começa na primeira etapa

Então se currentStep = 1, por exemplo, o formulário está na segunda etapa.

📌 3. A função retorna dois valores essenciais
return {
    currentStep,
    currentComponent: steps[currentStep],
}


Explicando:

✔ currentStep

É o número da etapa atual, exemplo:

0 = primeira etapa
1 = segunda etapa
2 = terceira etapa

✔ currentComponent

É o componente correspondente à etapa atual.

Exemplo:

steps[currentStep]


Se currentStep = 1, então currentComponent = steps[1].

Ou seja: retorna automaticamente o componente correto dependendo da etapa.
*/