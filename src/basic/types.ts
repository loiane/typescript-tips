function contarCharNome1(obj: any) {
    return obj.nome.length;
}

function contarCharNome(obj: {nome: string}) {
    return obj.nome.length;
}

const pessoa = { nome: 'Maria', idade: 20 };
const pet = { nome: 'Rex', raca: 'pug' };

console.log(contarCharNome(pessoa));
console.log(contarCharNome(pet));