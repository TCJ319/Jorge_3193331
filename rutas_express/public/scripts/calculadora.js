<<<<<<< HEAD
function agregarPantalla(value){
    document.getElementById("pantalla").value+=value;
}
function limpiarPantalla(){
    document.getElementById("pantalla").value="";
}
function calcular(){
    try{
        let result =eval( document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = result;

    }catch (error){
        document.getElementById("pantalla").value = "Error";

    }
=======
function agregarPantalla(value){
    document.getElementById("pantalla").value+=value;
}
function limpiarPantalla(){
    document.getElementById("pantalla").value="";
}
function calcular(){
    try{
        let result =eval( document.getElementById("pantalla").value);
        document.getElementById("pantalla").value = result;

    }catch (error){
        document.getElementById("pantalla").value = "Error";

    }
>>>>>>> 1d5c8d8af510a451a8aa57dc67b6d77d17c4ed86
}