class Node {
    constructor(value,birth,childs) {
        this.name = value;
        this.birthdate = birth;
        this.children = childs;
    }

    isLeaf() {
        if(this.children.length === 0) {
            return true;
        } else {
            return false;
        }
    }
}

export default Node;