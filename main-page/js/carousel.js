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
    alert("Has perdido putis");
  }

 
}
function validacion(contador) {
  if (contador == 16) {
    alert("Ganaste");
    //se despliega el modal
  } else {
    alert("Perdiste");
    //se mantiene oculto el modal
  }
}
