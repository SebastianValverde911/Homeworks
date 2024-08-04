console.log("Hola mundo, Estos son los arrays que vamos a usar.");

let oneArray = [20,30,10,50,40,70,80,60,99,90];
let twoArray = ["sebastian","ana","carlos","brayan","daniela","erika","fernando","gabriela","hector","isabella"];

console.log(oneArray);
console.log(twoArray);

console.log("Aqui empezamos con los ejercicios");

/***************************************************************************************/
console.log("/****************************************concat***********************************************/");
console.log("concat");
console.log("Nos sirve para unir dos arrays");
let newArrayconcat = oneArray.concat(twoArray);
console.log(newArrayconcat);

/***************************************************************************************/
console.log("/******************************************copyWithin*********************************************/");
console.log("copyWithin");
console.log("Nos sirve para copiar elementos del array sin alterrar la cantidad del array")
console.log(oneArray);
console.log(oneArray.copyWithin(0,5));

/***************************************************************************************/
console.log("/******************************************entries*********************************************/");
console.log("entries");
console.log(oneArray);
console.log("Nos sirve como para sacar cada valor con su posicion")
let iterator = oneArray.entries();
for (let e of iterator) {
    console.log(e);
}

/***************************************************************************************/
console.log("/******************************************every*********************************************/");
console.log("every");
console.log(oneArray);
console.log("Nos sirve para comprobar una sentenia por cada uno retornando un boleano")
console.log(oneArray.every(element => element < 101)); 
console.log(oneArray.every(element => element > 101)); 

/***************************************************************************************/
console.log("/*****************************************fill**********************************************/");
console.log("fill");
console.log(oneArray);
console.log("Nos sirve para cambiar todos los elementos en un arreglo por un valor estatico desde el inicio");

console.log(oneArray.fill(6));



/***************************************************************************************/
let threeArray = [20,30,10,50,40,70,80,60,99,90];

console.log("/*****************************************filter**********************************************/");
console.log("filter");
console.log(threeArray);
console.log("Nos sirve para filtrar por una sentencia retornando un array donde estan los valores que cumplieron la sentencia");

console.log(threeArray.filter(element => element >= 50));

/***************************************************************************************/

console.log("/*****************************************find**********************************************/");
console.log("find");
console.log(threeArray);
console.log("Nos sirve para encontrar dando una sentencia retornando el valor del array");

console.log(threeArray.find(element => element === 50));

/***************************************************************************************/

console.log("/*****************************************findIndex**********************************************/");
console.log("findIndex");
console.log(threeArray);
console.log("Nos sirve para encontrar dando una sentencia retornando el indice o posicion del array");

console.log(threeArray.findIndex(element => element === 99));

/***************************************************************************************/

console.log("/*****************************************findLast**********************************************/");
console.log("findLast");
console.log(threeArray);
console.log("Nos sirve para encontrar dando una sentencia retornando el primer valor que corresponda a la sentencia");

console.log(threeArray.findLast(element => element <= 50));

/***************************************************************************************/

console.log("/*****************************************findLastIndex**********************************************/");
console.log("findLastIndex");
console.log(threeArray);
console.log("Nos sirve para encontrar dando una sentencia retornando el indice del primer valor que corresponda a la sentencia");

console.log(threeArray.findLastIndex(element => element <= 50));


/***************************************************************************************/

console.log("/*****************************************flat**********************************************/");
console.log("flat");
let flatArray = [5,6,[120,150,62,]]
console.log(flatArray);
console.log("crea una matriz con todos los elementos de sub-array cocatenandos recursivamente hasta la profundidad especificada");

console.log(flatArray.flat());

/***************************************************************************************/

console.log("/*****************************************flatMap**********************************************/");
console.log("flatMap");
console.log(threeArray);
console.log("primero mapea cada elemento usando una funcion de mapeo, luego aplana el resultado en una nueva matriz");

console.log(threeArray.flatMap(num => num === 50 ? [300,350]:1));


/***************************************************************************************/

console.log("/*****************************************forEach**********************************************/");
console.log("forEach");
console.log(threeArray);
console.log("Ejecuta la funcion indicada una vez por cada elemento del array");

console.log(threeArray.forEach(element => console.log(element)));

/***************************************************************************************/

console.log("/*****************************************includes**********************************************/");
console.log("includes");
console.log(threeArray);
console.log("Determina si una matriz incluye un determinado elemento (20), devuelve true o false segun corresponda");

console.log(threeArray.includes(20));

/***************************************************************************************/

console.log("/*****************************************indexOf**********************************************/");
console.log("indexOf");
console.log(threeArray);
console.log("retorna el primer indice en el que se puede encontrar un elemento (90) dado en el array, o retorna -1 si el elemento no esta presente.");

console.log(threeArray.indexOf(90));

/***************************************************************************************/

console.log("/*****************************************join**********************************************/");
console.log("join");
console.log(threeArray);
console.log("une todos los elementos de una matriz(o un objeto similar a una matriz) en una cadena y devuelve esta cadena");

console.log(threeArray.join());


/***************************************************************************************/

console.log("/*****************************************keys**********************************************/");
console.log("keys");
console.log(threeArray);
console.log("devuelve un nuevo objeto array iterator que contiene las claves para cada indice en el arreglo");

const keysIterator = threeArray.keys();

for (const key of keysIterator) {
  console.log(key);
}

/***************************************************************************************/

console.log("/*****************************************lastIndexOf**********************************************/");
console.log("lastIndexOf");
console.log(threeArray);
console.log("devuelve el ultimo indice en el que un cierto elemento puede encontrar en el arreglo o -1 si el elemento no se encontrara.");

console.log(threeArray.lastIndexOf(99));


