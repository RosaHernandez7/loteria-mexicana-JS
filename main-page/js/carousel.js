let btn_sig = document.getElementById("btn-sig");

/* Array de imágenes */
let img_array = [];

for (
  let i = 2;
  i <= 54;
  i++ //indice 2 debido a que ya la carta 1 es la portada *****agregar el 54
) {
  img_array.push("../main-page/images/baraja/" + i + ".jpg");
}
/*******En este apartado desordene el array  de imágenes*******/ 
img_array = img_array.sort(function () {
  return Math.random() - 0.5; //por qué 0.5??????
});
// alert(img_array); //para corroborar el orden del arreglo

//Se agrega evento onclick al boton
// btn_sig.addEventListener("click", iniciarJuego());

iniciarJuego();
/*******Función para mostrar la baraja*******/

let image = document.getElementById("imgBaraja");
/**falla el boton */
// function iniciarJuego() {
//   // btn_sig.removeEventListener("click", iniciarJuego());
//   let index = 0; //indice del arreglo de imágenes
//   btn_sig.addEventListener("click", (e) => {
//     // btn_sig.removeEventListener("click", this);
//     const myInterval = setInterval(function slide() { 
//       //   alert("index -> "+ index);
//       image.src = img_array[index];
//       index++;
//       console.log("indxex: " + index);
//       if (index >= img_array.length) {
        

//         if(index===53)
//         {  
//            validacion(); //todavia hace falta gregar la parte donde se llega a la ultima carta y no se alcanza a seleccionar la carta del tablero y sale inmediatamente el modal
//         }
//         clearInterval(myInterval);
//       }
      
//     }, 2000);
//   });
// }


function iniciarJuego() {
  // btn_sig.removeEventListener("click", iniciarJuego());
  let index = 0; //indice del arreglo de imágenes
  btn_sig.addEventListener("click", (e) => {
    // btn_sig.removeEventListener("click", this);
    const myInterval = setInterval(function slide() { 
      //   alert("index -> "+ index);
      image.src = img_array[index];
      index++;
      console.log("indxex: " + index);
      if (index >= img_array.length) {
        

        if(index===53)
        {  
           validacion(); //todavia hace falta gregar la parte donde se llega a la ultima carta y no se alcanza a seleccionar la carta del tablero y sale inmediatamente el modal
        }
        clearInterval(myInterval);
      }
      
    }, 2000);
  });
}



/******* Declaraciones y definiciones para marcar la casilla *******/
let cartas = document.querySelectorAll(".cartaMarca > img");
let dirImgBaraja = document.getElementById("imgBaraja").src;
let cont = 0;

for (let i = 0; i < cartas.length; i++) {
  let casilla = cartas[i].getAttribute("id");
  let imgCelda = document.getElementById(casilla);

  imgCelda.addEventListener("click", opacarCelda);
  console.log("esta en el for");
}
function opacarCelda(e) {
  //Con - e.currentTarget.src - se obtiene la imagen a través del evento

  if (image.src === e.currentTarget.src) {
    cont++;
    e.currentTarget.style.opacity = "0.1";
    // console.log("cont: " + cont);
    e.currentTarget.removeEventListener("click", opacarCelda); //se remueve el evento para que no aumente el contador de celdas marcadas
  }

}

//ESTA FUNCION ES LA QUE GENERA QUE NO SE PUEDA REINCIAR 
function validacion() {
  if (cont === 16) {
      // alert("Ganaste");
      Swal.fire({
        title: 'GANASTE :D',
        text:  '¿Ya terminaste tus deberes?',
        //html: '<img src="ganaste.jpg" alt="" />',
        confirmButtonText: 'Salir del Juego',
        // confirmButtonText: 'Volver a Jugar',
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
    
    });
  } 
  else  {
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






