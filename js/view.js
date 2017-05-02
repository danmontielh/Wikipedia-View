$(function() {


/* Set Values API*/
var api = "http://es.wikipedia.org/w/api.php?action=query&list=search&srsearch=";
var callback = "&prop=info&utf8&format=json&callback=?";


/* Call API Wikipedia */
$('input').keypress(function (e) {
 var key = e.which;
 if(key == 13)  
  {
    var inputSearch = $(this).val();
    console.log(inputSearch);

if (inputSearch != "") {

$.getJSON(api + inputSearch + callback) 
         .done (function(location){
     		var itemFound = location;
         	console.log(itemFound);
         	appendFound(itemFound, ".name");

         	})
} else {
	console.log("error");
}

  }
}); 


/* Function print Founds Items*/
function appendFound(found,selectorDiv){

	$(found).each(function(index,element){

	if (element.query.search.length >= 1) {
		$(selectorDiv).html("");
		$(".con").html("");
		for (var i = 0; i < element.query.search.length; i++){
			elementsFounds = element.query.search;

					/*$(selectorDiv).append("<h4 class='card-title'>"+elementsFounds[i].title+"</h4>");*/

					$(selectorDiv).append("<div class='card-head animated fadeInUpBig fast'><h4 class='text-center card-title'>"+elementsFounds[i].title+"</h4><p class='card-text'>"+elementsFounds[i].snippet+" "+"<a href='https://es.wikipedia.org/wiki/"+elementsFounds[i].title+"'>Leer Más</a>"+"</p></div>");
					


         			/* $(selectorDiv).append("<p class='card-text'>entrada: "+elementsFounds[i].snippet+"</p>");*/
         			/*$(selectorDiv).append("<a href='https://es.wikipedia.org/wiki/"+elementsFounds[i].title+"'>Mirar</a>");*/


		}

	} 	else {
		$(selectorDiv).html("");
		$(".con").html("");
		$(".con").append("<p class='text-center'>No hemos encontrada nada, por favor intenta de nuevo<p>");
		}
	})
}



});

