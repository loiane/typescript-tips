class MinhaClasse {

    // ok usar
    constructor(public num1: number, public num2:number) {}
    
    // evitar usar
    public soma() {
        return this.num1 + this.num2;
    }
}