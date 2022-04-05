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

/* Array de imágenes */
let img_array = [];
for(let i=1;i<=54;i++)
{
    img_array.push("../main-page/images/baraja/"+i+".jpg");
}
//Se agrega evento onclick al boton 
btn_sig.onclick = iniciarJuego();
let index=0;
let min = 1;
let max =55;

function iniciarJuego()
{
    btn_sig.addEventListener("click", (e)=>
    {   let image = document.getElementById("aaa");
        
        // alert("inicia el juego");
        const myInterval = setInterval(function slide(){
            index = Math.floor(Math.random() * (55 - 2)) + 2;
              
              console.log(index);
            image.setAttribute("src", img_array[index] );
            // image.src = img_array[index]; // es igual a document["aaa"].src = img_array[index];
            
            // index++; //este debe ser un nuemro random 
            if(index>=img_array.length)
            {
            // index=0;
                clearInterval(myInterval);
            }
        }, 2000);       
    }); 
}

