let contador = 0;

function marcarCasilla(num) {
//  $carousel-transition-duration=.6; 
  let dirImg = document.getElementById("imgd-" + num).src;
  let dirActive = document.querySelector(".carousel-item.active img");
  let direccion = dirActive.getAttribute("src");
  var index = dirImg.indexOf(direccion);
  let valorF = dirImg.substring(index, dirImg.length);
  let imgFinal= "54.jpg";
  var index1 = direccion.indexOf(imgFinal);
  let strFinal = direccion.substring(index1, direccion.length);

  // alert(valorF + " es igual "+ direccion);
  if (valorF === direccion) {
    document.getElementById("img-" + num).style.opacity = "0.1";
    contador++;
  }

  if(contador===16)
  {
    validacion(contador);
  }
  else if(contador<16 && strFinal==="54.jpg"){
    // let imgFinal= "54.jpg";
    // var index1 = direccion.indexOf(imgFinal);
    // let strFinal = direccion.substring(index1, direccion.length);
      validacion(contador);
  }

 
}
function validacion(contador) {
  if (contador == 16) {
      // alert("Ganaste");
      Swal.fire({
        title: 'GANASTE :D',
        text:  '¿Ya terminaste tus deberes?',
        //html: '<img src="ganaste.jpg" alt="" />',
        confirmButtonText: 'Salir del Juego',
        //confirmButtonText: 'Volver a Jugar',
        //width: '45%',
        padding: '1rem',
        background: '#000',
        //grow: 'row',
        backdrop: true,
        //timer: 5000,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        stopKeydownPropagation: false,
        imageUrl: 'js/ganaste.jpg',
        imageWidth: '100%',
        imageHeight: '50vh',
        imageAlt: 'bob esponja',
    
    })
  } else {
    // alert("Perdiste");
      Swal.fire({
        title: 'PERDISTE !!!!',
        text:  'Fracasaste',
        //html: '<img src="ganaste.jpg" alt="" />',
        confirmButtonText: 'Volver a Jugar',
        //confirmButtonText: 'Volver a Jugar',
        //width: '45%',
        padding: '1rem',
        background: '#000',
        //grow: 'row',
        backdrop: true,
        //timer: 5000,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        stopKeydownPropagation: false,
        imageUrl: 'js/perdiste.jpg',
        imageWidth: '100%',
        imageHeight: '50vh',
        imageAlt: 'bob esponja',
    
    })
  }
}


//porblema del contador
 //con addlistener no funciono 
    // let imgCambiar = document.getElementById("imgd-" + numCarta); //celda donde se dio clic
    // imgCambiar.addEventListener("click",(e)=>{
    //   imgCambiar.style.opacity ="0.1";
    //   console.log(contador);
    //   contador++;
    // });
    //se presentaban varias adiciones al contador 
    // document.getElementById("imgd-" + numCarta).style.opacity = "0.1";
    // console.log(contador);
    // contador++; //el contador aumenta sin parar, hallar na forma de con un solo clic para de generar aumentos
     //el elemnto se debe ejecutar una sola vez por celda 
    //marcar la carta internamente con una clase de que diga x
    //si ese atributo es !=de x ahora si aumentar contador
    //intente con jquery
    //$("#imgd-"+numCarta).one( "click", function() { });