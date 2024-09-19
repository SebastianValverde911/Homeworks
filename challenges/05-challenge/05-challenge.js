import Node from "./Node";
class BinaryTree {
    constructor() {
        this.root = null;
    }

    search(value, node = this.root) {
        if(!this.root) {
            return null;
        }

        if(this.root.value === value) {
            return this.root;
        } else {
            const children = node.children;
            const inChildren = children.find(item => item.value === value);
            if(inChildren) {
                return inChildren;
            } else {
                let hasChild;
                children.forEach(item => {
                    if(hasChild) {
                        return;
                    }

                    hasChild = this.search(value,item);
                })
                return hasChild;
            }
        }
    }

    insert(nombre,cumple,childs, parent) {
        const newMode = new Node(nombre,cumple,childs);

        if(!parent) {
            if(!this.root) {
                this.root = newMode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search(parent);
            parentNode.children.push(newMode);
        }
    }
}