interface Contato {
    nome: string;
    idade: number;
    cpf: string;
}

type ContatoParcial = Partial<Contato>;

function atualizarPessoa(objAtualizar: Contato, atualizacoes: ContatoParcial) {
    return { ... objAtualizar, ...atualizacoes };
}

// inferencia de tipos
let joao = {
    nome: 'João',
    idade: 20,
    cpf: '1234567890'
}

const joaoMaiorDeIdade = {
    idade: 21
}

joao = atualizarPessoa(joao, joaoMaiorDeIdade);