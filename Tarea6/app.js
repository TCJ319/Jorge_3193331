function vert(){
    let numero = prompt("Introduce el  numero de x en vertical");
    cadv = "";
    for(i=0 ; i<numero; i++){
        cadv = cadv + "x \n";}
    console.log(cadv);
}
vert();

function hori(){
    let numero = parseInt(prompt("Introduce el  numero de x en horizontal"));
    cadh = ""; 
    for(i=0 ; i<numero; i++){
        cadh = cadh + "x";
    }
    console.log(cadh);
}
hori();

function tablas(){
    cadena = "";
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 11; j++) {
            cadena= cadena + (i + " * " + j + " = " + (i*j) + "\n")

        }
        
    }
    console.log(cadena);
}
tablas();

function frutas(){
    const frut = ['manzana', 'platano', 'naranja', 'mandarina', 'kiwi', 'coco', 'pera', 'durasno', 'guayaba', 'uva' ];
    
    frut.forEach(function(valor, indice) {
        console.log("En el índice " + (indice+1) + " hay esta fruta: " + valor);
    });
}
frutas();