/*
======================================Forma I: var======================================
No utilizar var para declarar variables */
/* user_name: string */
var user_name = "Yaneth";

/* lastname: string */
var lastname = "Mejía";

/* user_age: number */
var user_age = 31;

/* active_user: boolean */
var active_user = true;

/* user_age: number */
var user_weight = 48.6;
console.log("Nombre del usuario:" + user_name + " " + lastname);
console.log(
  "Nombre del usuario:" + user_name + "\nTiene " + user_age + " años"
);
/* backticks => comillas invertidas */
console.log(
  `Nombre del usuario: ${user_name} ${lastname}\nTiene: ${user_age} años \nPesa ${user_weight} kilos`
);

/* ======================================Forma II: let===================================== */
let superhero = "Batman";
let real_name = "Bruce Wayne";
let marital_status_single = true;
let billionare = true;

/* Array que contiene 2 string */
let collection_cars1 = ["Batimovil", "lamborghini"];
console.log(
  `Superheroe ${superhero} cuyo nombre de pila es ${real_name} 
  tiene los siguientes automóviles ${collection_cars1[1]}`
);
/* Array que contiene 2 objectos
Estructura de un array:
    [tipo_dato, tipo_dato] [string, number, array[{},{}], boolean, string]
Estructura de un objeto: 
    {key:value} 
    */
let collection_cars2 = {
  model: "Batimovil",
  color: "Black",
  price: 15000,
  currency_type: "USD",
  accessories: {
    radio: true,
    pathfinder_lights: true,
  },
};

/* Hay un problema cuando el objeto contiene o anida otro objeto */
for (const [key, value] of Object.entries(collection_cars2)) {
  console.log(`Salida generada en el for ${key}: ${value}`);
}

console.log(
  `Superheroe ${superhero} cuyo nombre de pila es ${real_name} 
    tiene los siguientes automóviles ${collection_cars2.model} 
    y tiene los siguientes accesorios ${collection_cars2.accessories.radio} `
);

console.log(
  `Values: ${Object.values(collection_cars2)} 
  Claves: ${Object.keys(collection_cars2)}
  Claves y values: ${Object.entries(collection_cars2)}`
);

let collection_cars3 = {
  model: "Batimovil",
  color: "Black",
  price: 15000,
  currency_type: "USD",
  accessories: ["radio", "pathfinder_lights"],
};

console.log(
  `==============================================================
  Los  automóviles ${collection_cars3.model} 
tienen los siguientes accesorios ${collection_cars3.accessories} `
);

let collection_cars4 = [
  { model: "Batimovil", color: "Black", price: 15000, currency_type: "USD" },
  { model: "lamborghini", color: "Red", price: 23000, currency_type: "USD" },
];
/* ======================================Forma III: const===================================== */
