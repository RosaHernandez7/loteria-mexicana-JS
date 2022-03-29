/*Guardar nombre usuario */
const saveName = document.getElementById('save-name');

function getName(){
    return  name = document.getElementById('user-name').value;
    // saludo.innerHTML = `Hola ${name}`;
    // alert(name);   
}
consol.log(getName())
saveName.addEventListener('click', getName);


