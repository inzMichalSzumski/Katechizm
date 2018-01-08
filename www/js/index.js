$(document).ready(function(){	

	 $(document).bind("mobileinit", function() {
	     $.mobile.page.prototype.options.addBackBtn = true;
	     $.mobile.defaultPageTransition = 'none';
	     $.mobile.useFastClick  = false;
	}); 

	$("b").click(function(){
		if(this.id > 0){
        	var zakladka = window.location.href + " " + this.id
        	localStorage.setItem("zakladki", zakladka);
        	alert("Dodano zakładkę: " + this.id)
        }
    });

    $("#data").keyup(function(event){
    	if(event.keyCode === 13){    		
        	$("#przejdz").click();
    	}
	});

	$.mobile.allowCrossDomainPages = true;

  });

function zakladka(){
	var wartosc = localStorage.getItem("zakladki").substr(localStorage.getItem("zakladki").search(" "),localStorage.getItem("zakladki").length)
	$("#list").append("<center><a class=\"ui-btn\" onclick=\"idzDo( " + wartosc + " )\">"+ wartosc +"</a></center>");

}

function idzDo(tekst){
	var adres = "A";
	 	if(isNaN(tekst)){
	 		alert("Podana wartość musi być liczbą")
	 	} else if(tekst>2865){
	 		alert("Nie ma takiego paragrafu")
	 	} else {
	 		if(tekst < 26){
	 			adres = "kkkwstep.htm"
	 		} else if(tekst < 27){
	 			adres = "kkkI-1wst.htm"
	 		} else if(tekst < 50){
	 			adres = "kkkI-1-1.htm"
	 		} else if(tekst < 142){
	 			adres = "kkkI-1-2.htm"
	 		} else if(tekst < 185){
	 			adres = "kkkI-1-3.htm"
	 		} else if(tekst < 198){
	 			adres = "kkkI-2wst.htm"
	 		} else if(tekst < 422){
	 			adres = "kkkI-2-1.htm"
	 		} else if(tekst < 683){
	 			adres = "kkkI-2-2.htm"
	 		} else if(tekst < 1066){
	 			adres = "kkkI-2-3.htm"
	 		} else if(tekst < 1076){
	 			adres = "kkkII-wst.htm"
	 		} else if(tekst < 1077){
	 			adres = "kkkII-1wst.htm"
	 		} else if(tekst < 1135){
	 			adres = "kkkII-1-1.htm"
	 		} else if(tekst < 1210){
	 			adres = "kkkII-1-2.htm"
	 		} else if(tekst < 1212){
	 			adres = "kkkII-2wst.htm"
	 		} else if(tekst < 1420){
	 			adres = "kkkII-2-1.htm"
	 		} else if(tekst < 1533){
	 			adres = "kkkII-2-2.htm"
	 		} else if(tekst < 1667){
	 			adres = "kkkII-2-3.htm"
	 		} else if(tekst < 1691){
	 			adres = "kkkII-2-4.htm"
	 		} else if(tekst < 1699){
	 			adres = "kkkIII-wst.htm"
	 		} else if(tekst < 1700){
	 			adres = "kkkIII-1wst.htm"
	 		} else if(tekst < 1877){
	 			adres = "kkkIII-1-1.htm"
	 		} else if(tekst < 1949){
	 			adres = "kkkIII-1-2.htm"
	 		} else if(tekst < 2052){
	 			adres = "kkkIII-1-3.htm"
	 		} else if(tekst < 2083){
	 			adres = "kkkIII-2wst.htm"
	 		} else if(tekst < 2196){
	 			adres = "kkkIII-2-1.htm"
	 		} else if(tekst < 2558){
	 			adres = "kkkIII-2-2.htm"
	 		} else if(tekst < 2559){
	 			adres = "kkkIV-wst.htm"
	 		} else if(tekst < 2566){
	 			adres = "kkkIV-1wst"
	 		} else if(tekst < 2650){
	 			adres = "kkkIV-1-1.htm"
	 		} else if(tekst < 2697){
	 			adres = "kkkIV-1-2.htm"
	 		} else if(tekst < 2759){
	 			adres = "kkkIV-1-3.htm"
	 		} else if(tekst < 2866){
	 			adres = "kkkIV-2.htm"
	 		} 
	 		window.location.assign("text/" + adres + "#" + tekst);
	 	}
	 }