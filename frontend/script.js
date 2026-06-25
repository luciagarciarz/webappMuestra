const buscador = document.querySelector("#buscador-incidencias"); //creamos una constante para seleccionar el buscador
const filasIncidencias = document.querySelectorAll("tbody tr"); //creamos una constante para seleccionar las filas de la tabla de incidencias

buscador.addEventListener("input", function () {   //creamos una acción donde el buscador va a estar esperando a que el usuario escriba algo y cuando lo haga, se ejecutará la función que contiene el código dentro de las llaves.
  const textoBuscado = buscador.value.toLowerCase().trim(); //guardamos el texto escrito en el buscador, toLowerCase() hace que sea igual que escribas en mayús. o en minús. y quitamos espacios con .trim()

  filasIncidencias.forEach(function (fila) {  //recorremos cada fila de la tabla de incidencias
    const numeroIncidencia = fila.querySelector("td").textContent.toLowerCase(); //obtenemos el texto del primer td de la fila, que contiene el número de incidencia
    const coincide = numeroIncidencia.includes(textoBuscado); //comprobamos si el número de incidencia contiene el texto escrito en el buscador

    fila.classList.toggle("d-none", !coincide); //si no coincide, añadimos d-none para ocultar la fila; si coincide, quitamos d-none para mostrarla
  });
}); 
