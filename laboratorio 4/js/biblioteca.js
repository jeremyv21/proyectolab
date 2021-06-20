//declarando variabls para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFen=document.getElementById("rbFen");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");

//creamos un procedimineto para asignat la clase 
function llamarClase(m){
    error.style.display='block';
    error.innerHTM+='<li>'+m+'</li>';
}

//creamos una funcion par validar nombre
//function ValidarNombre(){
//      if(txtNom.value=="" || txtNom.value==nu11){
//    error.style.display='block';
//    error.innerHTML+='<li>Porfavor ingrese su Nombres</li>';
//   }else{
//      error.style.display='none';
//     }
// }

// function ValidarApellido(){
// if(txtApe.value=="" || txtApe.value==nu11){
//      error.style.display='block';
//      error.innerHTML+='<li>Porfavor ingrese sus Apellidos</li>';
//   }else{
//     error.style.display='none';
//   }
// }

// function ValidarCorreo(){
// if(txtCor.value=="" || txtCor.value==nu11){
//    error.style.display='block';
//    error.innerHTML+='<li>Porfavor ingrese sus Correo</li>';
// }else{
//    error.style.display='none';
//  }
// }

//function Validar sexo(){
// if (sexo.value=="" || sexo.value==null){
//    error.style.display="block"
//    error.innerHTML+='<li>Por favor seleccione su sexo </li>
//  }else{
//         error.style.display='none';
//   }
// }
// function ValidarEstado(){
// if(chkEst,checked=='false'){
//     error.style.display='block' ;
//     error.innerHTML+='<li>Por favor seleccione el estado </li>
//  }else{
//      error.style.display='none';
// }
//}
//creamos un procedimiento para validar
function Validar(){
// reiniciamos el error para que se carge sin ningun mensaje 
error.innerHTML='';
if(txtNom.Value=="" || txtNom.Value==null){
    llamarClase("Por favor ingrese sus nombres ");
    llamarClase("Porfavor ingrese sus apellidos ");
    llamarClase("Por favor ingrese su correo ");
    llamarClase("Por favor seleccione su sexo ");
    llamarClase("Por favor seleccione su estado ");
    txtNom.focus();
}else if (txtApe.Value=="" || txtApe.Value==null){
    llamarClase("Por favor ingrese sus apellidos ");
    llamarClase("Por favor ingrese su correo ");
    llamarClase("Por favor seleccione su sexo ");
    llamarClase("Por favor seleccione su estado ");
    txtApe.focus();
}else if (txtCor.Value=="" || txtCor.Value==null){
    llamarClase("Por favor ingrese su correo ");
    llamarClase("Por favor seleccione su sexo ");
    llamarClase("Por favor seleccione su estado ");
    txtCor.focus();
}else if (rbMas.checked==flase && rbFem.checked==false &&rbOtr.checked==false){
    llamarClase("Por favor seleccione su sexo ");
    llamarClase("Por favor seleccione su estado ");
    rbMas.focus();
}else if (chkEst.checked==false){
    llamarClase("Por favor seleccione su estado ");
    chkEst.focus();
}else{
    error.style.display='none';
}

//llamamos a las validaciones 
// ValidarNombre();
// ValidarApellido();
// ValidarCorreo();
// validarSexo();
//validarEstado();
}