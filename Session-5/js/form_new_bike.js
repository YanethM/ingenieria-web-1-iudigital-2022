function captureData(){
    let product = document.getElementById("product_name").value
    let cant_prod = document.getElementById("product_cant").value
    document.getElementById("result-product").innerHTML = product
    document.getElementById("result-cant-product").innerHTML = cant_prod

}