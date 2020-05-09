class Animal {
    desc: string;
}

class Estimacao extends Animal {
    nome: string;

    getCorColeira() { }
}

function imprimeColeiraPet(animal: Animal) {
    if (animal instanceof Estimacao) {
        console.log(animal.getCorColeira());
    }
}

// function eDeEstimacao(animal: Animal): animal is Estimacao {
//     return animal instanceof Estimacao;
// }

// function imprimeColeiraPet2(animal: Animal) {
//     if (eDeEstimacao(animal)) {
//         console.log(animal.getCorColeira());
//     }
// }