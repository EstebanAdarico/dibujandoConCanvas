var d = document.getElementById("Dibujo");

var lienzo = d.getContext("2d");

//creando variables
//variables del primer cuadrante
var Yi = 0 ;
var Xf = 0 ;
//variables del segundo cuadrante 
var Xi = 0 ;
var Yf = 0 ;

var L = 0 ;

//creando la condicion , sabiendo el número de iteracion que hará
while (L < 30) {
   
   //#######################LADO INFERIOR IZQUIERDO####################
   Yi = 10 * L
   Xf = 10 * (1 + L)
   //console.log(`este es del lado izquiero${Xf}`)
   dibujarlina("purple",0,Yi,Xf,300)

   //########################LADO INFERIOR DERECHO#####################
   Xf = 300 - 10 *(L + 1)
   // console.log( `del lado derecho${Xf}`)
   dibujarlina("gray",300,Yi,Xf,300)
   //########################LADO SUPERIOR DERECHO######################



   L += 1
}
//Llamando a la funcion para enmarcar el lienzo 
//Lado izquierdo
dibujarlina("brown",1,1,1,300)
//Lado inferior
dibujarlina("brown",1,300,300,300)
//Lado Derecho
dibujarlina("brown",299,299,299,1)
//Lado superior
dibujarlina("brown",300,1,1,1)

//creando una funcion con parametros para no crear codigo repetitivo
function dibujarlina(color,Xinicial,Yinicial,Xfinal,Yfinal){

   lienzo.beginPath();
   lienzo.strokeStyle = color;
   lienzo.moveTo(Xinicial,Yinicial);
   lienzo.lineTo(Xfinal,Yfinal);
   lienzo.stroke();
   lienzo.closePath();
}

