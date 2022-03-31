/*Guardar nombre usuario */
const saveName = document.getElementById('save-name');

 function getName(){
    const name1 = document.getElementById('user-name').value;
    // export let nombre_user = name1
    nombre.innerHTML = `Hola ${name1}`;
    // alert(name1);    
    enviarNombre(name1);
}

export function enviarNombre(name1){
    alert(name1);
    return name1;
}
saveName.addEventListener('click', getName);

// let name2= getName();
// console.log(name2);

