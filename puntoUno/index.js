class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    data = [];
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(node) {
        const newNode = new Node(node);

        if(!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }

        this.tail = newNode;
    }

    peek(value, current = this.head) {
        if(this.head === null) {
            return false
        }

        if(current !== null) {
            if(current.value === value) {
                return true;
            } else {
                return this.peek(value,current.next);
            }
        }

        return false;
    }

    size(current = this.head, acum = 1) {
        if(this.head === null) {
            return 0
        }
        
        if(current.next !== null) {
            return this.size(current.next, acum = acum + 1);
        }

        return acum;
    }

    remove(value, current = this.head) {
        if(this.head === null) {
            return false;
        }

        if(this.head.value === value) {
            return this.head = this.head.next;
        }

        if(current.next !== null) {
            if(current.next.value === value) {
                current.next = current.next.next;
                return true;
            } else {
                return this.remove(value,current.next);
            }
        }
    }

    print() {
        let node = this.head;
        while(node != null) {
            this.data.push(node.value);
            console.log(`valor ${node.value} | Next: ${node.next?.value || null}`);
            node = node.next
        }
    }

}

function listsTogether(one, two) {
    one.sort(function (a, b) {
        return b - a;
    });
    console.log(one);
    
    two.sort(function (a, b) {
        return b - a;
    });
    console.log(two)
    
    let ListConcat = one.concat(two);
    
    ListConcat.sort(function (a, b) {
        return a - b;
    });

    const listTogether = new LinkedList();

    ListConcat.forEach(element => {
        listTogether.append(element);
    });

    listTogether.print();
    console.log(ListConcat);
    
}


const listOne = new LinkedList();
const listTwo = new LinkedList();

listOne.append(8);
listOne.append(11);
listOne.append(14);
listOne.append(5);
listOne.append(6);
listOne.append(15);
listOne.append(2);
listOne.append(10);
listOne.append(3);
listOne.append(1);

listTwo.append(20);
listTwo.append(19);
listTwo.append(17);
listTwo.append(16);
listTwo.append(12);
listTwo.append(9);
listTwo.append(7);
listTwo.append(13);
listTwo.append(4);
listTwo.append(12);

console.log(listOne.print());
console.log(listTwo.print());

listsTogether(listOne.data,listTwo.data);
console.log("*********************************************************");