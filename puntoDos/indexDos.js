class NodeParcial {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    isLeaf() {
        if(this.left == null && this.right == null) {
            return true;
        } else {
            return false;
        }
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new NodeParcial(value,null,null);

        if(!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            let isFound = false;

            while(!isFound) {
                if(current.value === value) {
                    isFound = true;
                    return null
                }
                if(current.value > value) {
                    if(!current.left) {
                        current.left = newNode;
                        isFound = true
                        return this
                    } else {
                        current = current.left
                    }
                } else {
                    if(!current.right) {
                        current.right = newNode
                        isFound = true
                        return this
                    } else {
                        current = current.right
                    }
                }
            }
        }
    }

    preOrder(node = this.root) {
        if(!node) {
            return;
        }

        //console.log(node.value);
        this.preOrder(node.left);
        this.preOrder(node.right);

    }

    postOrder(node = this.root) {
        if(!node) {
            return;
        }

        this.postOrder(node.left);
        this.postOrder(node.right);
        //console.log(node.value);
    }

    inOrder(node = this.root) {
        if(!node) {
            return
        }

        this.inOrder(node.left);
        //console.log(node.value);
        this.inOrder(node.right);
    }

    calcularAltura(node = this.root) {

        if (!node) {
            return -1;
        }

        const alturaIzquierda = this.calcularAltura(node.left);
        const alturaDerecha = this.calcularAltura(node.right);
        let alturaMaxima;

        if (alturaIzquierda > alturaDerecha) {
            alturaMaxima = alturaIzquierda;
            console.log("Izqui", alturaIzquierda);
        } else {
            alturaMaxima = alturaDerecha;
            console.log("Derecha "+ alturaDerecha);
        }
        console.log("Altura arbol "+alturaMaxima);
        return 1 + alturaMaxima;
    }
}


const a = new BinaryTree();

a.insert(25)
a.insert(15)
a.insert(50)
a.insert(10)
a.insert(22)
a.insert(35)
a.insert(70)
a.insert(11)
a.insert(12)
a.insert(18)
a.insert(44)
a.insert(64)
a.insert(66)
a.insert(90)


a.preOrder()
a.postOrder()
a.inOrder()

console.log("Altura: "+a.calcularAltura());