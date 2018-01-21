function validateForm() {  
	var email = document.getElementById("Email").value;
	alert('Voulez-vous confirmer votre demande avec cette adresse mailm: ' + email);
   }

function hide(id){
	if(document.getElementById(id).className == "Masque"){
	document.getElementById(id).className = "Display";
	}else if(document.getElementById(id).className != "Masque"){
	document.getElementById(id).className = "Masque";
	}
}
