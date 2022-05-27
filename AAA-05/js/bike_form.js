function bike_data(){
    const brand_bike = document.getElementById("brand").value
    const cant_bike = document.getElementById("cant").value
    const stock_bike = document.getElementById("stock").value
    document.getElementById("invoce_bike").innerHTML = brand_bike + " " + cant_bike + " " + stock_bike
}