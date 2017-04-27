var res = [];
    // me elige los 10 primeros
    for (var i = 0; i < 10; i++) {
        // se agrega valor al mi nuevo array
        res.push(arr[i]);
    }
//document.write(res); esta leyendo 10
res.forEach(function(el){
	var contarea = document.getElementsByClassName("list");
	contarea[0].innerHTML += "<li>" + el.title + "<br>" + "</li>";
	
  });
// document.getElementById("tareas").innerHTML = "<li>" + el.title + "<br>" + "</li>";
function agregarTareas(){
	var input = document.getElementById("tarea");

	var contarea = document.getElementsByClassName("list");

	contarea[0].innerHTML += "<li>" + input.value + "</li>";

	input.value = "";
}
