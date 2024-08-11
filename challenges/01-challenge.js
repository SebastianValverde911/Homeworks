function checkNumberRegular(number) {
    console.log(number % 2 === 0 ? `El numero ${number} es par` :`El numero ${number} es impar`);
}

const checkNumberArrow = (number) => {
    if (number % 2 === 0) {
        console.log(`el numero ${number} es par`);
    } else {
        console.log(`el numero ${number} es impar`);
    }
};


checkNumberArrow(7);  
checkNumberRegular(4);  