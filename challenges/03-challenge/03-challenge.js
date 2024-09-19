class Stack {
    constructor(){
        this.stack = {};
        this.count = 0;
    }

    push(data){
        this.stack[this.count] = data;
        this.count ++;
        return this.stack;
    }

    pop() { 
        this.count--;
        const element = this.stack[this.count];
        delete this.stack[this.count];
        return element;
    }

    peek() {
        return this.stack[this.count - 1];
    }

    size() {
        return this.count;
    }

    print() {
        console.log(this.stack);
    }

}
const stack = new Stack();
stack.push({"name":"Vampyr","isbn":"9780523480107","author":"Carolina Andujar","editorial":"norma"});
stack.push({"name":"Pinocho","isbn":"9786074535723","author":"Carlo collodi","editorial":"norma"});

console.log("cantidad en el objeto: "+stack.size());
console.log("El ultimo agregado: "+ JSON.stringify(stack.peek()));
stack.print();
console.log("Este es el elemento eliminado: "+JSON.stringify(stack.pop()));
stack.print();