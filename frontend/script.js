const buscador = document.querySelector("#buscador-incidencias"); //creamos una constante para seleccionar el buscador
const filasIncidencias = document.querySelectorAll("tbody tr"); //creamos una constante para seleccionar las filas de la tabla de incidencias

buscador.addEventListener("input", function () {   //creamos un evento que se ejecuta cada vez que el usuario escribe en el buscador 
  const textoBuscado = buscador.value.toLowerCase().trim();

  filasIncidencias.forEach(function (fila) {  //Por cada fila de la tabla, guarda temporalmente esa fila en la variable fila y la muestra en la consola
    console.log(fila);
  });
}); 
