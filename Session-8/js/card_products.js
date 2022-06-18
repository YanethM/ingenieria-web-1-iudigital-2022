const products = [
  {
    name: "Bicleta 1",
    image: "./assets/jpg/img1.jpg",
    price: 54000,
    quantity: 3,
  },
  {
    name: "Bicleta 2",
    image: "./assets/jpg/img2.jpg",
    price: 54000,
    quantity: 3,
  },
  {
    name: "Bicleta 3",
    image: "./assets/jpg/img3.jpg",
    price: 54000,
    quantity: 3,
  },
  {
    name: "Bicleta 1",
    image: "./assets/jpg/img1.jpg",
    price: 54000,
    quantity: 3,
  },
  {
    name: "Bicleta 2",
    image: "./assets/png/img2.png",
    price: 54000,
    quantity: 3,
  },
  {
    name: "Bicleta 3",
    image: "./assets/png/img3.png",
    price: 54000,
    quantity: 3,
  },
];

var listProducts = products.map(function(product){
  return '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/></head><body> <div class="card"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+product.image+'"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">'+product.name+'<i class="material-icons right">more_vert</i></span></div>'+'<div class="card-reveal"><span class="card-title grey-text text-darken-4">'+product.price+' '+product.quantity+'<i class="material-icons right">close</i></span></div></div></body><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script></html>'
})

        
document.getElementById("listProducts").innerHTML = listProducts;



