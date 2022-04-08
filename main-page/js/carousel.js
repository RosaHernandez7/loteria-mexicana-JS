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
/*En este apartado desordene el array  de imágenes*/ //*****descomentar el desorden del arrya */
img_array=img_array.sort(function(){
    return Math.random() - 0.5 //por qué 0.5??????
    });
alert(img_array); //para corroborar el orden del arreglo

//Se agrega evento onclick al boton
btn_sig.onclick = iniciarJuego();

/*Función principal*/
let index = 0; //indice del arreglo de imágenes

function iniciarJuego() {
  btn_sig.addEventListener("click", (e) => {
    let image = document.getElementById("imgBaraja");
    
    const myInterval = setInterval(function slide() {
    //   alert("index -> "+ index);
      image.src = img_array[index];
      index++;

      if (index >= img_array.length) {
        clearInterval(myInterval);
      }
    }, 2000);
  });
}

/*Función para marcar las casilla */

let contador = 0;

function marcarCasilla(numCarta) {
  let dirImg = document.getElementById("imgd-" + numCarta).src; //se obtiene direccion de la celda
  let dirImgBaraja = document.getElementById("imgBaraja").src; //DIRECCION imagen actual en la baraja 
  
  if (dirImgBaraja === dirImg) {
    document.getElementById("img-" + numCarta).style.opacity = "0.1";
    contador++;
  }

  if (index===53) {//contador === 16 && 
    validacion(contador);
  }

  //cada vez que el usuario presine inciar juego se debe resstablecer el tablero
}
//ESTA FUNCION ES LA QUE GENERA QUE NO SE PUEDA REINCIAR 
// function validacion(contador) {
//     if (contador === 16) {
//         // alert("Ganaste");
//         Swal.fire({
//           title: 'GANASTE :D',
//           text:  '¿Ya terminaste tus deberes?',
//           //html: '<img src="ganaste.jpg" alt="" />',
//           confirmButtonText: 'Salir del Juego',
//           //confirmButtonText: 'Volver a Jugar',
//           //width: '45%',
//           padding: '1rem',
//           background: '#000',
//           //grow: 'row',
//           backdrop: true,
//           //timer: 5000,
//           allowOutsideClick: false,
//           allowEscapeKey: false,
//           allowEnterKey: true,
//           stopKeydownPropagation: false,
//           imageUrl: 'js/ganaste.jpg',
//           imageWidth: '100%',
//           imageHeight: '50vh',
//           imageAlt: 'bob esponja',
      
//       })
//     } else  {
//       // alert("Perdiste");
//         Swal.fire({
//           title: 'PERDISTE !!!!',
//           text:  'Fracasaste',
//           //html: '<img src="ganaste.jpg" alt="" />',
//           confirmButtonText: 'Volver a Jugar',
//           //confirmButtonText: 'Volver a Jugar',
//           //width: '45%',
//           padding: '1rem',
//           background: '#000',
//           //grow: 'row',
//           backdrop: true,
//           //timer: 5000,
//           allowOutsideClick: false,
//           allowEscapeKey: false,
//           allowEnterKey: true,
//           stopKeydownPropagation: false,
//           imageUrl: 'js/perdiste.jpg',
//           imageWidth: '100%',
//           imageHeight: '50vh',
//           imageAlt: 'bob esponja',
      
//       })
//     }
//   }
  