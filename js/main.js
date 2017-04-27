var res = [];
    // me elige los 10 primeros
    for (var i = 0; i < 10; i++) {
        // se agrega valor a mi nuevo array
        res.push(arr[i]);
    }
console.log(res); // esta leyendo 10
// Me arroja el atributo title de cada objeto
res.forEach(function(el){
	var contarea = document.getElementsByClassName("list");
	contarea[0].innerHTML += "<li>" + el.title + "<br>" + "</li>";
	
  });
// Ejercicio en Clases
function agregarTareas(){
	var input = document.getElementById("tarea");
	var contarea = document.getElementsByClassName("list");
	contarea[0].innerHTML += "<li>" + input.value + "</li>";
	//res.push(input.value);
	res.push({
		'Id': res.length,
        'userId': 1,
        'title': input.value,
        'completed': false
    });
	console.log(res);
	input.value = "";
}
