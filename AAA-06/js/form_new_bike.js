function captura_valores() {
  /* Capturamos el valor que ingresa el usuario en el formulario */
  let product = document.getElementById("product_name").value;
  let cant_product = document.getElementById("cant_product").value;
  let stock = document.getElementById("product_stock").value;
  /* Imprimimos los valores almacenados en las variables anteriores */
  document.getElementById("product_n").innerHTML = product;
  document.getElementById("product_c").innerHTML = cant_product;
  document.getElementById("product_s").innerHTML = stock;
}
