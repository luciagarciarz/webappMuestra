const buscador = document.querySelector("#buscador-incidencias"); //BUCADOR -- creamos una constante para seleccionar el buscador
const filtroTipo = document.querySelector("#filtro-tipo"); //DESPLEGABLE DE TIPOS -- creamos una constante para seleccionar el desplegable de tipos
const filtroEstado = document.querySelector("#filtro-estado"); // DESPLEGABLE DE ESTADOS --creamos una constante para seleccionar el desplegable de estados
const filasIncidencias = document.querySelectorAll("tbody tr"); //FILAS DE LA TABLA DE INCIDENCIAS -- creamos una constante para seleccionar las filas de la tabla de incidencias
const filtroPrioridad = document.querySelector("#filtro-prioridad"); // DESPLEGABLE DE PRIORIDADES --creamos una constante para seleccionar el desplegable de prioridades

buscador.addEventListener("input", function () {   //BUSCADOR -- creamos una acción donde el buscador va a estar esperando a que el usuario escriba algo y cuando lo haga, se ejecutará la función que contiene el código dentro de las llaves.
  const textoBuscado = buscador.value.toLowerCase().trim(); //BUSCADOR -- guardamos el texto escrito en el buscador, toLowerCase() hace que sea igual que escribas en mayús. o en minús. y quitamos espacios con .trim()

  filasIncidencias.forEach(function (fila) {  //BUSCADOR -- busca en cada fila de la tabla de incidencias
    const numeroIncidencia = fila.querySelector("td").textContent.toLowerCase(); //BUSCADOR -- obtenemos el texto del primer td de la fila, que contiene el número de incidencia
    const coincide = numeroIncidencia.includes(textoBuscado); //BUSCADOR -- comprobamos si el número de incidencia contiene el texto escrito en el buscador

    fila.classList.toggle("d-none", !coincide); //BUSCADOR -- si no coincide, se añade d-none para ocultar la fila; si coincide, se quita d-none para mostrarla
  });
}); 

filtroTipo.addEventListener("change", function () { //DESPLEGABLE DE TIPOS -- creamos una acción que se ejecuta cada vez que el usuario cambia el tipo seleccionado
  const tipoSeleccionado = filtroTipo.value.toLowerCase(); //DESPLEGABLE DE TIPOS -- guardamos el tipo seleccionado por el usuario y lo pasamos a minúsculas para compararlo mejor

  filasIncidencias.forEach(function (fila) { //DESPLEGABLE DE TIPOS -- busca en cada fila de la tabla de incidencias para ver cuál coincide con el tipo seleccionado
    const tipoFila = fila.querySelector("td:nth-child(3)").textContent.toLowerCase(); //DESPLEGABLE DE TIPOS -- obtenemos el texto del tercer td de la fila, que contiene el tipo de incidencia
    const coincide = tipoSeleccionado === "todos los tipos" || tipoFila === tipoSeleccionado; //DESPLEGABLE DE TIPOS -- comprobamos si se han seleccionado todos los tipos o si el tipo de la fila coincide con el tipo seleccionado

    fila.classList.toggle("d-none", !coincide); //DESPLEGABLE DE TIPOS -- si no coincide, se añade d-none para ocultar la fila; si coincide, se quita d-none para mostrarla
  });

});

filtroEstado.addEventListener("change", function () { //DESPLEGABLE DE ESTADO -- creamos una acción que se ejecuta cada vez que el usuario cambia el estado seleccionado (el desplegable va a estar "esperando" a que el usuario interactúe con él)
  const estadoSeleccionado = filtroEstado.value.toLowerCase(); //DESPLEGABLE DE ESTADO -- guardamos el estado que ha seleccionado el usuario en el desplegable y lo pasamos a minúsculas para compararlo mejor

  filasIncidencias.forEach(function (fila) { //DESPLEGABLE DE ESTADO -- busca en cada fila de la tabla de incidencias para ver cuál coincide con el estado seleccionado
    const estadoFila = fila.querySelector("td:nth-child(6)").textContent.toLowerCase(); //DESPLEGABLE DE ESTADO -- obtenemos el texto del sexto td de la fila, que contiene el estado
    const coincide = estadoSeleccionado === "todos los estados" || estadoFila === estadoSeleccionado; //DESPLEGABLE DE ESTADO -- comprobamos si se han seleccionado todos los estados o si el estado de la fila coincide con el estado seleccionado

    fila.classList.toggle("d-none", !coincide); //DESPLEGABLE DE ESTADO -- si no coincide, se añade d-none para ocultar la fila; si coincide, se quita d-none para mostrarla
  });

});

filtroPrioridad.addEventListener("change", function () { //DESPLEGABLE DE PRIORIDAD -- creamos una acción que se ejecuta cada vez que el usuario cambia la prioridad seleccionada (el desplegable va a estar "esperando" a que el usuario interactúe con él))
  const prioridadSeleccionada = filtroPrioridad.value.toLowerCase(); //DESPLEGABLE DE PRIORIDAD -- guardamos la prioridad que ha seleccionado el usuario en el desplegable y lo pasamos a minúsculas para compararlo mejor

  filasIncidencias.forEach(function (fila) { //DESPLEGABLE DE PRIORIDAD -- busca en cada fila de la tabla de incidencias para ver cuál coincide con la prioridad seleccionada
    const prioridadFila = fila.querySelector("td:nth-child(5)").textContent.toLowerCase(); //DESPLEGABLE DE PRIORIDAD -- obtenemos el texto del quinto td de la fila, que contiene la prioridad
    const coincide = prioridadSeleccionada === "todas las prioridades" || prioridadFila === prioridadSeleccionada; //DESPLEGABLE DE PRIORIDAD -- comprobamos si se han seleccionado todas las prioridades o si la prioridad de la fila coincide con la prioridad seleccionada

    fila.classList.toggle("d-none", !coincide); //DESPLEGABLE DE PRIORIDAD -- si no coincide, se añade d-none para ocultar la fila; si coincide, se quita d-none para mostrarla
  });
  
});
