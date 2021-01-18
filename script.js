var inputField = document.querySelectorAll("input");
var firstName = document.querySelector(".firstName");
var lastName = document.querySelector(".lastName");
var yourEmail = document.querySelector(".email");
var yourPwd = document.querySelector(".password");
var emptyFirstName = document.querySelector(".emptyFirstName");
var emptyLastName = document.querySelector(".emptyLastName");
var emptyEmail = document.querySelector(".emptyEmail");
var emptyPwd = document.querySelector(".emptyPwd");

var submitBtn = document.querySelector(".submitBtn");
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var formGroup=document.querySelector('#form-group');


formGroup.addEventListener("submit", function(e){
	
	if(firstName.value === ""){
		
		e.preventDefault();
		emptyFirstName.textContent = "First Name cannot be empty";
		firstName.classList.add('error');
		firstName.removeAttribute("placeholder");
		
	}
	if(lastName.value === ""){
		e.preventDefault();
		emptyLastName.textContent = "Last Name cannot be empty";
		
		lastName.removeAttribute("placeholder");
		lastName.classList.add('error');
	}
	if(yourEmail.value === ""){
		
		e.preventDefault();
		
		emptyEmail.textContent = "Looks like this is not an email";
		yourEmail.value="email@example/com";
		yourEmail.classList.add("error");
		yourEmail.style.color = "red";
		yourEmail.style.boxShadow = "none";
		yourEmail.style.fontFamily= "Poppins";
		yourEmail.style.fontWeight="400";
		
	}else if(yourEmail.value.match(mailformat) !== true){
		
		e.preventDefault();
		
		emptyEmail.textContent = "Looks like this is not an email";
		yourEmail.value="email@example/com";
		yourEmail.classList.add("error");
		yourEmail.style.color = "red";
		yourEmail.style.boxShadow = "none";
		yourEmail.style.fontFamily= "Poppins";
		yourEmail.style.fontWeight="400";
		
	
	}
	if(yourPwd.value === ""){
		
		e.preventDefault();
		emptyPwd.textContent = "Password cannot be empty";
		yourPwd.classList.add('error');
		yourPwd.removeAttribute("placeholder");
	}
		
		
		
		
});
