// let contador = 0;

// function marcarCasilla(num) {
// //  $carousel-transition-duration=.6; 
//   let dirImg = document.getElementById("imgd-" + num).src;
//   let dirActive = document.querySelector(".carousel-item.active img");
//   let direccion = dirActive.getAttribute("src");
//   var index = dirImg.indexOf(direccion);
//   let valorF = dirImg.substring(index, dirImg.length);
//   let imgFinal= "54.jpg";
//   var index1 = direccion.indexOf(imgFinal);
//   let strFinal = direccion.substring(index1, direccion.length);

//   // alert(valorF + " es igual "+ direccion);
//   if (valorF === direccion) {
//     document.getElementById("img-" + num).style.opacity = "0.1";
//     contador++;
//   }

//   if(contador===16)
//   {
//     validacion(contador);
//   }
//   else if(contador<16 && strFinal==="54.jpg"){
//     // let imgFinal= "54.jpg";
//     // var index1 = direccion.indexOf(imgFinal);
//     // let strFinal = direccion.substring(index1, direccion.length);
//       validacion(contador);
//   }

 
// }
// function validacion(contador) {
//   if (contador == 16) {
//       // alert("Ganaste");
//       Swal.fire({
//         title: 'GANASTE :D',
//         text:  '¿Ya terminaste tus deberes?',
//         //html: '<img src="ganaste.jpg" alt="" />',
//         confirmButtonText: 'Salir del Juego',
//         //confirmButtonText: 'Volver a Jugar',
//         //width: '45%',
//         padding: '1rem',
//         background: '#000',
//         //grow: 'row',
//         backdrop: true,
//         //timer: 5000,
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         allowEnterKey: true,
//         stopKeydownPropagation: false,
//         imageUrl: 'js/ganaste.jpg',
//         imageWidth: '100%',
//         imageHeight: '50vh',
//         imageAlt: 'bob esponja',
    
//     })
//   } else {
//     // alert("Perdiste");
//       Swal.fire({
//         title: 'PERDISTE !!!!',
//         text:  'Fracasaste',
//         //html: '<img src="ganaste.jpg" alt="" />',
//         confirmButtonText: 'Volver a Jugar',
//         //confirmButtonText: 'Volver a Jugar',
//         //width: '45%',
//         padding: '1rem',
//         background: '#000',
//         //grow: 'row',
//         backdrop: true,
//         //timer: 5000,
//         allowOutsideClick: false,
//         allowEscapeKey: false,
//         allowEnterKey: true,
//         stopKeydownPropagation: false,
//         imageUrl: 'js/perdiste.jpg',
//         imageWidth: '100%',
//         imageHeight: '50vh',
//         imageAlt: 'bob esponja',
    
//     })
//   }
// }

let btn_sig = document.getElementById("btn-sig");
let index=0; //contador de imágenes

/* Array de imágenes */

//Se agrega evento onclick al boton 
// btn_sig.onclick = iniciarJuego();

/*Lo primero es desacomodar el arreglo*/
// img_array=img_array.sort(function(){
//     return Math.random() - 0.5 //por qué 0.5??????
//     });
//     alert(img_array); //para corroborar el orden del arreglo
let img_array = [];
    for(let i=2;i<=10;i++)
    {
        img_array.push("../main-page/images/baraja/"+i+".jpg");
    }
function iniciarJuego()
{   

    btn_sig.addEventListener("click", (e)=>
    {   let image = document.getElementById("aaa");
        
        const myInterval = setInterval(function slide(){
                       
            // image.setAttribute("src", img_array[index] );
            image.src = img_array[index];
            index++;

            if(index>=img_array.length)
            {  //cuando llegue al último elemnto se dentendra el intervalo
                clearInterval(myInterval);
                // index=0;
            }
        }, 1000);       
    }); 
}

btn_sig.onclick = iniciarJuego();

