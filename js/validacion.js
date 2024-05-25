const formulario = document.getElementById("formulario");
const nombre = document.getElementById("inputNombre");
const apellido = document.getElementById("inputApellido");
const email = document.getElementById("inputEmail");
const area = document.getElementById("inputSeleccion");
const errorMensaje = document.getElementById("errorMensaje");
var numeros="0123456789";

// limpiar las cajas
function borrar_contenido(){
    // nombre.innerHTML="";
    // apellido.innerHTML="";
    // email.innerHTML="";
    // area.select="0";
    // mayor_edad.innerHTML="False";
    // mensaje.innerHTML="";
    formulario.reset();
    errorMensaje.innerHTML="";
    errorMensaje.hidden = true;
    nombre.focus();
}


formulario.addEventListener("submit", e=>{
    e.preventDefault()
    let error =""
    errorMensaje.innerHTML =""
    let enviar_ok=false
    let numeroPalabra = /[0-9]/

    if (nombre.value.length<4){
        //alert("Nombre muy Corto")
        error+= `El Nombre no es valido <br>`
        nombre.focus()
        enviar_ok=true
    }
    if(numeroPalabra.test(nombre.value)){
        //alert("Nombre no puede contener números")
        error+= `El Nombre no puede tener numeros <br>`
        nombre.focus()
        enviar_ok=true
    }
    if (apellido.value.length<4){
        //alert("Nombre muy Corto")
        error+= `El Apellido no es valido <br>`
        apellido.focus()
        enviar_ok=true
    }
    if(numeroPalabra.test(apellido.value)){
        //alert("Apellido no puede contener números")
        error+= `El Apellido no puede tener numeros <br>`
        apellido.focus()
        enviar_ok=true
    }
    if(area.value=="Seleccionar.."){
        //alert("Debe seleccionar una Area")
        error+= `Debe Seleccionar una Area <br>`
        area.focus()
        enviar_ok=true
    }
    if(enviar_ok){
        errorMensaje.hidden = false;
        errorMensaje.innerHTML = error
    }else{
        formulario.submit()
        alert("El mensaje se envio correctamente")
    }

})
    

