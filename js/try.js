/*var writers = {

"gabriel garcia marquez" : {

	date: 1947,
	books: 5,
},

"juan rulfo": {
	date: 1955,
	books: 2
}


}


var search = "juan";

// buscador por index
function getSearch(find){

	for(var key in find){

		if (key.indexOf(search) >= 0) {

		console.log(key + " " + find[key].date + " " + find[key].books);
		}
	}
}

getSearch(writers);*/

$(function() {

/*var local =[];*/

/*var records = ["Porque las cosas cambian", "Imagina la nada", 
			   "Viajando ando", "Iam done"
			  ];*/

/*var users = local.length;*/
/*var userCount = [];
var newArray = [];*/

function nada(){

var local =[];
  	 
  	var userCount = [];
  	var newArray = [];

	$('input').keypress(function (e) {
 var key = e.which;
 if(key == 13)  
  {


    var inputentry = $(this).val();

	local.push(inputentry);
	 var users = local.length;
	 console.log(local);
	
	
	



getID(users,userCount);
assignID(local,userCount, newArray);
postInfo(newArray);
	



  }
}); 

}

nada();


function assignID(name, id, toSend) {

	for(var i = 0; i < name.length ; i++){
	var iterative = name[i];
	var iterative2 = id[i];
	toSend.push([iterative, iterative2]);
	}
}


function getID(numberUser,count){
	for(var i = 0; i < numberUser; i++){
		var idUser = i+1;
		count.push(idUser);
	}
}
/*
getID(users);
assignID(records,userCount, newArray);
postInfo(newArray);*/


function postInfo(getAssign){
	for(var entries = 0; entries < getAssign.length; entries++){
	var preinfo = getAssign[entries];

		for(var entries2 = 0; entries2 < preinfo.length; entries2++){

			var postID = preinfo[entries2];
		}
		var post = preinfo[0];
		console.log("La entrada es: "+"'"+ post+ "'" +", el id es: "+ postID   );
	}
}

});





















































/* var scope = "Iam global scope";

var list = [2,4,6,8,10];


function checkScope(){
var arr2 = [];

	function tesla(arr){

		for(var i = 0; i < arr.length; i++){

			arr2.push(arr[i] * 2);
			
		}

	}

	



	
tesla(list);
return arr2;

}

var arrNew = checkScope();
console.log(arrNew);


*/


/*

var scope1 = "global";


var elemento = {
	treinta: function(str){
		return upper(str);
	}
}

var tres = elemento.treinta("ESTO ES UNA FUNCION DE UN OBJETO LLAMANDO A OTRA FUNCION QUE CONVIERTE A MAYUSCULAS");



function checkScope(){
	var scope = " local";

	return scope1 += scope;

	/*function nested(){
		var scoped = "local2";
		return upper(scoped);
	}

	return nested();
}


checkScope();
checkScope();



var scoped2 = upper(scope1) + " " + upper(checkScope()) + " " + tres;

console.log(scope1);


function upper(str){

	var capital = str.toUpperCase();
	return capital;


}

*/