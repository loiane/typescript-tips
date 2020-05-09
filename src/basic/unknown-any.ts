let resultado: unknown;

resultado = {
    nome: 'Maria',
    idade: 20
};

function contarCharNome3(obj: any) {
    return obj.nome.length;
}

function contarCharNome2(obj: unknown) {
    // return obj.nome.length;
}