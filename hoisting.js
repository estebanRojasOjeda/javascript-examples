
/*
Cuando enviamos JavaScript al navegador para que se ejecute, el intérprete lo divide en dos pasos.
Primero, analiza el código y garantiza que sea una sintaxis compatible con JavaScript viable. 
En segundo lugar, ejecuta el código. 
Puedes pensar que tu código se ejecuta línea por línea, pero con JavaScript, este no es siempre el caso. 
Es común que incluso los desarrolladores experimentados no comprendan completamente las reglas de elevación,
pero es importante para escribir JS limpio.

Reglas clave de elevación
• Las declaraciones variables ( var) se elevan a la parte superior de su alcance como globos de aire caliente.
• Las funciones crean su propio alcance y actúan como jaulas, evitando que se eleven las declaraciones.
• Las asignaciones o signos = actúan como anclas. Se quedan, sin importar cómo se reorganice el código.
• let y const no se eleva, y arrojará un error si se llama antes de que se declaren. 
    const incluso arrojará un error de sintaxis si se llama antes de ser asignado.
*/


//var example
console.log(example);
var example = "I'm developer learing JavaScript Bro!";
//R: undefined

//let example
console.log(example);
let example = "I'm developer learing JavaScript Bro!";
//R: ReferenceError: Cannot access 'example' before initialization
//  at Object.<anonymous> (C:\Users\erojas\Documents\esteban\hoisting.js:7:13)


//1
console.log(hello);
var hello = 'world';
//undefined


//2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
//magnet

//3
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// super cool

//4
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//half-chicken

//5
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//TypeError: mean is not a function

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//undeined
//rock
//r&b
//disco


//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//san jose
//seatle
//burbank
//san jose

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

/*
{ name: 'Chicago', students: 65, hiring: true }
C:\Users\erojas\Documents\esteban\hoisting.js:122
        dojo = "closed for now";
             ^

TypeError: Assignment to constant variable.
*/

