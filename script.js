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

function ajouterExp(){
var date= document.getElementById('DateExp').value;
var description= document.getElementById('DesExp').value;
document.getElementById('ContenuExperiencesProfessionnelles').innerHTML += '<table><tr><td>' + date + '</td><td>'+ description +'</td></tr></table>';
}
