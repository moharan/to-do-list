arr.forEach(function(el){
	//document.write("<img src='" + el.listing.thumbnail_url + "'" + "><br>");
	document.write("<div>" + "<b>Datos:</b> " + el.name + "<br>" + "<b>Calle :</b> " + el.address.street + " <br><b>Ciudad:</b>  " + el.address.city + "</div>");
  });