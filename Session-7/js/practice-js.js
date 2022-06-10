/* Definir variables en Javascript: var, let, const */
/* string */
let user_name = "Pedro";
/* number */
user_name = 16;

/* ========================Tipos de colecciones ==================== */
/* array */
user_name = [];
/* objecto */
user_name = {};
/* set */
user_name = [];

user_name = undefined;
user_name = null;
user_name = function (/* parametros */) {
  /* instrucciones */
};

console.log(user_name);

/* ==========================Colecciones========================== */
/* Objecto */
/* El objeto inmutable */
const x = {};
const y = { key: "y" };
const z = { key: "z" };
x[y] = 123;
x[z] = 456;
console.log(x[y], x[z]);

/* ==========================Funciones============================ */

/* ==========================Anónima============================
            No tiene un nombre después del function                */
const show_saludo = function () {
  console.log("Hello from function");
};
show_saludo();

/* ==========================Flecha============================ 
            No utiliza la palabra reservada function               */
const show_saludo_arrow = () => {
  console.log("Hello from function");
};
show_saludo_arrow();

const info_user = function () {
  console.log("Estoy dentro de la función");
  const person = {
    myName: "Yaneth",
    age: 31,
    city: "Manizales",
  };
  /* Mostrar todo el contenido del objeto */
  console.log(Object.entries(person));
};
info_user();

const arrays_functions = function () {
  const set = new Set(["Yaneth", "Mejía"]);

  /* Consultar si contiene un valor 
    Si si lo tiene devuelve true
    de lo contrario devuelve false*/
  console.log(set.has("Yaneth"));

  /* Añadirle un nuevo valor al final */
  console.log(set.add("Rendón"));

  /* Eliminar un valor dentro del set */
  set.delete("Mejía");
  console.log(set);

  /* Convertir el set en un array */
  const arrayFromSet = Array.from(set);
  console.log(arrayFromSet);
  console.log(Array.from(arrayFromSet.keys()));
  console.log(Array.from(arrayFromSet.values()));
  console.log(Array.from(arrayFromSet.entries()));
};
arrays_functions();

/* ==========================Filter, map y reduce=========================== */
/* =================================Filter================================ */

const numberArrays = [20, 0, 12, -3, 14, -8, 0, -4];
/* 
    2 == "2" true, se compara valor pero no tipo de dato
    2 === "2" false, se compara valor y tipo de dato
*/
/* Obtener los valores pares positivos del array */
const positive_even_numbers = function (number) {
  if (number % 2 === 0 && number > 0) return true;
  return false;
};

console.log(numberArrays.filter(positive_even_numbers));

/* Sobreescribimos la función anterior */
const numberArrays2 = [20, 0, 12, -3, 14, -8, 0, -4];
console.log(
  numberArrays2.filter((number) => {
    if (number % 2 === 0 && number > 0) return true;
    return false;
  })
);

/* =================================Map================================ */
/* Se aplica una operaciòn sobre cada uno de los items del array original 
sin modificar el original */
console.log(
  numberArrays2.map((numeroCuadrado) => {
    return numeroCuadrado * numeroCuadrado;
  })
);

console.log(numberArrays2);

/* =================================Reduce================================ */
console.log(
  numberArrays2.reduce((total_valores_array, num) => {
    return total_valores_array + num;
  })
);
