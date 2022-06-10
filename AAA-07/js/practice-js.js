/* Versiones de JavaScript => JS => ES5 => ES6 => ES8 => TypeScript  */

/* =========================== 1. Tipos de datos ===========================*/
/* Para declarar variables: var, let, const */

/* var user_name: string */
var user_name = "Yaneth";
var lastname = "Mejía";

/* var name = number */
var user_age = 31;
var user_weigth = 48.6;

/* var name = boolean */
var user_active = true;

/* Collections in javascript
        array = []
        objects = {key: value}
*/
var user_pets_array = ["dog", "cat", "bird", "turtle"];

var user_data_object = {
  /* key: "value" */
  name: "Yaneth",
  lastname: "Mejía",
  age: 31,
};

/* Objeto que contiene string, string, number, array */
var user_data_object2 = {
  /* key: "value" */
  name: "Yaneth",
  lastname: "Mejía",
  age: 31,
  pets: ["dog", "cat", "bird"],
  pets_array: user_pets_array,
};

/* Objeto que contiene arrays */
var info_cellphone = {
  samsung: ["Modelo1", "Capacidad1", "TipoCamara1", "Color1"],
  apple: ["Modelo2", "Capacidad2", "TipoCamara2", "Color2"],
  lg: ["Modelo3", "Capacidad3", "TipoCamara3", "Color3"],
};

var info_cellphone2 = {
  samsung: {
    modelo: "AB1",
    capacidad: "8GB",
    tipoCamara: "16MG Pixeles",
    color: "Gris",
  },
  apple: {
    modelo: "Apple 13",
    capacidad: "16GB",
    tipoCamara: "16MG Pixeles",
    color: "Blanco",
  },
  lg: {
    modelo: "LG1",
    capacidad: "8GB",
    tipoCamara: "16MG Pixeles",
    color: "Gris",
  },
};

console.log(
  user_name +
    " " +
    lastname +
    " " +
    user_age +
    " " +
    user_weigth +
    " " +
    user_active
);
console.log(
  user_name +
    "\n" +
    lastname +
    "\n" +
    user_age +
    "\n" +
    user_weigth +
    "\n" +
    user_active
);
console.log(
  "El usuario " +
    user_name +
    " " +
    lastname +
    " tiene " +
    user_age +
    " años y pesa " +
    user_weigth +
    "kg y su estado es " +
    user_active
);
/* backticks */
console.log(
  `El usuario ${user_name} ${lastname} tiene ${user_age} años \nPesa ${user_weigth} kilogramos.\nEstado en el sistema: ${user_active}`
);

/* Imprimir los valores contenidos en un array */
console.log(`Array de mascotas: ${user_pets_array}`);
console.log(
  `Imprimir la mascota que esta en la primer posición del array: ${user_pets_array[0]}`
);
console.log(
  `Imprimir la mascota que esta en la última posición del array: ${
    user_pets_array[user_pets_array.length - 1]
  }`
);
var middle_index_array = Math.round((user_pets_array.length - 1) / 2);
console.log(middle_index_array);
console.log(
  `Imprimir la mascota que esta en el centro del array: ${user_pets_array[middle_index_array]}`
);

/* Imprimir los valores contenidos en un objeto */
console.log(
  `Nombre: ${user_data_object.name} \nApellido: ${user_data_object.lastname}\nEdad: ${user_data_object.age}`
);

/* Imprimir las llaves de un objeto */
console.log(Object.keys(user_data_object2))
/* Imprimir los valores asignados a los keys del objeto */
console.log(Object.values(user_data_object2))
/* Imprimir keys y values */
console.log(Object.entries(user_data_object2))

/* Imprimir un array contenido en clave de un objeto */
console.log(user_data_object2.pets);
console.log(user_data_object2.pets_array);

/* Recorrer objeto de celulares que contiene 3 arrays */
for(const clave_objeto in info_cellphone){
    console.log(`${clave_objeto}: ${info_cellphone[clave_objeto]}`);
}



