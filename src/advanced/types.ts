type Figura = 
    {tipo: 'circulo', raio: number} |
    {tipo: 'retangulo', a: number, l: number} |
    {tipo: 'quadrado', l: number};

function calcularArea(figura: Figura): number {
    switch(figura.tipo){
        case 'circulo': return Math.PI * figura.raio ** 2;
        case 'retangulo': return figura.a * figura.l;
        case 'quadrado': figura.l ** 2;
    }
    throw new Error('Figura inválida');
}     

// Pode evitar OO
interface Quadrado {
    lado: number;
}

type Retangulo = Quadrado & { lado2: number };

const retangulo: Retangulo = {
    lado: 1,
    lado2: 2
}


