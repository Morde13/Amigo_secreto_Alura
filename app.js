// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let valorUsuario = document.getElementById("amigo"); 
let nombreAmigos = [];

function agregarAmigo() {
    //Limpiar el resultado del sorteo anterior
   document.getElementById("resultado").innerHTML = "";
  //Condicionales para evitar que se agreguen valores vacíos
   if( document.getElementById("amigo").value == ""){
     alert("¡Amigo no ha sido agregado!");
   } 
   else{
     //Agregar el nombre del amigo al arreglo 
     nombreAmigos.push(valorUsuario.value);
     // mostrar el arreglo en la consola
     console.log(nombreAmigos);
     //Limpiar el campo de texto
     document.getElementById("amigo").value = "";
   }
   mostrarAmigos();
   

}


function mostrarAmigos() {
  // Obtener el elemento de la lista
  const lista = document.getElementById("listaAmigos");
  // Limpiar la lista existente
  lista.innerHTML = "";
  // Iterar sobre el arreglo y agregar elementos <li>
  for (let i = 0; i < nombreAmigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = nombreAmigos[i];
    lista.appendChild(li);
  }
}

function elegirAmigoSecreto() {
  //  Verificar si hay amigos en la lista
  if (nombreAmigos.length === 0) {
    alert('No hay amigos en la lista para elegir un amigo secreto');
  }
 else {
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);  
    // Obtener el amigo secreto usando el índice aleatorio
    const amigoSecreto = nombreAmigos[indiceAleatorio];
    return amigoSecreto;
 }
  


}

function sortearAmigo() {
  //  Verificar si hay al menos dos amigos en la lista
  if (nombreAmigos.length < 2) {
    alert('Se necesitan al menos dos amigos para realizar el sorteo');
    return;
  } else {
    // se llamar a la función elegirAmigoSecreto y mostrar el resultado en el HTML
    document.getElementById("resultado").innerHTML = elegirAmigoSecreto() ;
   
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
  }
}  