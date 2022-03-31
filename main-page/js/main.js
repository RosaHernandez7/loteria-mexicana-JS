/*Guardar nombre usuario */
const saveName = document.getElementById('save-name');

 function getName(){
    const name1 = document.getElementById('user-name').value;
    nombre.innerHTML = `Hola ${name1}`;
    alert(name1);    
}

saveName.addEventListener('click', getName);

// let name2= getName();
// console.log(name2);

