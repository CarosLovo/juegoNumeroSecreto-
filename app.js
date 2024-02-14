
/* CREA UN PROGRAMA QUE PIDA AL USUARIO QUE TECLEE UN NUMERO ENTRE 1 Y 5, SI ESCRIBE ALGUNO QUE ESTE FUERA DE ESE RANGO DEBERA VOLVER A PADIR EL NUMERO
let Numero=0; 
while(Numero<1||Numero>5){
    Numero=parseInt(prompt("numero  entre 1 y 5 "));
    if(Numero<5){
      alert("bienvenido");  
    }
    else{
        alert("intente de nuevo");
    }
}/*//*
let Mayuscula="N"
let Minuscula="n"
let opcion;
while(opcion!=Mayuscula && opcion!= Minuscula ){

opcion=prompt("ingrese una letra N diferente mayuscula o minuscula");

}
   */ 
  /*let palabraPersona ="";
  if(cantidadPersona==1){
    palabraPersona="persona";
 }else{
    palabraPersona="personas"
  }/*
    
let palabraPersona=(cantidadPersona==1)?"persona" :"persona";
Math.floor(Math.random()*10)+1;*/

let numeroSecreto= Math.floor(Math.random()*10)+1;
let numeroUsuario=0;
let numeroIntento=0;
let palabraVeces="vez";
let intentosMaximos=3;
while( numeroUsuario != numeroSecreto){
    numeroUsuario=prompt("escriba un numero del 1 al 10");
    numeroIntento=numeroIntento+1;
    if(numeroUsuario==numeroSecreto){
        alert(`felcitaciones, el numero es: ${numeroUsuario} y realizo ${numeroIntento} ${palabraVeces>1?"veces":"vez"}`);
    }
    else{
        if(numeroSecreto>numeroUsuario){
        alert("no, el numero es mayor");
        }else
        {
        alert("no, el numero es menor");
        } palabraVeces="veces";
        if(numeroIntento ==intentosMaximos){
        alert(`llege al numero maximo de: ${intentosMaximos} intentos`);
        break;
        }
    }
}
    



    








 








