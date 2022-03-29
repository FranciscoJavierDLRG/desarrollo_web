// Ejemplos de declaración de variables en Javascript



// -----------------------------------------------------------------
// -----------------------------------------------------------------
// 1. La variable declarada con let no la veremos fuera del bloque {}
// -----------------------------------------------------------------
if (true) {
    let saludo = 'hola';
}
console.log(saludo);



// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// 2. Una variable delcarada con var si sera accesible fuera del bloque {}
// ----------------------------------------------------------------------
if (true) {
    var saludo = 'hola';
}
console.log(saludo);


// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// 3. La variable declarada con let dentro de una funcion no sera accesible fuera de ella
// -------------------------------------------------------------------------------------
function Hola() {
    let saludo = 'hola';
}
Hola();
console.log(saludo);

// -------------------------------------------------------------
// -------------------------------------------------------------
// 4. El ambito de las variables declaradas con var es de funcion
// -------------------------------------------------------------
function Hola() {
    var saludo = 'hola';
}
Hola();
console.log(saludo);


// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------
// 5. Si dentro de la funcion omitimos la palabra clave var, la variable sera global
// --------------------------------------------------------------------------------
function Hola() {
    saludo = 'hola';
}
Hola();
console.log(saludo);


// ------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------
// 6. Hoisting(Elevacion) las declaraciones con var son elevadas al inicio de la funcion
// ------------------------------------------------------------------------------------
function saludar() {
    frase = 'hola';
    console.log(frase);
    var frase;
}
saludar();


// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// 7. Hoisting. Solo se elevara la declaracion, la asigacion se quedara donde este.
// -------------------------------------------------------------------------------
function saludar() {
    console.log(frase);
    var frase='Hola';
}
saludar();


// -----------------------------------------------------------------------------------
// 8 Hoising. Elevacion incluso si la declaracion sucede dentro de un bloque de codigo
// -----------------------------------------------------------------------------------
function saludar() {
    frase='Hola';
    console.log(frase);
    if (false) {
        var frase;
    }
}
saludar();


// ------------------------------------------------------------------------------------
// 9 La segunda variable declarada con let solo sera visible dentro de su propio bloque
// ------------------------------------------------------------------------------------
let vers = '1';
console.log(vers);

if (true) {
    let vers = '2';
    console.log(vers);
}
console.log(vers);


// ------------------------------------------
// 10 Ambito de funcion en variables declaradas con var
// ------------------------------------------
var ver = '1';
console.log(ver);

function miFuncion() {
    var ver = '2';
    console.log(ver);
}

miFuncion();
console.log(ver);

