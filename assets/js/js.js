function mostrarFormulario(){

    let form = document.getElementById('form');
    form.style.display = 'block';

}

function ocultarForm(){
    let form = document.getElementById('form');
    form.style.display = 'none';
}


/* Recoger datos del formulario */

document.addEventListener('DOMContentLoaded', function(){


document.getElementById('btnSend').addEventListener('click', function(event){
    event.preventDefault();
    sendCite();
});
//Función que recogerá los datos del formulario.

function sendCite(){
    
    let citeDate = document.querySelector('#citeDate').value;
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;
    let tel = document.querySelector('#tel').value;
    let birthDate = document.querySelector('#birthDate').value;
    

    addCite(citeDate, name, surname, email, tel, birthDate);
}

 //Creamos un array de los objetos que vamos a crear

 let citas = [];

 //Función que recibirá todos los datos, además le asignaremos una ID a la cita

 let citeId = 1;

 function addCite(pciteDate, pname, psurnames, pemail,ptel,  pbirthdate){
    
    let newCite = {
        citeDate : pciteDate,
        name : pname,
        surnames : psurnames,
        email : pemail,
        tel : ptel,
        birthDate : pbirthdate
    };
    console.log(newCite);
    citeId++;

    citas.push(newCite);

 }

})