/***************************************************************************************/

console.log("/*****************************************length**********************************************/");
console.log("length");
console.log(threeArray);
console.log("Nos ayuda a saber la cantidad de elementos que tiene un array");

console.log(threeArray.length);


/***************************************************************************************/

console.log("/*****************************************map**********************************************/");
console.log("map");
console.log(threeArray);
console.log("crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos");

console.log(threeArray.map(function(x){return x *2;}));

/***************************************************************************************/

console.log("/*****************************************pop**********************************************/");
console.log("pop");
console.log(threeArray);
console.log("elimina el ultimo elemento de un array y lo devuelve este metodo cambia la longitud del array");

console.log(threeArray.pop());
console.log(threeArray);

/***************************************************************************************/

console.log("/*****************************************push**********************************************/");
console.log("push");
console.log(threeArray);
console.log("añade uno o mas elementos al final de un array y devuelve la nueva longitud del array");

console.log(threeArray.push(300));
console.log(threeArray);

/***************************************************************************************/

console.log("/*****************************************reduce**********************************************/");
console.log("reduce");
console.log(threeArray);
console.log("ejecuta una funcion reductora sobrecada elemento de un array, devolviendo como resultado un unico valor");

const initialValue = 0;
const sumWithInitial = threeArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

/***************************************************************************************/

console.log("/*****************************************reduceRight**********************************************/");
console.log("reduceRight");
console.log(threeArray);
console.log("aplica una funcion simultanea contra un acumulador y cada elemento de un array (de derecha a izquierda) para reducirlo a un unico valor");

const initialValueRight = 0;
const sumWithInitialRight = threeArray.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValueRight,
);

console.log(sumWithInitialRight);

/***************************************************************************************/

console.log("/*****************************************reverse**********************************************/");
console.log("reverse");
console.log(threeArray);
console.log("invierte el orden de los elementos de un array. El primer elemento pasa a ser el ultimo y el ultimo pasa a ser el primero");


console.log(threeArray.reverse());

/***************************************************************************************/

console.log("/*****************************************shift**********************************************/");
console.log("shift");
console.log(threeArray);
console.log("Longitud antes de realizar el shift "+threeArray.length);
console.log("elimina el primer elemento del array y lo retorna. Este metodo modifica la longitud del array");


console.log(threeArray.shift());
console.log("Longitud despues de realizar el shift "+threeArray.length);

/***************************************************************************************/

console.log("/*****************************************slice**********************************************/");
console.log("slice");
console.log(threeArray);
console.log("devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin. El array original no se modificara.");


console.log(threeArray.slice(1,4));

/***************************************************************************************/

console.log("/*****************************************some**********************************************/");
console.log("some");
console.log(threeArray);
console.log("comprueba si al menos un elemento del array cumple con la condicion implementada por la funcion porporcionada");


console.log(threeArray.some(element => element % 2 === 0));


/***************************************************************************************/

console.log("/*****************************************sort**********************************************/");
console.log("sort");
console.log(threeArray);
console.log(twoArray);
console.log("ordena los elementos de un arreglo localmente y devuelve el arreglo ordenado.");


console.log(threeArray.sort());
console.log(twoArray.sort());


/***************************************************************************************/

console.log("/*****************************************splice**********************************************/");
console.log("splice");
console.log(twoArray);
console.log("cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos");


console.log(twoArray.splice(4,3));


/***************************************************************************************/

console.log("/*****************************************toLocaleString**********************************************/");
console.log("toLocaleString");
const array1 = [1, 'a', new Date('09 Nov 1997 14:12:00 UTC')];
console.log(array1);
console.log("devuelve una cadena de texto representando los elementos del array. Los elementos son convertidos a texto usando su metodo toLocaleString y dichos String son seperados por caracter especifico para la localidad");


console.log(array1.toLocaleString('en', { timeZone: 'UTC' }));


/***************************************************************************************/

console.log("/*****************************************toReversed**********************************************/");
console.log("toReversed");
console.log(threeArray);
console.log("retorna un nuevo arreglo con los elementos en un orden inverso");


console.log(threeArray.toReversed());

/***************************************************************************************/

console.log("/*****************************************toSorted**********************************************/");
console.log("toSorted");
console.log(threeArray);
console.log("Retorna un nuevo arreglo con los elementos organizados en orden ascendente");


console.log(threeArray.toSorted());

/***************************************************************************************/

console.log("/*****************************************toSpliced**********************************************/");
console.log("toSpliced");
console.log(twoArray);
console.log("retorna un nuevo arreglo con algunos elementos borrados y/o remplazados");


console.log(twoArray.toSpliced(1,0,"nombreNuevo"));

/***************************************************************************************/

console.log("/*****************************************toString**********************************************/");
console.log("toString");
console.log(twoArray);
console.log("retorna un string");


console.log(twoArray.toString());


/***************************************************************************************/

console.log("/*****************************************unshift**********************************************/");
console.log("unshift");
console.log(threeArray);
console.log("agrega elementos especificos al comienzo de una arreglo y devuelve la nueva longitud de la arreglo");


console.log(threeArray.unshift(4,5));
console.log(threeArray);

/***************************************************************************************/

console.log("/*****************************************values**********************************************/");
console.log("values");
console.log(twoArray);
console.log("retorna un nuevo array iterator");


const iteratorValues = twoArray.values();

for (const value of iteratorValues) {
  console.log(value);
}

/***************************************************************************************/

console.log("/*****************************************with**********************************************/");
console.log("with");
console.log(threeArray);
console.log("retorna un nuevo arreglo con el elemento en el indice dado reemplazado por el valor dado");


console.log(threeArray.with(2, 6));